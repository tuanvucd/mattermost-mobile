

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {showModalOverCurrentContext} from 'app/actions/navigation';

import AttachmentImage from './attachment_image';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            showModalOverCurrentContext,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(AttachmentImage);
