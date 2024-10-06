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
  const [previousScore, setPreviousScore] = useState(null); // State for previous score
  const [previousScoreNet, setPreviousScoreNet] = useState(null); // State for previous score

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const fetchFolders = async () => {
        const storedFolders = await AsyncStorage.getItem("folders");
        if (storedFolders) {
          setFolders(JSON.parse(storedFolders));
        }
      };
      fetchFolders();
      fetchPreviousScore(); // Fetch the previous score when the component mounts
    }, [])
  );

  // Fetch previous score from AsyncStorage
  const fetchPreviousScore = async () => {
    try {
      const savedScore = await AsyncStorage.getItem("quizScore");
      const savedScoreNet = await AsyncStorage.getItem("quizTwoScore");
      console.log("savedScore", savedScore);

      console.log("savedScoreNet", savedScoreNet);

      if (savedScore !== null) {
        setPreviousScore(parseInt(savedScore, 10));
      }
      if (savedScoreNet !== null) {
        setPreviousScoreNet(parseInt(savedScoreNet, 10));
      }
    } catch (error) {
      console.error("Failed to load previous score", error);
    }
  };

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

  const renderNoteItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => props.handleNoteDetails(item)} // Delete on long press
      style={styles.courseItem}
    >
      <Text style={styles.courseTitle}>{item?.title}</Text>
      <Text numberOfLines={4} style={styles.courseDescription}>
        {item?.description}
      </Text>
    </TouchableOpacity>
  );

  const weeklyQuizzes = [
    { id: "1", title: "Networking Quiz", date: "30" },
    { id: "2", title: "Cyber Security Quiz", date: "30" },
  ];

  const renderQuizItem = ({ item }) => (
    <View style={styles.quizItem}>
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Text style={styles.quizDate}>Total Questions: {item.date}</Text>
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
              <Image source={Images.app_icon} style={styles.profileImage} />
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

        {/* Section to display the previous quiz score */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Previous Quiz Score</Text>
          {previousScore !== null ? (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                Last Quiz Score: {previousScore}
              </Text>
            </View>
          ) : (
            <Text style={styles.noScoreText}>No score available yet.</Text>
          )}
          {previousScoreNet !== null ? (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                Last Quiz Score: {previousScoreNet}
              </Text>
            </View>
          ) : (
            <Text style={styles.noScoreText}>No score available yet.</Text>
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
