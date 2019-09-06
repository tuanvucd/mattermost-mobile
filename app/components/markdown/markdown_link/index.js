

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getConfig, getCurrentUrl} from 'mattermost-redux/selectors/entities/general';
import {handleSelectChannelByName} from 'app/actions/views/channel';

import MarkdownLink from './markdown_link';

function mapStateToProps(state) {
    return {
        serverURL: getCurrentUrl(state),
        siteURL: getConfig(state).SiteURL,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleSelectChannelByName,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownLink);
