import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";

const NoteDetailsComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props?.data?.item?.title}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.detailSection}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>
            {props?.data?.item?.description || "No Description"}
          </Text>
        </View>

        {props?.selectedImage && (
          <View style={styles.imageSection}>
            <Text style={styles.label}>Attached Image</Text>
            <Image
              source={{ uri: props?.selectedImage }}
              style={styles.noteImage}
            />
          </View>
        )}
        {props?.data?.item?.reminderDate && (
          <View style={styles.reminderSection}>
            <Text style={styles.label}>Reminder :</Text>
            <Text style={styles.reminderText}>
              {props?.data?.item?.reminderDate}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
});

export default NoteDetailsComponent;
