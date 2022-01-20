import {AppRegistry} from 'react-native';
import Routes from './src/routes/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
