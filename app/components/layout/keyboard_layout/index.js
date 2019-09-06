

import {connect} from 'react-redux';

import {isLandscape} from 'app/selectors/device';

import KeyboardLayout from './keyboard_layout';

function mapStateToProps(state) {
    return {
        isLandscape: isLandscape(state),
    };
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(KeyboardLayout);
