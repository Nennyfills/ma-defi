import React from 'react';
import jest from 'jest';
import { config } from 'dotenv';

import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

config();

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.jest = jest;

configure({ adapter: new Adapter() });
