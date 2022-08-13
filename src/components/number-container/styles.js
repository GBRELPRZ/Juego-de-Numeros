import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';
export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.text,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: colors.text,
    fontSize: 13,
    fontFamily: 'Silkscreen-Bold',
  },
});