import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {dismissModal} from 'app/actions/navigation';

import {getDimensions, isLandscape} from 'app/selectors/device';

import OptionsModal from './options_modal';

function mapStateToProps(state) {
    return {
        ...getDimensions(state),
        isLandscape: isLandscape(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            dismissModal,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsModal);
