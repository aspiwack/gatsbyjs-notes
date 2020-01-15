import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Grid, Turn } from '../Grid/Grid';
import CaitProvider, { Cait } from './Cait';
import Gamepad from '../Gamepad';
import '../../styles/reset.css';
import '../../styles/layout.scss';

const shortCodes = { Cait, Grid, Turn };

export default (props) => (
  <MDXProvider components={shortCodes}>
    <div id="main">
      <Gamepad/>
      <CaitProvider>
        {props.children}
      </CaitProvider>
    </div>
  </MDXProvider>
);
