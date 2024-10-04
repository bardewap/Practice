import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  topView: {
    backgroundColor: "#6200EA",
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
  folderItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#E0E7FF",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  folderIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  folderDetails: {
    flex: 1,
  },
  folderTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3A8A",
  },
  fileCount: {
    fontSize: 14,
    color: "#4B5563",
  },
  createFolderButton: {
    backgroundColor: "#03DAC6",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  createFolderButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  createFolderContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  folderInput: {
    flex: 1,
    borderColor: "#6200EA",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#6200EA",
    padding: 10,
    borderRadius: 5,
  },
  saveButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  noFoldersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFoldersText: {
    fontSize: 18,
    color: "#888888",
    textAlign: "center",
  },
  // Added listContainer style
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  modalMessage: {
    marginVertical: 10,
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    justifyContent: "center",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f44336", // Red color for delete button
    marginHorizontal: 5,
    flex: 1,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  modalContainer11: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent11: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancelButton: {
    color: "#FFCC00",
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  doneButton: {
    color: "#FFCC00",
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  folderInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  clearButton: {
    padding: 5,
  },
  clearButtonText: {
    fontSize: 18,
    color: "#999",
  },
  smartFolderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  smartFolderIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  smartFolderText: {
    fontSize: 16,
    color: "#000",
  },
});
