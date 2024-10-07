import { StyleSheet, Dimensions } from "react-native";
import { Colors, Sizes, Fonts } from "../../utils/Theme";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Main, // Light background color for the whole screen
  },
  topView: {
    backgroundColor: Colors.Main, // Primary color for the top banner
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
    fontFamily: Fonts.YellowGinger,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
    fontSize: 28,
    fontFamily: Fonts.akaDora,
    marginBottom: 10,
    color: Colors.White_FFFFFF,
  },

  aboutUsDescription: {
    fontSize: 14,
    color: Colors.White_FFFFFF,
    lineHeight: 20,
    fontFamily: Fonts.Italic,
  },
});
