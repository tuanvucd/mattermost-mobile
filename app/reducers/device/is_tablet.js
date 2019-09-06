import {DeviceTypes} from 'app/constants';

export default function isTablet(state = false, action) {
    switch (action.type) {
    case DeviceTypes.DEVICE_TYPE_CHANGED:
        return action.data;
    }

    return state;
}

