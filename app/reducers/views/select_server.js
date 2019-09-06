import {combineReducers} from 'redux';

import Config from 'assets/config.json';

import {ViewTypes} from 'app/constants';

function serverUrl(state = Config.DefaultServerUrl, action) {
    switch (action.type) {
    case ViewTypes.SERVER_URL_CHANGED:
        return action.serverUrl;

    default:
        return state;
    }
}

export default combineReducers({
    serverUrl,
});
