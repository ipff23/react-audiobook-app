import Edit from './Edit';

const exact = true;

const routes = [
  {
    name: 'edit-book',
    path: '/edit-book/:sysID',
    component: Edit,
    exact,
  },
];

export default routes;