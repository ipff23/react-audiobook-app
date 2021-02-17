import View from './View';

const exact = true;

const routes = [
    {
        name: 'view-book',
        path: '/view-book/:sysID',
        component: View,
        exact,
    },
];

export default routes;
