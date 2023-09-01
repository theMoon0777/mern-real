import { createRoot } from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF1cWGhAYVVpR2NbfE55fldAal1XVAciSV9jS31TfkZjWXZcdnVTRWhfVQ==');

// style + assets
import 'assets/scss/style.scss';
import config from './config';
import React from 'react';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
