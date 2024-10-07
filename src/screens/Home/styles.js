import { StyleSheet, Dimensions } from "react-native";
import colors from "../../globals/colors";
import { Colors, Sizes, Fonts, Constants } from "../../utils/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3", // Light background color for the whole screen
  },
  topView: {
    height: 200,
    backgroundColor: "#4A90E2", // Primary color for the top banner
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: "#4A90E2", // Slight transparent white overlay
    borderRadius: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  bannerText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#4A90E2",
  },
  bottomText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
  scrollView: {
    marginVertical: 20,
  },
  sectionContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4A90E2",
  },
  listContainer: {
    paddingBottom: 10,
  },
  noteItemContainer: {
    backgroundColor: "#73bfdc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noteTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
  },
  noteDescription: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },
  reminderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  reminderIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  reminderText: {
    fontSize: 12,
    color: "#FF8C42", // Highlighting reminders
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  quizItem: {
    backgroundColor: "#73bfdc",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
  },
  quizTitle: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
  },
  quizDate: {
    fontSize: 14,
    color: "#666666",
    marginTop: 5,
  },
  startQuizButton: {
    marginTop: 10,
    backgroundColor: "#4A90E2",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  scoreContainer: {
    backgroundColor: "#EFF6FD",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  scoreText: {
    fontSize: 14,
    color: "#333333",
  },
  noNotesContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  noNotesText: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 10,
  },
  noNotesImage: {
    width: 150,
    height: 150,
  },
  noScoreText: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
  },
});
