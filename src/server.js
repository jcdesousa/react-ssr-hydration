/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './client/App';
import Layout from './client/Layout';

const port = 3000;
const server = express();
server.use(express.static('dist'));
server.use(express.static('images'));

function renderComponent(component) {
  const sheet = new ServerStyleSheet();

  const body = renderToString(sheet.collectStyles(component)); // get styles
  const styles = sheet.getStyleTags(); // getting all the tags from the sheet

  return {
    body,
    styles, // passing the styles to our Layout template
  };
}

// Creating a single index route to server our React application from.
server.get('/', (req, res) => {
  const title = 'React Server Side Rendering with Styled Components';
  const renderedComponent = renderComponent(<App />);

  res.send(Layout({ title, ...renderedComponent }));
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
