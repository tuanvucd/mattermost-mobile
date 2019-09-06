import React, {PureComponent} from 'react';
import {RefreshControl} from 'react-native';

export default class RefreshList extends PureComponent {
    static propTypes = {
        ...RefreshControl.propTypes,
    };

    render() {
        return (
            <RefreshControl
                {...this.props}
            />
        );
    }
}
