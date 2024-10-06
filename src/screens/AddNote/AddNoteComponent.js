import React, { memo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Images } from "../../utils/Theme";
import styles from "./styles";

const AddNoteComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Note</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={props?.title}
          onChangeText={props?.setTitle}
        />

        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Description"
          multiline
          value={props?.description}
          onChangeText={props?.setDescription}
        />

        <TouchableOpacity
          style={styles.uploadSection}
          onPress={props?.handleImageUpload}
        >
          <Image source={Images.camera} style={styles.icon} />
          <Text style={styles.uploadText}>Upload Note</Text>
        </TouchableOpacity>

        {props?.selectedImageName && props?.selectedImageUri && (
          <View>
            <Text style={styles.fileNameText}>
              {`Selected Image: ${props?.selectedImageName}`}
            </Text>
            <Image
              source={{ uri: props?.selectedImageUri }} // Display the selected image
              style={styles.selectedImage}
            />
          </View>
        )}

        {/* Add Reminder Section */}
        <TouchableOpacity
          style={styles.reminderSection}
          onPress={() => props?.setShowDatePicker(true)}
        >
          <Image source={Images.reminder} style={styles.icon} />
          <Text style={styles.reminderText}>
            {props?.reminderDate
              ? `Reminder: ${props?.reminderDate.toLocaleDateString()} at ${props?.reminderDate.toLocaleTimeString()}`
              : "Set Reminder"}
          </Text>
        </TouchableOpacity>

        {props?.showDatePicker && (
          <DateTimePicker
            value={props?.reminderDate || new Date()}
            mode="date" // Date selection first
            display="default"
            onChange={props?.handleDateChange} // After selecting the date
          />
        )}

        {props?.showTimePicker && (
          <DateTimePicker
            value={props?.reminderDate || new Date()}
            mode="time" // Time selection after date
            display="default"
            onChange={props?.handleTimeChange} // After selecting the time
          />
        )}

        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={props?.handleAddNote}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
});

export default AddNoteComponent;
