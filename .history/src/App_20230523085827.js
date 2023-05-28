
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate   } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {publicRoutes, privateRoutes} from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import NotFound from '~/pages/NotFound';

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 

  return (
    <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {

              if(isLoggedIn && route.path === '/login') {
                return <Route 
                  key={index}
                  path={route.path}
                  element={ 
                    <Navigate to='/' />
                  }
                />
              }

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
          
          
          { // Check isLoginRequired
            isLoggedIn ? privateRoutes.map((route, index) => {
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
            }) : (
              privateRoutes.map((route, index) => {
                return <Route 
                  key={index}
                  path={route.path}
                  element={ 
                    <Navigate to='/login' />
                  }
                />
              })
              
              
            )
          }
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
