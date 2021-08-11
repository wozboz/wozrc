import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Postoverview } from '../features/postoverview/Postoverview';
import { Card } from '../features/card/Card';

describe('The <Postoverview /> component', () => {
    it('contains at least 1 Card Component', () => {
        const wrapper = shallow(<Postoverview />);
        //console.log(wrapper.debug())
        expect(wrapper.contains(<Card />))
    }
    );
})