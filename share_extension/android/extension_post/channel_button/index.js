

import {connect} from 'react-redux';

import {getChannel} from 'mattermost-redux/selectors/entities/channels';

import ChannelButton from './channel_button';

function mapStateToProps(state, ownProps) {
    return {
        channel: getChannel(state, ownProps.channelId),
    };
}

export default connect(mapStateToProps)(ChannelButton);
