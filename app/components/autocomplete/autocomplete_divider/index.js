

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import AutocompleteDivider from './autocomplete_divider';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(AutocompleteDivider);
