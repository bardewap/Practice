import React, {memo} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles'; // Assume styles are updated accordingly
import {Images} from '../../utils/Theme';
import Loader from '../../components/Loader';

const HomeComponent = memo(props => {
  const currentCourses = [
    {id: '1', title: 'Course 1', description: 'Description of Course 1'},
    {id: '2', title: 'Course 2', description: 'Description of Course 2'},
  ];

  const weeklyQuizzes = [
    {id: '1', title: 'Quiz 1', date: '2024-09-30'},
    {id: '2', title: 'Quiz 2', date: '2024-10-07'},
  ];

  const renderCourseItem = ({item}) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
    </View>
  );

  const renderQuizItem = ({item}) => (
    <View style={styles.quizItem}>
      <Text style={styles.quizTitle}>{item.title}</Text>
      <Text style={styles.quizDate}>Due Date: {item.date}</Text>
      <TouchableOpacity
        style={styles.startQuizButton}
        onPress={() => handleStartQuiz(item)}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );

  const handleStartQuiz = quiz => {
    console.log('Starting quiz:', quiz);
  };

  return (
    <View style={styles.container}>
      <Loader loading={props.isLoading} />
      <View style={styles.topView}>
        <View style={styles.blurContainer}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerText}>Hi Student</Text>
            <TouchableOpacity>
              <Image
                source={Images.profileThumnail} // Fixed typo here
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.bottomText}>Let’s start learning</Text>
        </View>
      </View>
      {/* Current Courses Section */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Current Courses</Text>
          <FlatList
            data={currentCourses}
            renderItem={renderCourseItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>

        {/* Weekly Quizzes Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Weekly Quizzes</Text>
          <FlatList
            data={weeklyQuizzes}
            renderItem={renderQuizItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
    </View>
  );
});

export default HomeComponent;
