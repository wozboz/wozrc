import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Navbar } from '../features/navbar/Navbar';
import { Flex} from '@chakra-ui/react';

describe('The <Postoverview /> component', () => {
    it('contains at least 1 Card Component', () => {
        const wrapper = shallow(<Navbar />);
        //console.log(wrapper.debug())
        expect(wrapper.contains(<Flex />))
    }
    );
})