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
});
