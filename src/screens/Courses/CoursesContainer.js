import React, {memo, useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import {Alert, BackHandler} from 'react-native';
import {store} from '../../redux/actions/store';
import moment from 'moment';
import CoursesComponent from './CoursesComponent';
import {useIsFocused} from '@react-navigation/native';
import {Constants, Images, Navigation, ShowAlert} from '../../utils/Theme';

const CoursesContainer = memo(props => {
  const {navigation} = props;
  const [isLoading, setLoading] = React.useState(false);

  const folderDetailsPress = (item,index) => {
    navigation.navigate('FolderDetailsContainer', {data: {item: item}});
  };

  return (
    <CoursesComponent
      folderDetailsPress={folderDetailsPress}
      props={props}
      isLoading={isLoading}
    />
  );
});

const mapStateToProps = ({userSession}) => ({
  userData: userSession,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
