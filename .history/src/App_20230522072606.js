// import logo from './logo.svg';
// import './App.css';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
// import store from '~/store';
import {publicRoutes, privateRoutes} from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import Login from '~/pages/Login';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    // <Provider store={store}>
      <Router>
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

                // private routes
                // (isLoggedIn &&  privateRoutes.map((route, index) => {
                //   const Page = route.component;
                //   let Layout = DefaultLayout;
                //   if(route.layout) {
                //     Layout = route.layout;
                //   }else if(route.layout === null) {
                //     Layout = Fragment;
                //   }

                //   return (
                //     <Route 
                //         key={index} 
                //         path={route.path} 
                //         element={ 
                //           <Layout>
                //             <Page />
                //           </Layout>
                //         }
                //       />
                //   )
                // }))
              }

              {/* <Route path="/login" element={ <Login /> } /> */}

            </Routes>
        </div>
      </Router>
    // </Provider>
  );
}

export default App;
