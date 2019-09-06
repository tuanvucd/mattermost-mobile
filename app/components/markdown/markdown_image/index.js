

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getCurrentUrl} from 'mattermost-redux/selectors/entities/general';

import {showModalOverCurrentContext} from 'app/actions/navigation';

import {getDimensions} from 'app/selectors/device';

import MarkdownImage from './markdown_image';

function mapStateToProps(state) {
    return {
        ...getDimensions(state),
        serverURL: getCurrentUrl(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            showModalOverCurrentContext,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkdownImage);
