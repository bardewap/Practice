import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White_FFFFFF,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Main,
    padding: 15,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: "#FFF",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#FFF",
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
  },
  topView: {
    backgroundColor: "#6200EA", // Primary color similar to HomeComponent
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerContainer: {
    backgroundColor: "#6200EA", // Primary color
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  scrollViewContent: {
    padding: 15,
  },
  input: {
    height: 50,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  descriptionInput: {
    height: 100,
  },
  uploadSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  uploadText: {
    fontSize: 16,
    color: "#6200EA",
  },
  fileNameText: {
    marginTop: 5,
    color: "#333333",
  },
  addButtonContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  addButton: {
    backgroundColor: "#34D399",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  reminderSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 20,
  },
  reminderText: {
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },

  quizContainer: {
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  selectedOption: {
    backgroundColor: "#d0f0c0",
    borderColor: "#90ee90",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  nextButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 20,
  },
  startQuizButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },
  startQuizButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff0000", // Red color for emphasis
    marginLeft: 10,
  },
});
