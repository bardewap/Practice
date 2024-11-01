import React, { memo, useState } from "react";
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
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");

  const handleAddQuestion = () => {
    // Logic to add the new question to your quiz data or API call
    // For example, you might make a POST request here

    // After adding the question, go back to the Quiz screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={props?.backPress} style={styles.backButton}>
          <Image source={Images.back} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{"Add Question"}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Add a New Question</Text>

        <TextInput
          placeholder="Question"
          value={question}
          onChangeText={setQuestion}
          style={styles.input}
        />
        <TextInput
          placeholder="Option 1"
          value={option1}
          onChangeText={setOption1}
          style={styles.input}
        />
        <TextInput
          placeholder="Option 2"
          value={option2}
          onChangeText={setOption2}
          style={styles.input}
        />
        <TextInput
          placeholder="Option 3"
          value={option3}
          onChangeText={setOption3}
          style={styles.input}
        />
        <TextInput
          placeholder="Option 4"
          value={option4}
          onChangeText={setOption4}
          style={styles.input}
        />
        <TextInput
          placeholder="Correct Option"
          value={correctOption}
          onChangeText={setCorrectOption}
          style={styles.input}
        />

        <Button title="Add Question" onPress={handleAddQuestion} />
      </View>
    </View>
  );
});

export default AddQuestionsComponent;
