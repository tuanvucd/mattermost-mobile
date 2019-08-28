// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import {intlShape} from 'react-intl';

export default class InteractiveDialogController extends PureComponent {
    static propTypes = {
        actions: PropTypes.shape({
            showModal: PropTypes.func.isRequired,
            submitInteractiveDialog: PropTypes.func.isRequired,
        }).isRequired,
        triggerId: PropTypes.string,
        dialogData: PropTypes.object,
        theme: PropTypes.object,
    };

    constructor(props) {
        super(props);

        MaterialIcon.getImageSource('close', 20, props.theme.sidebarHeaderTextColor).then((source) => {
            this.closeButton = source;
        });
    }

    static contextTypes = {
        intl: intlShape,
    };

    componentDidUpdate(prevProps) {
        const {triggerId} = this.props;
        if (!triggerId) {
            return;
        }

        const dialogData = this.props.dialogData || {};
        const prevDialogData = prevProps.dialogData || {};
        if (prevProps.triggerId === triggerId && dialogData.trigger_id === prevDialogData.trigger_id) {
            return;
        }

        if (dialogData.trigger_id !== triggerId) {
            return;
        }

        if (!dialogData.trigger_id || !dialogData.dialog) {
            return;
        }

        if (dialogData.dialog.elements && dialogData.dialog.elements.length > 0) {
            this.showInteractiveDialogScreen(dialogData.dialog);
        } else {
            this.showAlertDialog(dialogData.dialog, dialogData.url);
        }
    }

    showAlertDialog(dialog, url) {
        const {formatMessage} = this.context.intl;

        Alert.alert(
            dialog.title,
            '',
            [{
                text: formatMessage({id: 'mobile.alert_dialog.alertCancel', defaultMessage: 'Cancel'}),
                onPress: () => this.handleCancel(dialog, url),
            }, {
                text: dialog.submit_label,
                onPress: () => this.props.actions.submitInteractiveDialog({...dialog, url}),
            }],
        );
    }

    showInteractiveDialogScreen = (dialog) => {
        const options = {
            topBar: {
                leftButtons: [{
                    id: 'close-dialog',
                    icon: this.closeButton,
                }],
                rightButtons: [{
                    id: 'submit-dialog',
                    showAsAction: 'always',
                    text: dialog.submit_label,
                }],
            },
        };

        this.props.actions.showModal('InteractiveDialog', dialog.title, null, options);
    }

    handleCancel = (dialog, url) => {
        if (dialog.notify_on_cancel) {
            this.props.actions.submitInteractiveDialog({...dialog, url, cancelled: true});
        }
    }

    render() {
        return null;
    }
}
