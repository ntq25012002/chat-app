
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate   } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {publicRoutes, privateRoutes} from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

import NotFound from '~/pages/NotFound';

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 
  console.log(isLoggedIn);
  // const navigate = useNavigate();
  // navigate('/login');

  // const PrivateRoute = ({ element: Element, ...rest }) => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //     return null;
  //   }
  //   return <Route {...rest} element={<Element />} />;
  // };

  return (
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
                  path='*'
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
