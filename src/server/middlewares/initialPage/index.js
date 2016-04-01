import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import InitialPage from './InitialPage';

export default () => (req, res) => res.send(renderToStaticMarkup(<InitialPage />));
