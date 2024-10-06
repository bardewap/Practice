import { StyleSheet, Dimensions } from "react-native";
import colors from "../../globals/colors";
import { Colors, Sizes, Fonts, Constants } from "../../utils/Theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8", // Light background
  },
  topView: {
    backgroundColor: "#6200EA", // Primary color
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  blurContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  bannerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  bannerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
  bottomText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  sectionContainer: {
    padding: 15,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  courseItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#E0E7FF",
    marginVertical: 5,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3A8A",
  },
  courseDescription: {
    fontSize: 14,
    color: "#4B5563",
  },
  quizItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#D1FAE5",
    marginVertical: 5,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#047857",
  },
  quizDate: {
    fontSize: 14,
    color: "#4B5563",
  },
  startQuizButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#34D399",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  noNotesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noNotesText: {
    fontSize: 12,
    color: "#666", // Use a color that fits your theme
    marginBottom: 10,
  },
  noNotesImage: {
    width: 80, // Adjust size as needed
    height: 80,
  },
  seeMoreText: {
    color: "blue", // Ensure the color is visible against your background
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 5,
  },
  scoreContainer: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00796b",
  },
  noScoreText: {
    fontSize: 16,
    color: "#757575",
  },
});
