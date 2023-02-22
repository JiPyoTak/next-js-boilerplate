import React from 'react';
import { Global, css } from '@emotion/react';
import { reset } from './reset';
import { ThemeType } from '.';

interface GlobalProps {
  theme: ThemeType;
}

const GlobalStyle = () => (
  <Global
    styles={css`
      ${reset}
    `}
  />
);

export default GlobalStyle;
