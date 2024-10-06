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
import moment from "moment";

const HomeComponent = memo((props) => {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

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
    const allNotes = props?.folders?.flatMap((folder) => folder?.notes);
    const sortedNotes = allNotes.sort((a, b) => b?.id.localeCompare(a?.id));
    return sortedNotes.slice(0, limit);
  };

  const recentNotes = getRecentNotesById(props?.folders);

  // const renderNoteItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => props.handleNoteDetails(item)} // Delete on long press
  //     style={styles.courseItem}
  //   >
  //     <Text style={styles.courseTitle}>{item?.title}</Text>
  //     <Text numberOfLines={4} style={styles.courseDescription}>
  //       {item?.description}
  //     </Text>

  //   </TouchableOpacity>
  // );

  const renderNoteItem = ({ item }) => (
    <View
      // Delete on long press
      style={styles.noteItemContainer}
    >
      <TouchableOpacity
        onPress={() => props.handleNoteDetails(item)}
        style={{ flex: 0.8 }}
      >
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.noteDescription}>
          {item.description}
        </Text>
        {item.reminderDate && (
          <View style={styles.reminderContainer}>
            <Image source={Images.reminder} style={styles.reminderIcon} />
            <Text style={styles.reminderText}>
              Reminder:{" "}
              {moment(item.reminderDate).format("MMMM Do YYYY, h:mm a")}
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => props.handleEditNote(item)}>
          <Image source={Images.edit} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.handleDeleteNote(item.id)}>
          <Image source={Images.delete} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
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
          {props?.previousScore !== null ? (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                Last Networking Quiz Score: {props?.previousScore}
              </Text>
            </View>
          ) : (
            <Text style={styles.noScoreText}>No score available yet.</Text>
          )}
          {props?.previousScoreNet !== null ? (
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>
                Last Cyber Security Quiz Score: {props?.previousScoreNet}
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
