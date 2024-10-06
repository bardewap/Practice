import React, { memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import styles from "./styles";
import { Images } from "../../utils/Theme";
import Loader from "../../components/Loader";
import moment from "moment";
import SeeMore from "react-native-see-more-inline"; // Import the SeeMore component

const FolderDetailsComponent = memo((props) => {
  const { searchQuery, setSearchQuery } = props;
  const currentTime = moment().format("MMMM Do YYYY, h:mm:ss a"); // Get the current time

  // Filter the notes based on the search query
  const filteredNotes = props?.notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const renderNoteItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => props.handleNoteDetails(item)} // Delete on long press
  //     onLongPress={() => props.handleDeleteNote(item.id)} // Delete on long press
  //     style={styles.noteItemContainer}
  //   >
  //     <Text style={styles.noteTitle}>{item.title}</Text>
  //     <Text numberOfLines={4} style={styles.noteDescription}>
  //       {item.description}
  //     </Text>
  //     {/* <SeeMore
  //       numberOfLines={3} // Number of lines before truncating
  //       style={styles.noteDescription}
  //       seeMoreText="See More"
  //       seeLessText="See Less"
  //       seeMoreStyle={styles.seeMoreText} // Optional custom style for "See More" text
  //       seeLessStyle={styles.seeMoreText} // Optional custom style for "See Less" text
  //     >
  //       {item.description}
  //     </SeeMore> */}

  //     {/* Render the reminder section if reminderDate exists */}
  //     {item.reminderDate && (
  //       <View style={styles.reminderContainer}>
  //         <Image source={Images.reminder} style={styles.reminderIcon} />
  //         <Text style={styles.reminderText}>
  //           Reminder: {moment(item.reminderDate).format("MMMM Do YYYY, h:mm a")}
  //         </Text>
  //       </View>
  //     )}
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
        <Text style={styles.noteTitle}>{item?.title}</Text>
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

  return (
    <View style={styles.container}>
      <Loader loading={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={props.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>{props?.data?.item?.title}</Text>
          <Text style={styles.headerSubtitle}>{currentTime}</Text>
        </View>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search notes..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Update search query
        />
      </View>

      {/* Notes List */}
      <View style={styles.contentContainer}>
        {filteredNotes.length > 0 ? (
          <FlatList
            data={filteredNotes}
            showsVerticalScrollIndicator={false}
            renderItem={renderNoteItem}
            keyExtractor={(item) => item.id} // Use unique id as key
          />
        ) : (
          <Text style={styles.noNotesText}>{"No notes found."}</Text>
        )}
      </View>

      {/* Add Note Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => props.onAddNote(props?.data?.item?.id)}
      >
        <Text style={styles.addText}>{"+"}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default FolderDetailsComponent;
