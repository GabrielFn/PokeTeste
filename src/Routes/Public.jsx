import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import CatalogoView from '../Views/Catalogo/CatalogoView';
import BuscaPokemonView from '../Views/BuscaPokemon/BuscaPokemonView';

const PublicRoutes = ({ history }) => (
    <ConnectedRouter history={ history }>
        <div style={{ height: '100%' }}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={CatalogoView}
                />
                <Route
                    exact
                    path="/busca"
                    component={BuscaPokemonView}
                />
            </Switch>
        </div>
    </ConnectedRouter>
);

export default PublicRoutes;
