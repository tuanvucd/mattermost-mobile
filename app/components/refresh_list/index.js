

import {connect} from 'react-redux';

import {getConnection} from 'app/selectors/device';

import RefreshList from './refresh_list';

function mapStateToProps(state) {
    const networkOnline = getConnection(state);
    let {refreshing} = state.views.channel;

    if (!networkOnline) {
        refreshing = false;
    }

    return {
        refreshing,
    };
}

export default connect(mapStateToProps)(RefreshList);
