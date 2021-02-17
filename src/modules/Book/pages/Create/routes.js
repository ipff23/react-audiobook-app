import Create from './Create';

const exact = true;

const routes = [
    {
        name: 'add-new-book',
        path: '/add-new-book',
        component: Create,
        exact,
    },
];

export default routes;
