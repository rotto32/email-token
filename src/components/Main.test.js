import React from 'react';

import { shallow } from 'enzyme';

import Main from "./Main.jsx";

describe('Main', ()=>{
  it('should render', ()=>{
    const component = shallow( <Main /> );
    expect(component).toMatchSnapshot();
  });

  it('should have an input for an email', () =>{
    const component = shallow(<Main />);
    expect(component.find('input type="email"').exists()).toBe(true);
  });


})