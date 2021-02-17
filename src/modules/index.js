import homeRoutes from "./Home/routes";
import createNewBookRoutes from "./Book/pages/Create/routes";
import viewBookRoutes from "./Book/pages/View/routes";
import editBookRoutes from "./Book/pages/Edit/routes";


export const Routes = [
  // breakline
  ...homeRoutes,
  ...createNewBookRoutes,
  ...viewBookRoutes,
  ...editBookRoutes,
];
