import React from 'react';
import {shallow} from 'enzyme';

import PostAttachmentImage from './index';

describe('PostAttachmentImage', () => {
    const baseProps = {
        height: 100,
        width: 100,
        onError: jest.fn(),
        onImagePress: jest.fn(),
        uri: 'uri',
    };

    it('should match snapshot', () => {
        const wrapper = shallow(<PostAttachmentImage {...baseProps}/>);

        expect(wrapper.getElement()).toMatchSnapshot();
    });
});
