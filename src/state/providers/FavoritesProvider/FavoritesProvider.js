import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const FavoriteContext = createContext(null);

const useFavorites = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error(`Can't use "useAuth" without an AuthProvider!`);
    }
    return context;
};

const initialState = {
    list: [],
};

const actionTypes = {
    SAVE: 'SAVE',
    DELETE: 'DELETE',
};

const favoritesReducer = (state, action) => {
    let copyList;

    switch (action.type) {
        case actionTypes.SAVE:
            copyList = [...state.list];
            copyList.push(action.payload);

            return {
                ...state,
                list: copyList,
            };
        
        case actionTypes.DELETE:
            copyList = [...state.list];
            const filteredLIst = copyList.filter(i => i.sys.id !== action.payload.id);

            return {
                ...state,
                list: filteredLIst,
            };
        
        default: 
            return {
                ...state,
            };
    }
};

const save = ({ dispatch }) => {
    return (data) => {
        dispatch({ type: actionTypes.SAVE, payload: {
            ...data,
        } })
    }
};

const remove = ({ dispatch }) => (bookId) => {
    dispatch({ type: actionTypes.DELETE, payload: {
        id: bookId,
    } })
};

const actions = (store) => ({
    save: save(store),
    remove: remove(store),
});

const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    const { save, remove } = actions({ dispatch });

    return (
        <FavoriteContext.Provider value={{ ...state, save, remove }}>
            {children}
        </FavoriteContext.Provider>
    );
};
PropTypes.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    useFavorites
};
export default FavoritesProvider;
