// import logo from './logo.svg';
// import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import {publicRoutes, privateRoutes} from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
function App() {
  return (
      <Router>
        <Provider store={store}>

        <div className="App">
            <Routes>
              {
                publicRoutes.map((route, index) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;
                  if(route.layout) {
                    Layout = route.layout;
                  }else if(route.layout === null) {
                    Layout = Fragment;
                  }

                  return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={ 
                          <Layout>
                            <Page />
                          </Layout>
                        }
                      />
                  )
                })
              }

            </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
