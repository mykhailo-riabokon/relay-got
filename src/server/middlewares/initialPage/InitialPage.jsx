import React from 'react';
import {__DEVELOPMENT__, port} from '../../../../config';

function InitialPage() {
  let path = '/assets/js/app.js';

  if (__DEVELOPMENT__) {
    path = `http://localhost:${port}${path}`;
  }

  return (
    <html>
      <head></head>
      <body>
        <div id="app"></div>
        <script src={path}></script>
      </body>
    </html>
  );
}

export default InitialPage;
