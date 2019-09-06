

import {ViewTypes} from 'app/constants';

export function handleSearchDraftChanged(text) {
    return async (dispatch, getState) => {
        dispatch({
            type: ViewTypes.SEARCH_DRAFT_CHANGED,
            text,
        }, getState);
    };
}
