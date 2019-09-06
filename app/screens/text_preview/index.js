

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import TextPreview from './text_preview';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(TextPreview);
