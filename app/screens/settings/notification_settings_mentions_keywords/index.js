import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';
import {isLandscape} from 'app/selectors/device';
import {popTopScreen} from 'app/actions/navigation';

import NotificationSettingsMentionsKeywords from './notification_settings_mentions_keywords';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
        isLandscape: isLandscape(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            popTopScreen,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationSettingsMentionsKeywords);
