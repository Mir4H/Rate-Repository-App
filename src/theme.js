import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      bar: '#24292e',
      offWhite: '#f2f4f5',
      lightGrey: '#e1e4e8',
      darkGrey: '#a0a1a3',
      attention: '#de0d0d'
    },
    fontSizes: {
      body: 14,
      smallheading: 16,
      subheading: 18,
    },
   fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;