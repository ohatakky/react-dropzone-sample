import React from 'react';
import ReactDOM from 'react-dom';
import UsingDefault from './UsingDefault';
import * as serviceWorker from './serviceWorker';

import WrapHooks from './WrapHooks';

ReactDOM.render(
  <React.Fragment>
    <UsingDefault />
    <WrapHooks />
  </React.Fragment>
, document.getElementById('root'));

serviceWorker.unregister();
