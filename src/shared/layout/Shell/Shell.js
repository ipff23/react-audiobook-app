import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import {
    Wrapper,
    Page,
} from './Shell.styled'

const Shell = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Page>
                {children}
            </Page>
        </Wrapper>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;