/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from '@/App';

// ts-ignore - Doesn't need its types as it fixes crypto.getRandomValeus
import 'react-native-get-random-values';

AppRegistry.registerComponent(appName, () => App);
