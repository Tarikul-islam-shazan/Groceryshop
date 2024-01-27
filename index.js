import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Navigator from './src/navigator';
import { store } from './src/store';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      secondary: 'yellow',
    },
  };

export default function Main() {
    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <Navigator/>
            </PaperProvider>
        </StoreProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
