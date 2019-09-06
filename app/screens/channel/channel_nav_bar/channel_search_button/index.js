

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {clearSearch} from 'mattermost-redux/actions/search';

import {showSearchModal} from 'app/actions/navigation';

import ChannelSearchButton from './channel_search_button';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            clearSearch,
            showSearchModal,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(ChannelSearchButton);
