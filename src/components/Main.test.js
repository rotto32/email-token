import React from 'react';

import { shallow } from 'enzyme';

import Main from "./Main.jsx";

describe('Main', ()=>{
  it('should render', ()=>{
    const component = shallow( <Main /> );
    expect(component).toMatchSnapshot();
  });

})