import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topView: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#6200EA", // Primary color similar to HomeComponent
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContent: {
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.White_FFFFFF,
  },
  scrollViewContent: {
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.gray,
  },
  userJoinedDate: {
    fontSize: 14,
    color: Colors.lightGray,
    marginTop: 5,
  },
  appVersion: {
    fontSize: 12,
    color: Colors.gray,
    margin: 10,
  },
});
