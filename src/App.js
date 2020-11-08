import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './styles/bootstrap.scss';
import './styles/global.scss';

import { store } from './redux/store.js';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { NotFound } from './components/views/NotFound/NotFound';
import { ModelView } from './components/views/ModelView/ModelView';
import {ShoppingCart} from './components/views/ShoppingCart/ShoppingCart';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path='/' component={ Homepage } />
              <Route exact path='/models/:id' component={ ModelView } />
              <Route exact path='/cart' component={ ShoppingCart } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
