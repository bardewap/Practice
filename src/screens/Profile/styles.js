import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
  scrollViewContent: {
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginVertical: 20,
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
    textAlign: "center",
  },
  aboutUsSection: {
    // padding: 15,
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
  },

  aboutUsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.primary,
  },

  aboutUsDescription: {
    fontSize: 14,
    color: Colors.darkGray,
    lineHeight: 20,
  },
});
