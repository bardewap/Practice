import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../utils/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Main, // Light background color for the whole screen
    paddingVertical: 15, // Added vertical padding for a balanced look
    paddingHorizontal: 20,
    elevation: 4, // Added shadow for depth
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: "#FFF", // White for contrast with the main background color
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 22, // Increased size for better readability
    fontFamily: Fonts.YellowGinger,
    color: "#FFF",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#FFF",
    fontFamily: Fonts.MontezRegular,
    marginTop: 4,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },

  noNotesText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
    fontFamily: Fonts.Regular,
  },
  addButton: {
    position: "absolute",
    bottom: 30, // Added space from the bottom for better ergonomics
    right: 30, // Same for right side
    width: 60, // Increased size for better tap experience
    height: 60,
    borderRadius: 30, // Perfect circle
    backgroundColor: Colors.cardColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3, // Subtle shadow for floating effect
    shadowRadius: 6,
    elevation: 5,
  },
  addIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  addText: {
    fontSize: 24, // Larger size to make the "+" sign prominent
    color: Colors.Main,
    fontFamily: Fonts.Bold,
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.cardColor,
    marginLeft: 12,
    marginRight: 12,
    fontFamily: Fonts.Italic,
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  reminderIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  reminderText: {
    fontSize: 16,
    color: "#888",
    fontFamily: Fonts.MontezRegular,
  },
  seeMoreText: {
    color: Colors.Main, // Blue for emphasis
    fontWeight: "bold",
    marginTop: 4,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 0.2,
  },
  iconStyle: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  noteItemContainer: {
    paddingVertical: 15, // Adding vertical space between notes
    paddingHorizontal: 20,
    backgroundColor: Colors.cardColor, // White background for the note item
    borderRadius: 8, // Rounded corners for better design aesthetics
    marginBottom: 10, // Space between each note item
    shadowColor: "#000", // Adding shadow for depth
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  noteTitle: {
    fontSize: 24, // Slightly larger title font size
    color: Colors.text, // Consistent text color from theme
    marginBottom: 6, // Space between title and description
    fontFamily: Fonts.akaDora,
  },
  noteDescription: {
    fontSize: 14,
    color: "#555", // Muted color for description
    fontFamily: Fonts.Italic,
  },
});
