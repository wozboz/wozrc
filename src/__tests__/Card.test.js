import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Card } from '../features/card/Card';
import { Flex } from '@chakra-ui/react';

describe('The <Card /> component', () => {
    it('renders a single Flex component', () => {
        const wrapper = shallow(<Card />);
        //console.log(wrapper.debug())
        expect(wrapper.contains(<Flex></Flex>))
    }
    );
})