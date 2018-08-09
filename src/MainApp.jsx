import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/CreateStore';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from './Views/Layout';
import CatalogoView from './Views/Catalogo/CatalogoView';

const MainApp = () => (
    <Provider store={store}>
        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={CatalogoView} />
                </Switch>
            </BrowserRouter>
        </Layout>
    </Provider>
);

export default MainApp;