import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: colors.text,
    textAlign: 'center',
    paddingVertical: 20,
    fontFamily: 'Silkscreen-Bold',
  },
  card: {
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },
  inputContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: colors.text,
    paddingVertical: 5,
    fontFamily: 'Silkscreen-Regular',
  },
  input: {
    width: '100%',
    maxWidth: 110,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Silkscreen-Regular',
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  summaryContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
  },
  summaryText:{
    fontFamily: 'Silkscreen-Regular',
    color: colors.text,
  },
});