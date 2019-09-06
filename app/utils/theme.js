import {StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

import tinyColor from 'tinycolor2';

import * as ThemeUtils from 'mattermost-redux/utils/theme_utils';

export function makeStyleSheetFromTheme(getStyleFromTheme) {
    return ThemeUtils.makeStyleFromTheme((theme) => {
        return StyleSheet.create(getStyleFromTheme(theme));
    });
}

export const changeOpacity = ThemeUtils.changeOpacity;

export const blendColors = ThemeUtils.blendColors;

export function concatStyles(...styles) {
    return [].concat(styles);
}

export function setNavigatorStyles(componentId, theme) {
    Navigation.mergeOptions(componentId, {
        topBar: {
            title: {
                color: theme.sidebarHeaderTextColor,
            },
            background: {
                color: theme.sidebarHeaderBg,
            },
            leftButtonColor: theme.sidebarHeaderTextColor,
            rightButtonColor: theme.sidebarHeaderTextColor,
            backButton: {
                color: theme.sidebarHeaderTextColor,
            },
        },
        layout: {
            backgroundColor: theme.centerChannelBg,
        },
    });
}

export function isThemeSwitchingEnabled(state) {
    const {config} = state.entities.general;
    return config.EnableThemeSelection === 'true';
}

export function getKeyboardAppearanceFromTheme(theme) {
    return tinyColor(theme.centerChannelBg).isLight() ? 'light' : 'dark';
}
