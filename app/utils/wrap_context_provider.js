

import React from 'react';
import IntlWrapper from 'app/components/root';

export function wrapWithContextProvider(Comp, excludeEvents = true) {
    return (props) => { //eslint-disable-line react/display-name
        return (
            <IntlWrapper
                excludeEvents={excludeEvents}
            >
                <Comp {...props}/>
            </IntlWrapper>
        );
    };
}
