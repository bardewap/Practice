import React, { memo } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Images } from "../../utils/Theme";
import styles from "./styles";

const QuizComponent = memo((props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Note</Text>
      </View>
    </View>
  );
});

export default QuizComponent;
