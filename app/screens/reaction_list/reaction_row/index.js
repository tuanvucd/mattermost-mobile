

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {goToScreen} from 'app/actions/navigation';
import {isLandscape} from 'app/selectors/device';
import ReactionRow from './reaction_row';

function mapStateToProps(state) {
    return {
        isLandscape: isLandscape(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            goToScreen,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactionRow);
