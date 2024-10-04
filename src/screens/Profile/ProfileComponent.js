import React, { memo } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import { Colors, Fonts, Images } from "../../utils/Theme";
import Loader from "../../components/Loader";
import moment from "moment";

const ProfileComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>StudyMate</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileSection}>
          <Image source={Images.app_icon} style={styles.profileImage} />
          <Text style={styles.appVersion}>App version:1.2</Text>

          {/* <Text style={styles.userName}>User Name</Text> */}
          {/* <Text style={styles.userEmail}>user@example.com</Text> */}
          <Text style={styles.userJoinedDate}>
            Joined on {moment().format("MMMM Do YYYY")}
          </Text>
        </View>

        {/* Additional sections can go here */}
      </ScrollView>
    </View>
  );
});

export default ProfileComponent;
