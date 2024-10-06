import React, { memo } from "react";
import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";
import { BackHandler } from "react-native";
import { useRoute, useFocusEffect } from "@react-navigation/native";

const HomeContainer = memo((props) => {
  const { navigation } = props;
  const [isLoading, setLoading] = React.useState(false);
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === "HomeContainer") {
          BackHandler.exitApp();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [route])
  );

  React.useEffect(() => {}, []);

  const handleNoteDetails = (item) => {
    navigation.navigate("NoteDetailsContainer", { data: { item: item } });
  };

  const handleStartQuiz = (item) => {
    navigation.navigate("QuizContainer");
  };

  return (
    <HomeComponent
      handleNoteDetails={handleNoteDetails}
      props={props}
      isLoading={isLoading}
      handleStartQuiz={handleStartQuiz}
    />
  );
});

const mapStateToProps = ({ userSession }) => ({
  userData: userSession,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
