import React from 'react';
import GraphViewContainer from './GraphViewContainer';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders correctly', () => {
    const tree = toJson(shallow(<GraphViewContainer></GraphViewContainer>));
    expect(tree).toMatchSnapshot();
});

