import React from 'react';
import PropTypes from 'prop-types';

import RouterHandler from './state/router/RouterHandler';
import FavoritesProvider from './state/providers/FavoritesProvider';
import GlobalStyle from './shared/ui/GlobalStyle';




const Providers = ({ children }) => (
    <FavoritesProvider>
        <GlobalStyle />
        {children}
    </FavoritesProvider>
);
Providers.propTypes = {
    children: PropTypes.node.isRequired,
};

const App = () => {
    return (
        <Providers>
            <RouterHandler />
        </Providers>
    );
};
export default App;
