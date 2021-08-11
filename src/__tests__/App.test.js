import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';
import { Spacer, Divider } from '@chakra-ui/react';



describe('<App />', () => {
    it('renders a single App component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<div class="App"></div>))
    }
    );
    it('renders a spacer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Spacer />));
    });
    it('renders a divider for the menu bar', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Divider />));
    })
})