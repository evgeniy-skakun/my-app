import { StyleSheet } from 'react-native';

import Colors from '@constants/Colors';
import Layout from '@constants/Layout';

import Theme from './Theme';

export const MAX_WIDTH = Layout.window.width - Theme.SIZES.BASE * 2.4;

export const baseStyles = StyleSheet.create({
  shadowBorder: {
    borderBottomWidth: 2,
    borderStartWidth: 1,
    borderEndWidth: 1,
    borderTopWidth: 0,
    borderColor: Theme.COLORS.LIGHT_SHADE,
    elevation: 0,
  },
  pageContainer: {
    backgroundColor: 'transparent',
    width: Layout.window.width,
    paddingBottom: 100,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Theme.COLORS.MUTED,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    marginHorizontal: 16,
  },
  paginationContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignContent: 'center',
  },
  paginationDots: {
    backgroundColor: 'transparent',
    height: 16,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDotStyle: {
    backgroundColor: Theme.COLORS.WHITE,
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
  filterButton: {
    borderRadius: 100,
    paddingVertical: Theme.SIZES.BASE / 3,
    paddingHorizontal: Theme.SIZES.BASE / 1.5,
    marginTop: 0,
    marginHorizontal: Theme.SIZES.BASE / 3,
    height: 'auto',
    width: 'auto',
  },
  mapNavBarButtons: {
    backgroundColor: Colors['light'].background,
    padding: Theme.SIZES.BASE / 3,
    borderRadius: Theme.SIZES.INPUT_BORDER_RADIUS / 2,
  },
  floatingNavBarButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Theme.SIZES.BASE * 2.75,
    width: Theme.SIZES.BASE * 2.75,
    borderRadius: Theme.SIZES.BASE,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingVertical: Theme.SIZES.BASE,
    paddingHorizontal: Theme.SIZES.BASE,
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  thinTitle: {
    fontSize: Theme.SIZES.BASE * 1.25,
    fontWeight: '300',
  },
  thinTitleS: {
    fontSize: Theme.SIZES.BASE * 0.95,
    fontWeight: '300',
  },
  thinTitleL: {
    fontSize: Theme.SIZES.BASE * 1.5,
    fontWeight: '300',
  },
  thinTitleXL: {
    fontSize: Theme.SIZES.BASE * 1.75,
    fontWeight: '300',
  },
  textArea: {
    height: 'auto',
    maxHeight: 200,
    paddingTop: Theme.SIZES.BASE / 2,
    paddingBottom: Theme.SIZES.BASE / 1.25,
  },
  inputLabel: {
    color: Theme.COLORS.MUTED,
    fontWeight: 'bold',
    fontSize: Theme.SIZES.BASE * 0.95,
  },
  avatarS: {
    height: Theme.SIZES.BASE * 2.125,
    width: Theme.SIZES.BASE * 2.125,
    borderColor: 'transparent',
    borderRadius: Theme.SIZES.BASE * 0.9,
    backgroundColor: Theme.COLORS.LIGHT_GREY,
  },
  avatarL: {
    borderColor: 'transparent',
    borderRadius: Theme.SIZES.BASE * 3.125,
    height: Theme.SIZES.BASE * 7,
    width: Theme.SIZES.BASE * 7,
    backgroundColor: Theme.COLORS.LIGHT_GREY,
  },
  avatar: {
    height: Theme.SIZES.BASE * 4,
    width: Theme.SIZES.BASE * 4,
    borderColor: 'transparent',
    borderRadius: Theme.SIZES.BASE * 1.25,
    backgroundColor: Theme.COLORS.LIGHT_GREY,
  },
  all: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Theme.COLORS.INPUT,
  },
  link: {
    alignItems: 'center',
    padding: Theme.SIZES.BASE,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Theme.COLORS.MUTED,
    borderRadius: Theme.SIZES.BASE,
  },
  navBarTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Theme.SIZES.BASE * 2.75,
    width: Theme.SIZES.BASE * 2.75,
    borderRadius: Theme.SIZES.BASE,
    backgroundColor: Theme.COLORS.WHITE,
  },
  optionBubble: {
    height: 'auto',
    width: MAX_WIDTH,
    borderWidth: 3,
    borderRadius: Theme.SIZES.BASE,
  },
  invertedButton: {
    backgroundColor: Theme.COLORS.WHITE,
    borderWidth: 1,
    borderColor: Theme.COLORS.QUATERNARY,
  },
  rounded: {
    borderRadius: Theme.SIZES.BASE,
    overflow: 'hidden',
  },
  backdrop: {
    position: 'absolute',
    backgroundColor: Theme.COLORS.BLACK,
    opacity: 0.3,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputStyles: {
    backgroundColor: Theme.COLORS.WHITE,
    borderWidth: Theme.SIZES.INPUT_BORDER_WIDTH,
    borderRadius: Theme.SIZES.INPUT_BORDER_RADIUS,
    justifyContent: 'center',
    borderColor: Theme.COLORS.INPUT,
    height: Theme.SIZES.BASE * 2.75,
    paddingHorizontal: Theme.SIZES.BASE,
    marginVertical: Theme.SIZES.BASE / 2,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
    borderWidth: 0,
  },
  gradient: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    position: 'absolute',
    overflow: 'hidden',
    borderBottomRightRadius: Theme.SIZES.BASE,
    borderBottomLeftRadius: Theme.SIZES.BASE,
  },
  map: {
    flex: 1,
  },
  borderBottomLine: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.COLORS.MUTED,
    width: MAX_WIDTH,
  },
  skeletonLocationCard: {
    height: 350,
    width: MAX_WIDTH,
    borderRadius: Theme.SIZES.BASE,
    marginBottom: Theme.SIZES.BASE,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Theme.COLORS.PLACEHOLDER,
    overflow: 'hidden',
  },
  locationCard: {
    height: 'auto',
    width: MAX_WIDTH,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: Theme.SIZES.BASE,
    marginBottom: Theme.SIZES.BASE,
    overflow: 'hidden',
  },
  listCardContainer: {
    paddingVertical: Theme.SIZES.BASE,
    paddingHorizontal: 0,
    marginHorizontal: Theme.SIZES.BASE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Theme.COLORS.MUTED,
  },
  clearInput: {
    position: 'absolute',
    top: Theme.SIZES.BASE * 1.115,
    right: Theme.SIZES.BASE / 2,
  },
  miniCard: {
    height: 200,
    width: Layout.window.width / 2 - Theme.SIZES.BASE * 1.7,
    margin: Theme.SIZES.BASE / 3,
    borderRadius: Theme.SIZES.BASE,
    overflow: 'hidden',
  },
  alignedContainer: {
    paddingTop: Theme.SIZES.BASE,
    width: MAX_WIDTH,
    alignItems: 'center',
    alignSelf: 'center',
  },
  groupTitleContainer: {
    paddingTop: Theme.SIZES.BASE * 2,
    paddingBottom: Theme.SIZES.BASE / 2,
  },
});

export function createStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(styles: T | StyleSheet.NamedStyles<T>): T {
  return StyleSheet.create(styles);
}
