import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { Alert, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { launchImageLibrary } from "react-native-image-picker";
import AddNoteComponent from "./AddNoteComponent";

const AddNoteContainer = memo(({ navigation, route }) => {
  const { folderId, onNoteAdded } = route.params;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImageName, setSelectedImageName] = useState(null);
  const [reminderDate, setReminderDate] = useState(new Date()); // Ensure this is a valid date object
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

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

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.error("ImagePicker Error: ", response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedAsset = response.assets[0];
        setSelectedImageName(selectedAsset.fileName);
      }
    });
  };

  const handleAddNote = async () => {
    if (title.trim() === "" || description.trim() === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title,
      description,
      image: selectedImageName,
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
        if (folder?.id === folderId) {
          return { ...folder, notes: [...folder.notes, newNote] };
        }
        return folder;
      });

      await AsyncStorage.setItem("folders", JSON.stringify(updatedFolders));
      Alert.alert("Success", "Note added successfully");
      setTitle("");
      setDescription("");
      setSelectedImageName(null);
      setReminderDate(new Date());
      onNoteAdded();
      navigation.goBack();
    } catch (error) {
      console.error("Error saving note:", error);
      Alert.alert("Error", "Could not save note, please try again.");
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
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteContainer);
