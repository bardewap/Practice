import React, {useState, memo} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Images} from '../../utils/Theme';
import styles from './styles';

const AddNoteComponent = memo(props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props?.backPress()}
          style={styles.backButton}>
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
          onPress={props?.handleImageUpload}>
          <Image source={Images.camera} style={styles.icon} />
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>

        {props?.selectedImageName && (
          <Text style={styles.fileNameText}>
            {`Selected Image: ${props?.selectedImageName}`}
          </Text>
        )}

        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={props?.handleAddNote}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
});

export default AddNoteComponent;
