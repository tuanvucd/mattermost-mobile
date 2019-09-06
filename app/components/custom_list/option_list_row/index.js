

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import OptionListRow from './option_list_row';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(OptionListRow);
