import React from 'react';

import { shallow } from 'enzyme';

import Main from "./Main.jsx";

describe('Main', ()=>{
  it('should render', ()=>{
    const component = shallow(<Main />);
    expect(component).toMatchSnapshot();
  });

  it('should have an input for an email', () =>{
    const component = shallow(<Main />);
    expect(component.find({name: 'email'}).exists()).toBe(true);
  });

  it('should update state when values are input', ()=> {
    const component = shallow(<Main />);
    let initState = component.state('email');
    component.find({ name: 'email' }).simulate('change', { target: { name: "email", value: "test" } });
    let changedState = component.state('email');
    expect(initState).not.toBe(changedState);

  })


})