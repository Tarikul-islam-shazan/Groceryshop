import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Navigator from './src/navigator';
import { store } from './src/store';

export default function Main() {
    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <Navigator/>
            </PaperProvider>
        </StoreProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
