/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import Store from './redux/store';
import FetchList from './screens/fetchList';

const App = () => {
  return (
    <Provider store={Store}>
      <FetchList />
    </Provider>
  );
};

export default App;
