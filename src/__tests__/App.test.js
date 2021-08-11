import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';


describe('<App />', function() {
    it('renders a single App component', () => {
        const wrapper = shallow(<App />);
        console.log(wrapper.debug())
        expect(wrapper.contains(<div class="App"></div>))
    }
    );
})