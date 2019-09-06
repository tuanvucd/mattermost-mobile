

import {connect} from 'react-redux';

import {getDimensions} from 'app/selectors/device';

import SlideUpPanel from './slide_up_panel';

function mapStateToProps(state, ownProps) {
    const dimensions = getDimensions(state);
    return {
        containerHeight: ownProps.containerHeight || dimensions.deviceHeight,
    };
}

export default connect(mapStateToProps, null, null, {forwardRef: true})(SlideUpPanel);
