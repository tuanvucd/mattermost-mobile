import {ViewTypes} from 'app/constants';

export function dismissBanner(text) {
    return {
        type: ViewTypes.ANNOUNCEMENT_BANNER,
        data: text,
    };
}
