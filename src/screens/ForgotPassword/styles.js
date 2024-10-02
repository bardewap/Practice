import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Constants, Fonts, Sizes} from '../../utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White_FFFFFF,
  },
  centerView: {
    marginLeft: 16,
    marginRight: 16,
    flex: 1,
  },
  loginView: {
    flex: 1,
    backgroundColor: Colors.White_FFFFFF,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 70,
  },
  signInCustomerView: {
    marginBottom: 20,
    // alignSelf:'flex-end',
    // flexDirection: 'column',
    alignItems: 'center',
  },
  signInCustomerText: {
    fontSize: Sizes.Medium,
    fontFamily: Fonts.SemiBold,
    color: Colors.mainColor,
  },
  byResgisteringText: {
    fontSize: Sizes.Small,
    fontFamily: Fonts.Regular,
    color: Colors.White_FFFFFF,
  },
  mobileTextStyle: {
    marginTop: 30,
    // marginBottom: 20,
    fontFamily: Fonts.Bold,
    fontSize: Sizes.ExtarLarge,
    color: Colors.textColor,
  },
  textBoldStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 0,
    fontFamily: Fonts.Bold,
    fontSize: 26,
    color: Colors.Black_000000,
    // marginTop: 20,
  },
  buttonAndTextInputBackStyle: {
    justifyContent: 'center',
    // marginTop: 20,
  },
  textInputViewStyle: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.TextInpueBackColor_F5F6FB,
    marginRight: 20,
    marginLeft: 20,
  },
  flagAndCodeBackStyle: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.White_FFFFFF,
    marginLeft: -10,
  },
  countryCodeTextStyle: {
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Regular,
    marginLeft: 3,
    marginRight: 3,
    color: Colors.Black_000000,
    fontWeight: '700',
  },
  textInputView: {
    height: 60,
    width: '100%',
    paddingLeft: 7,
    color: Colors.Black_000000,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Regular,
    fontWeight: '700',
    paddingTop: Constants.isIos ? 0 : 15,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    borderColor: Colors.borderTextColor,
    marginTop: 20,
    // marginBottom: 20,
  },
  textInputStyle: {
    color: Colors.textColor,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Medium,
    marginLeft: 5,
    // bottom: 5
  },
  mobileNumberText: {
    color: Colors.gray,
    fontSize: Sizes.Small,
    fontFamily: Fonts.Regular,
    marginLeft: 5,
  },
  submitButtonPressStyle: {
    marginTop: 30,
  },
  legalPrivacyViewStyle: {
    flexDirection: 'row',
  },
  validationViewStyle: {
    marginLeft: 5,
    marginTop: 5,
  },
  privacyButtonPress: {
    marginLeft: 5,
  },
  buttonBackStyle1: {
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 30,
    height: 50,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: Colors.buttonColor,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Medium,
    marginBottom: 30,
  },

  cancelBackStyle1: {
    marginTop: 10,
    justifyContent: 'center',
    borderRadius: 30,
    height: 59,
    margin: 5,
    backgroundColor: Colors.white,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Medium,
    marginBottom: 30,
    width: 140,
    borderWidth: 1,
    borderColor: '#A5A5A5',
  },
  buttonTextStyle1: {
    color: Colors.White_FFFFFF,
    fontSize: Sizes.Small,
    fontFamily: Fonts.Medium,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
  buttonTextStyle2: {
    color: Colors.Black_000000,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Medium,
    marginRight: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 140,
    width: 120,
    resizeMode: 'contain',
    // marginTop: 50,
  },
  text_regular_141: {
    color: Colors.White_FFFFFF,
    fontSize: Sizes.small,
    fontFamily: Fonts.Regular,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    // marginTop:20,
  },
  mainScreen: {
    width: '100%',
    height: Sizes.ScreenHeight,
    flex: 0.6,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  divider: {
    backgroundColor: Colors.buttonColor,
    height: 1.5,
  },
  divider: {
    backgroundColor: Colors.buttonColor,
    height: 1.5,
  },
  keyBordContainer: {
    flex: 1,
  },
  forgotText: {
    color: Colors.buttonColor,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.SemiBold,
  },
  headerTwoText: {
    color: Colors.textColorTwo,
    fontSize: Sizes.Regular,
    fontFamily: Fonts.Regular,
    marginTop: 20,
    // marginRight: 20,
  },
  backBlueLogoStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  backButtonView: {
    marginTop: '10%',
    marginLeft: 16,
    padding: 5,
    width: 40,
    borderRadius: 20
  },
});
