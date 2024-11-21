// Importing constants
import routes from "../constants/routes";
// Importing Pages
import NewPlace from "../../places/pages/NewPlace";
import Users from "../../user/pages/Users";

//* Application routes
export const appRoutes = [
  {
    //* Route for user page
    path: routes.users,
    Element: Users,
  },
  {
    //* Route for new places page
    path: routes.newPlaces,
    Element: NewPlace,
  },
  {
    //* Route for new places page
    path: routes.userPlace,
    Element: NewPlace, //! soon gonna change
  },
  {
    //* Fallback route  for undefined path
    path: "*",
    Element: Users, //* Redirect user  instead of "not found" Page ;)
  },
];
