

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getOpenGraphMetadata} from 'mattermost-redux/actions/posts';

import {showModalOverCurrentContext} from 'app/actions/navigation';

import {getDimensions} from 'app/selectors/device';

import PostAttachmentOpenGraph from './post_attachment_opengraph';

function mapStateToProps(state) {
    return {
        ...getDimensions(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getOpenGraphMetadata,
            showModalOverCurrentContext,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostAttachmentOpenGraph);
