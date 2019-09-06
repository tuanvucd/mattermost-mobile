

import {ViewTypes} from 'app/constants';
import {UserTypes} from 'mattermost-redux/action_types';

export default function search(state = '', action) {
    switch (action.type) {
    case ViewTypes.SEARCH_DRAFT_CHANGED: {
        return action.text;
    }
    case UserTypes.LOGOUT_SUCCESS:
        return '';

    default:
        return state;
    }
}
