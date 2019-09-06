

import {connect} from 'react-redux';

import {getTheme} from 'mattermost-redux/selectors/entities/preferences';

import MarkdownEmoji from './markdown_emoji';

function mapStateToProps(state) {
    return {
        theme: getTheme(state),
    };
}

export default connect(mapStateToProps)(MarkdownEmoji);
