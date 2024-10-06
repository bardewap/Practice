import React, { memo, useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { Images } from "../../utils/Theme";
import Loader from "../../components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import SeeMore from "react-native-see-more-inline";
import { PermissionsAndroid, Platform } from "react-native";

const HomeComponent = memo((props) => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const fetchFolders = async () => {
        const storedFolders = await AsyncStorage.getItem("folders");
        if (storedFolders) {
          setFolders(JSON.parse(storedFolders));

          console.log(
            "storedFolders",
            JSON.stringify(JSON.parse(storedFolders))
          );
        }
      };
      fetchFolders();
    }, [])
  );
  const requestNotificationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        PermissionsAndroid.check("android.permission.POST_NOTIFICATIONS")
          .then((response) => {
            if (!response) {
              PermissionsAndroid.request(
                "android.permission.POST_NOTIFICATIONS",
                {
                  title: "Notification",
                  message:
                    "App needs access to your notification " +
                    "so you can get Updates",
                  buttonNeutral: "Ask Me Later",
                  buttonNegative: "Cancel",
                  buttonPositive: "OK",
                }
              );
            }
          })
          .catch((err) => {
            console.log("Notification Error=====>", err);
          });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getRecentNotesById = (folders, limit = 3) => {
    const allNotes = folders?.flatMap((folder) => folder?.notes);

    const sortedNotes = allNotes.sort((a, b) => b?.id.localeCompare(a?.id));

    return sortedNotes.slice(0, limit);
  };

  const recentNotes = getRecentNotesById(folders);
  console.log("recentNotes", recentNotes);

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => props.handleNoteDetails(item)} // Delete on long press
      style={styles.courseItem}
    >
      <Text style={styles.courseTitle}>{item?.title}</Text>
      {/* <SeeMore
        numberOfLines={5} // Number of lines before truncating
        style={styles.courseDescription}
        seeMoreText="See More"
        seeLessText="See Less"
        seeMoreStyle={styles.seeMoreText} // Optional custom style for "See More" text
        seeLessStyle={styles.seeMoreText} // Optional custom style for "See Less" text
      >
        {item.description}
      </SeeMore> */}
      <Text numberOfLines={4} style={styles.courseDescription}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  );

  const currentCourses = [
    { id: "1", title: "Course 1", description: "Description of Course 1" },
    { id: "2", title: "Course 2", description: "Description of Course 2" },
  ];

  const weeklyQuizzes = [
    { id: "1", title: "Networking Quiz", date: "2025-09-30" },
    { id: "2", title: "Cyber Security Quiz", date: "2025-10-07" },
  ];

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
    </View>
  );

  const renderQuizItem = ({ item }) => (
    <View style={styles.quizItem}>
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Text style={styles.quizDate}>Due Date: {item.date}</Text>
      <TouchableOpacity
        style={styles.startQuizButton}
        onPress={() => props?.handleStartQuiz(item)}
      >
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );

  const handleStartQuiz = (quiz) => {
    console.log("Starting quiz:", quiz);
  };

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Hi Student</Text>
            <TouchableOpacity>
              <Image
                source={Images.app_icon} // Fixed typo here
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}>Let’s start learning</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Recently Created Notes</Text>
          {recentNotes?.length > 0 || recentNotes == [] ? (
            <FlatList
              data={recentNotes}
              renderItem={renderNoteItem}
              keyExtractor={(item) => item?.id}
              contentContainerStyle={styles.listContainer}
            />
          ) : (
            <View style={styles.noNotesContainer}>
              <Text style={styles.noNotesText}>
                No recently created notes available.
              </Text>
              <Image
                source={Images.noNotesIllustration}
                style={styles.noNotesImage}
                resizeMode="contain"
              />
            </View>
          )}
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Weekly Quizzes</Text>
          <FlatList
            data={weeklyQuizzes}
            renderItem={renderQuizItem}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
});

export default HomeComponent;
