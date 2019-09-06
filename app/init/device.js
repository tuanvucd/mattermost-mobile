import AsyncStorage from '@react-native-community/async-storage';
import {DeviceTypes} from 'app/constants';

if (DeviceTypes.IS_TABLET) {
    AsyncStorage.getItem(DeviceTypes.PERMANENT_SIDEBAR_SETTINGS).then((value) => {
        if (!value) {
            AsyncStorage.setItem(DeviceTypes.PERMANENT_SIDEBAR_SETTINGS, 'true');
        }
    });
}
