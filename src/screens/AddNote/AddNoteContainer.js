import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import AddNoteComponent from "./AddNoteComponent";
import PushNotification from "react-native-push-notification";
import RNFS from "react-native-fs";

const AddNoteContainer = memo(({ navigation, route }) => {
  const {
    folderId,
    onNoteAdded,
    noteId,
    title: initialTitle,
    description: initialDescription,
    image: initialImage,
    reminderDate: initialReminderDate,
  } = route.params;

  const [title, setTitle] = useState(initialTitle || ""); // Prepopulate if editing
  const [description, setDescription] = useState(initialDescription || "");
  const [selectedImageUri, setSelectedImageUri] = useState(
    initialImage || null
  ); // Prepopulate the image URI if editing
  const [reminderDate, setReminderDate] = useState(
    initialReminderDate ? new Date(initialReminderDate) : new Date()
  ); // Use the passed reminder date

  useEffect(() => {
    if (initialImage) {
      setSelectedImageUri(
        initialImage.startsWith("file://")
          ? initialImage
          : `file://${initialImage}`
      );
    }
  }, [initialImage]);
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    requestPermissions: Platform.OS === "ios",
  });

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "your-channel-id", // (required)
        channelName: "My channel", // (required)
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const backPress = () => {
    navigation.goBack();
  };

  const handleImageUpload = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
    };

    Alert.alert(
      "Select Image",
      "Choose an option",
      [
        {
          text: "Camera",
          onPress: () => launchCamera(options, handleResponse),
        },
        {
          text: "Gallery",
          onPress: () => launchImageLibrary(options, handleResponse),
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const saveImageLocally = async (imageUri) => {
    const filename = imageUri.split("/").pop(); // Extract the filename from the URI
    const path = `${RNFS.DocumentDirectoryPath}/${filename}`; // Set the path in the local filesystem

    try {
      await RNFS.copyFile(imageUri, path); // Copy the file to the local filesystem
      return path; // Return the new local path
    } catch (error) {
      console.error("Error saving image locally:", error);
      return null;
    }
  };

  const handleResponse = (response) => {
    if (response.didCancel) {
      console.log("User cancelled image picker");
    } else if (response.errorCode) {
      console.error("ImagePicker Error: ", response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const selectedAsset = response.assets[0];
      setSelectedImageName(selectedAsset.fileName);
      setSelectedImageUri(selectedAsset.uri); // Save the URI for display
    }
  };

  const handleAddNote = async () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Handle the image path
    let localImagePath = null;
    if (selectedImageUri) {
      localImagePath = `file://${selectedImageUri}`; // Ensure the path has the 'file://' prefix
    }

    // Create or update the note
    const newNote = {
      id: noteId || Date.now().toString(),
      title,
      description,
      image: localImagePath, // Use the correctly formatted path
      folderId,
      reminderDate,
    };

    try {
      const existingFolders = await AsyncStorage.getItem("folders");
      const foldersArray = existingFolders ? JSON.parse(existingFolders) : [];
      const updatedFolders = foldersArray.map((folder) => {
        if (!folder.notes) {
          folder.notes = [];
        }

        // Check if it's an edit or a new note
        if (folder.id === folderId) {
          if (noteId) {
            // Editing an existing note
            const updatedNotes = folder.notes.map((note) =>
              note.id === noteId ? newNote : note
            );
            return { ...folder, notes: updatedNotes };
          } else {
            // Adding a new note
            return { ...folder, notes: [...folder.notes, newNote] };
          }
        }
        return folder;
      });

      // Save updated folders back to AsyncStorage
      await AsyncStorage.setItem("folders", JSON.stringify(updatedFolders));

      Alert.alert(
        "Success",
        noteId ? "Note updated successfully" : "Note added successfully"
      );
      navigation.goBack();

      setTitle("");
      setDescription("");
      setSelectedImageUri(null); // Clear the image selection
      setReminderDate(new Date());
      onNoteAdded(); // Notify parent that note was added/edited
    } catch (error) {
      console.error("Error saving note:", error);
      // Alert.alert("Error", "Could not save note, please try again.");
    }
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setReminderDate(selectedDate);
      setShowDatePicker(false);
      setShowTimePicker(true); // Show time picker after the date is set
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      const updatedDateTime = new Date(
        reminderDate.setHours(
          selectedTime.getHours(),
          selectedTime.getMinutes()
        )
      );
      setReminderDate(updatedDateTime); // Update the date with selected time
      setShowTimePicker(false);
    }
  };

  // const sendNotification = () => {
  //   createChannel();
  //   PushNotification.localNotification({
  //     channelId: "your-channel-id",
  //     id: 0,
  //     title: `My Name's Alireza`,
  //     message: "Hi 👋",
  //   });
  // };

  const scheduleNotification = (date, title) => {
    createChannel();
    PushNotification.localNotificationSchedule({
      channelId: "your-channel-id",
      id: 0, // Optional: Unique ID for the notification
      title: `Reminder: ${title}`,
      message: "Don't forget your note!",
      date: new Date(), // Schedule notification at the specified date
    });
    console.log("scheduleNotification");
  };

  return (
    <AddNoteComponent
      backPress={backPress}
      title={title}
      description={description}
      selectedImageName={selectedImageName}
      handleImageUpload={handleImageUpload}
      handleAddNote={handleAddNote}
      setTitle={setTitle}
      setDescription={setDescription}
      reminderDate={reminderDate}
      showDatePicker={showDatePicker}
      showTimePicker={showTimePicker}
      handleDateChange={handleDateChange}
      handleTimeChange={handleTimeChange}
      setShowDatePicker={setShowDatePicker}
      selectedImageUri={selectedImageUri}
      noteId={noteId} // Pass the URI to the component
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteContainer);
