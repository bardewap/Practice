import React, {useState, useEffect, memo, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  Modal,
  StyleSheet,
} from 'react-native';
import styles from './styles';
import {Images} from '../../utils/Theme'; // Assuming you have a folder icon in Images
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const CoursesComponent = memo(props => {
  const {navigation} = props;
  const [folders, setFolders] = useState([]);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState(null);

  useFocusEffect(
    useCallback(() => {
      const fetchFolders = async () => {
        const storedFolders = await AsyncStorage.getItem('folders');
        if (storedFolders) {
          setFolders(JSON.parse(storedFolders));

          console.log(
            'storedFolders',
            JSON.stringify(JSON.parse(storedFolders)),
          );
        }
      };
      fetchFolders();
    }, []),
  );

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) {
      Alert.alert('Please enter a folder name');
      return;
    }

    const newFolder = {
      id: Date.now().toString(), // Unique ID for the folder
      title: newFolderName,
      filesCount: 0, // Initially, 0 files in the folder
    };

    const updatedFolders = [...folders, newFolder];

    try {
      // Store the new folder in AsyncStorage
      await AsyncStorage.setItem('folders', JSON.stringify(updatedFolders));
      setFolders(updatedFolders);
      setNewFolderName('');
      setIsCreatingFolder(false);
    } catch (error) {
      console.error('Error creating folder:', error);
    }
  };

  const renderFolderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => props.folderDetailsPress(item)}
      onLongPress={() => {
        setFolderToDelete(item); // Set the folder to be deleted
        setModalVisible(true); // Show the confirmation modal
      }}
      style={styles.folderItem}>
      <Image source={Images.folder} style={styles.folderIcon} />
      <View style={styles.folderDetails}>
        <Text style={styles.folderTitle}>{item.title}</Text>
        <Text style={styles.fileCount}>
          {item?.notes ? item?.notes?.length : '0'} files
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handleDeleteFolder = async () => {
    if (!folderToDelete) return;

    const updatedFolders = folders.filter(
      folder => folder.id !== folderToDelete.id,
    );

    try {
      // Update AsyncStorage
      await AsyncStorage.setItem('folders', JSON.stringify(updatedFolders));
      setFolders(updatedFolders);
      setModalVisible(false);
      setFolderToDelete(null);
    } catch (error) {
      console.error('Error deleting folder:', error);
    }
  };
  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Your Folders</Text>
            <TouchableOpacity>
              <Image
                source={Images.profileThumnail}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}>Manage your folders</Text>

          {/* Create Folder Button */}
          <TouchableOpacity
            style={styles.createFolderButton}
            onPress={() => setIsCreatingFolder(!isCreatingFolder)}>
            <Text style={styles.createFolderButtonText}>Create Folder</Text>
          </TouchableOpacity>

          {/* Input for Folder Name */}
          {isCreatingFolder && (
            <View style={styles.createFolderContainer}>
              <TextInput
                style={styles.folderInput}
                placeholder="Enter folder name"
                value={newFolderName}
                onChangeText={setNewFolderName}
              />
              <TouchableOpacity
                onPress={handleCreateFolder}
                style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {folders.length === 0 ? (
        <View style={styles.noFoldersContainer}>
          <Text style={styles.noFoldersText}>No folders available</Text>
        </View>
      ) : (
        <FlatList
          data={folders}
          renderItem={renderFolderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Confirmation Modal for Deletion */}
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Deletion</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to delete the folder "
              {folderToDelete?.title}"?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  setFolderToDelete(null);
                }}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleDeleteFolder}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default CoursesComponent;
