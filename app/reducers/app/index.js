import {combineReducers} from 'redux';

import build from './build';
import version from './version';

export default combineReducers({
    build,
    version,
});
