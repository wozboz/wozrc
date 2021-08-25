import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { PostModal } from '../features/modal/Modal';
import { Flex } from '@chakra-ui/react';

describe('The <Card /> component', () => {
    it('renders a single Flex component', () => {
        const wrapper = shallow(<PostModal />);
        //console.log(wrapper.debug())
        expect(wrapper.contains(<Flex></Flex>))
    }
    );
})