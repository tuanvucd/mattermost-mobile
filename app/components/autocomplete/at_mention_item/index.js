

import {connect} from 'react-redux';

import {getUser} from 'mattermost-redux/selectors/entities/users';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import AtMentionItem from './at_mention_item';

import {isLandscape} from 'app/selectors/device';
import {isGuest} from 'app/utils/users';

function mapStateToProps(state, ownProps) {
    const user = getUser(state, ownProps.userId);

    return {
        firstName: user.first_name,
        lastName: user.last_name,
        username: user.username,
        isBot: Boolean(user.is_bot),
        isGuest: isGuest(user),
        theme: getTheme(state),
        isLandscape: isLandscape(state),
    };
}

export default connect(mapStateToProps)(AtMentionItem);
