

import keyMirror from 'mattermost-redux/utils/key_mirror';

const NavigationTypes = keyMirror({
    NAVIGATION_RESET: null,
    NAVIGATION_CLOSE_MODAL: null,
    NAVIGATION_NO_TEAMS: null,
    RESTART_APP: null,
    NAVIGATION_ERROR_TEAMS: null,
    NAVIGATION_SHOW_OVERLAY: null,
});

export default NavigationTypes;
