import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Booking from './components/views/Booking/Booking';
import Event from './components/views/Event/Event';
import Waiter from './components/views/Waiter/Waiter';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';
import NotFound from './components/views/NotFound/NotFound';
function App() {
  return (
    <BrowserRouter basename={''}>
      <MainLayout>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Dashboard}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/login'}
            component={Login}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables'}
            component={Tables}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/booking/new'}
            component={Booking}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/booking/:id'}
            component={Booking}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/events/new'}
            component={Event}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/tables/events/:id'}
            component={Event}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/waiter'}
            component={Waiter}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/waiter/order/new'}
            component={Order}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/waiter/order/:id'}
            component={Order}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/kitchen'}
            component={Kitchen}
          />
          <Route 
            path={process.env.PUBLIC_URL + '/*'} 
            component={NotFound} 
          />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
