

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    popToRoot,
    showSearchModal,
    dismissAllModals,
} from 'app/actions/navigation';

import Hashtag from './hashtag';

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            popToRoot,
            showSearchModal,
            dismissAllModals,
        }, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(Hashtag);
