import React, { memo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Images } from "../../utils/Theme";
import styles from "./styles";

const AddQuestionsComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{"Add Question"}</Text>
      </View>
    </View>
  );
});

export default AddQuestionsComponent;
