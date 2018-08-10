import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './Store/CreateStore';

import Layout from './Views/Layout';
import PublicRoutes from './Routes/Public';

const MainApp = () => (
    <Provider store={store}>
        <Layout>
            <PublicRoutes history={history} />
        </Layout>
    </Provider>
);

export default MainApp;