
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {publicRoutes, privateRoutes} from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import Login from '~/pages/Login';

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 
  console.log(isLoggedIn);

  const PrivateRoute = ({ element: Element, ...rest }) => {
    return isLoggedIn ? (
      <Route {...rest} element={<Element />} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  return (
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
              }

              {
              // private routes
                isLoggedIn &&  privateRoutes.map((route, index) => {
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
      </Router>
  );
}

export default App;