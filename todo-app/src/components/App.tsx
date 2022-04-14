import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TodoContainer from './Todo/containers/TodoContainer';
import {createStore} from 'redux'
import rootReducer from '@store/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools())

const App = () => {
  return <Provider store={store}>
    <BrowserRouter>
  <Routes>
    <Route path='*' element={<TodoContainer />} />
  </Routes>
    </BrowserRouter>
  </Provider>
}

export default App