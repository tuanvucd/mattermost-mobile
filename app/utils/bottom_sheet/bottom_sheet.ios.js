

import {ActionSheetIOS} from 'react-native';

export default {
    showBottomSheetWithOptions: (options, callback) => {
        return ActionSheetIOS.showActionSheetWithOptions(options, callback);
    },
};
