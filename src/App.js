import React from 'react';

import store from './store';

import Login from './login';
import Home from './home';
import Practice from "./practice";
import Apply from "./apply"
import 'antd/dist/antd.css';
import User from "./user";

import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
function App() {
  return (
      <div>
          <Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/user' exact component={User}></Route>
                <Route path='/apply' exact component={Apply}></Route>
                <Route path='/practice' exact component={Practice}></Route>
            </div>
        </BrowserRouter>
          </Provider>

      </div>
  );
}

export default App;
