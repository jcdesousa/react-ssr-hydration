/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import Checkbox from '@atlaskit/checkbox';

import Counter from './Counter';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
  flex-direction: column;
`;

const App = () => (
  <AppContainer>
    <img alt="React logo" src="./react.png" style={{ maxWidth: '300px' }} />
    <Counter count={1} />
    <Button appearance="primary">
      Primary
    </Button>
    <Checkbox
      initiallyChecked
      label="Checked by default"
      value="Checked by default"
      name="checkbox-checked"
    />
  </AppContainer>);

export default App;
