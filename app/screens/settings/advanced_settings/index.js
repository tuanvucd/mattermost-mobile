

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {dismissAllModals} from 'app/actions/navigation';
import {purgeOfflineStore} from 'app/actions/views/root';
import {getTheme} from 'mattermost-redux/selectors/entities/preferences';
import {isLandscape} from 'app/selectors/device';
import AdvancedSettings from './advanced_settings';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
        isLandscape: isLandscape(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            dismissAllModals,
            purgeOfflineStore,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSettings);
