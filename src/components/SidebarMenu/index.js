import React, {useState, useEffect, memo, useRef} from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {
  Colors,
  Sizes,
  ValidationMessages,
  Constants,
  Fonts,
  Images,
} from '../../utils/Theme';
import VirtualizedList from '../../components/VirtualizedList';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActionSheet from 'react-native-actionsheet';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import images from '../../globals/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../../redux/actions/store';

const CustomSidebarMenu = memo(({navigation, clearUserSession, userData}) => {
  const isDrawerOpen = useDrawerStatus() === 'open';
  const optionArray = ['Logout', 'Cancel'];
  let actionSheet = useRef();
  const [dataArray, setDataArray] = useState([
    {
      imageS: Images.home_s,
      imageUn: Images.home_Un,
      navOptionName: 'Home',
      screenToNavigate: 'HomeContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.appoitment_s,
      imageUn: Images.appoitment_Un,
      navOptionName: 'Appointments',
      screenToNavigate: 'CoursesContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.timeSheet_s,
      imageUn: Images.timeSheet_Un,
      navOptionName: 'Timesheets',
      screenToNavigate: 'TimesheetContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.MedicationManagement_s,
      imageUn: Images.MedicationManagement_Un,
      navOptionName: 'Medication Management',
      screenToNavigate: 'MedicationManagementContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.availability_s,
      imageUn: Images.availability_Un,
      navOptionName: 'Availability',
      screenToNavigate: 'MessageContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.progress_s,
      imageUn: Images.progress_Un,
      navOptionName: 'Progress Notes',
      screenToNavigate: 'ProgressNotesListContainer',
      type: Constants.userTypeHCSC,
    },
    {
      imageS: Images.shiftnotes_s,
      imageUn: Images.shiftnotes_Un,
      navOptionName: 'Continue Shift Notes',
      screenToNavigate: 'ContinueShiftNotesContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.incidents_s,
      imageUn: Images.incidents_Un,
      navOptionName: 'Incidents',
      screenToNavigate: 'IncidentsListContainer',
      type: Constants.userTypeHCSC,
    },
    {
      imageS: Images.quickTask_s,
      imageUn: Images.quickTask_Un,
      navOptionName: 'Invoices',
      screenToNavigate: 'InvoiceListContainer',
      type: Constants.userTypeHCSC,
    },
    {
      imageS: Images.profile_s,
      imageUn: Images.prof_un,
      navOptionName: 'Profile',
      screenToNavigate: 'ProfileContainer',
      type: Constants.userTypeHCSC,
    },
  ]);

  const [dataArrayTwo, setDataArrayTwo] = useState([
    {
      imageS: Images.home_s,
      imageUn: Images.home_Un,
      navOptionName: 'Home',
      screenToNavigate: 'HomeContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.appoitment_s,
      imageUn: Images.appoitment_Un,
      navOptionName: 'Appointments',
      screenToNavigate: 'CoursesContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.timeSheet_s,
      imageUn: Images.timeSheet_Un,
      navOptionName: 'Timesheets',
      screenToNavigate: 'TimesheetContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.MedicationManagement_s,
      imageUn: Images.MedicationManagement_Un,
      navOptionName: 'Medication Management',
      screenToNavigate: 'MedicationManagementContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.availability_s,
      imageUn: Images.availability_Un,
      navOptionName: 'Availability',
      screenToNavigate: 'MessageContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.progress_s,
      imageUn: Images.progress_Un,
      navOptionName: 'Progress Notes',
      screenToNavigate: 'ProgressNotesListContainer',
      type: Constants.userTypeHCSC,
    },
    {
      imageS: Images.shiftnotes_s,
      imageUn: Images.shiftnotes_Un,
      navOptionName: 'Continue Shift Notes',
      screenToNavigate: 'ContinueShiftNotesContainer',
      type: Constants.userTypeHC,
    },
    {
      imageS: Images.incidents_s,
      imageUn: Images.incidents_Un,
      navOptionName: 'Incidents',
      screenToNavigate: 'IncidentsListContainer',
      type: Constants.userTypeHCSC,
    },

    {
      imageS: Images.profile_s,
      imageUn: Images.prof_un,
      navOptionName: 'Profile',
      screenToNavigate: 'ProfileContainer',
      type: Constants.userTypeHCSC,
    },
  ]);

  useEffect(() => {
    if (userData.isUserLoggedin === true) {
      setDataProfile();
      if (userData.userType == Constants.userTypeSC) {
        // This loads different menu if the user type is SC
        const filteredArray = dataArray.filter(
          item =>
            item.type === Constants.userTypeHCSC ||
            item.type === Constants.userTypeSC,
        );
        setDataArray(filteredArray);
      }
    }
  }, [navigation, isDrawerOpen]);

  const setDataProfile = async () => {
    const {user_data, user_profile} = store.getState().userSession;
    console.log('user_data', user_data);
    setData({
      ...data,
      mobile: user_data.mobile,
      name: user_data.firstName + ' ' + user_data.lastName,
      employeeId: user_data.employeeId,
      isSoleTrader: user_data.isSoleTrader,
      profileImage: user_profile[0]?.profileImage?.location,
      avtarImage: user_profile[0]?.avtarImage?.location,
      isAvtarActivate: user_profile[0]?.isAvtarActivate,
    });
  };
  const [data, setData] = useState({
    email: '',
    profileImage: '',
    name: '',
    mobile: '',
    employeeId: '',
    avtarImage: '',
    isSoleTrader: false,
    isAvtarActivate: false,
  });

  const [selectedItem, setSelectedItem] = useState(false);

  const onClick = item => {
    navigation.closeDrawer();
    setSelectedItem(item);
    navigation.navigate(item.screenToNavigate);
  };

  const signInButtonPress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  const actionSheetAction = async index => {
    if (index == 0) {
      setTimeout(async () => {
        clearUserSession();
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
        navigation.navigate('LoginContainer');
        try {
          await AsyncStorage.removeItem('notifications');
        } catch (e) {}
        try {
          await AsyncStorage.removeItem('tokenData');
        } catch (e) {}
      }, 100);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        onClick(item);
        setSelectedItem(item);
      }}
      style={styles.rowMainContainerStyle}>
      <Image
        source={selectedItem === item ? item.imageS : item.imageUn}
        style={{height: 30, width: 25, resizeMode: 'contain'}}
      />
      <Text style={styles.rowMainContainerTextStyle}>{item.navOptionName}</Text>
      <View style={styles.borderLine} />
    </TouchableOpacity>
  );
  const renderActionSheet = () => (
    <ActionSheet
      ref={actionSheet}
      title={ValidationMessages.logoutM}
      options={optionArray}
      cancelButtonIndex={optionArray.length - 1}
      onPress={index => {
        actionSheetAction(index);
      }}
    />
  );

  return (
    <View style={styles.sideMenuContainer}>
      {renderActionSheet()}
      <VirtualizedList>
        <View style={{flex: 1}}>
          <View style={styles.profileNameColum}>
            <Image
              source={Images.splash_logo}
              style={{height: 100, width: 100, top: 25}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              left: 15,
              marginBottom: 10,
              marginTop: 10,
            }}>
            {data?.isAvtarActivate ? (
              <Image
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                }}
                source={
                  data?.avtarImage == undefined
                    ? Images.profileThumnail
                    : {uri: data?.avtarImage}
                }
              />
            ) : (
              <Image
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: 'cover',
                  borderRadius: 20,
                }}
                source={
                  data?.avtarImage == undefined
                    ? Images.profileThumnail
                    : {uri: data?.profileImage}
                }
              />
            )}
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  left: 10,
                  color: '#202E2A',
                }}>
                {data?.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  left: 10,
                  color: '#8C8C8C',
                }}>
                {data?.employeeId}
              </Text>
            </View>
          </View>

          <View style={styles.borderLine} />
        </View>

        <FlatList
          data={data.isSoleTrader == false ? dataArrayTwo : dataArray}
          renderItem={renderItem}
          keyExtractor={item => item.navOptionName}
        />
      </VirtualizedList>
      {/* {userData.isUserLoggedin ? (
        <TouchableOpacity
          onPress={() => signOutButtonPress()}
          style={styles.logOutView}>
          <Image
            style={{
              marginRight: 10,
              height: 20,
              width: 24,
              resizeMode: 'contain',
            }}
            source={images.silder_logOut}
          />
          <Text style={styles.logOutText}>Sign Out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => signInButtonPress()}
          style={styles.logOutView}>
          <Image
            style={{
              marginRight: 10,
              height: 20,
              width: 24,
              resizeMode: 'contain',
            }}
            source={images.silder_logOut}
          />
          <Text style={styles.logOutText}>Sign In</Text>
        </TouchableOpacity>
      )} */}

      <Text
        style={{
          fontSize: 12,
          alignItems: 'stretch',
          marginLeft: 25,
          fontFamily: Fonts.Regular,
          fontWeight: '500',
          color: Colors.Main,
          marginTop: 5,
          marginBottom: 15,
        }}>
        {Constants.appVersion}
      </Text>
    </View>
  );
});
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.White_FFFFFF,
    paddingTop: 0,
    overlayColor: '#6b52ae',
  },

  profileImg: {
    height: 70,
    width: 45,
    marginTop: 10,
    marginLeft: -12,
  },
  profilePhoto: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.Main,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Black_000000,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderWidth: 1,
  },
  profileText: {
    fontSize: Sizes.Medium,
    color: Colors.White_FFFFFF,
    alignItems: 'center',
  },
  profileNameColum: {
    flex: 1,
    // backgroundColor: Colors.mainColor,
    padding: 35,
    // alignItems: 'center',
  },
  profileNameText: {
    fontSize: Sizes.Regular,
    color: Colors.Black_000000,
    fontWeight: '600',
    marginLeft: 10,
  },
  profileEmailText: {
    fontSize: Sizes.Medium,
    marginLeft: 16,
    color: Colors.Black_000000,
    marginTop: 0,
    marginBottom: 5,
    left: 0,
  },
  borderLine: {
    marginTop: 10,
    height: 1,
    backgroundColor: Colors.Border,
  },
  rowMainContainerStyle: {
    flexDirection: 'row',
    // // justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    marginTop: 5,
    // borderWidth:1,
    padding: 5,
  },
  rowMainContainerTextStyle: {
    fontSize: Sizes.Regular,
    marginLeft: 10,
    color: Colors.textColor,
  },
  logOutView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 43,
    width: 232,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 10,
    borderColor: Colors.Main,
    flexDirection: 'row',
  },
  logOutText: {
    color: Colors.Main,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.SemiBold,
  },
});
const mapStateToProps = ({userSession}) => ({
  userData: userSession,
});
const mapDispatchToProps = dispatch => ({
  clearUserSession: () => dispatch(userActions.clearUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomSidebarMenu);
