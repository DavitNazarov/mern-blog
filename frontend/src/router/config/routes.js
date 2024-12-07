// Importing constants
import routes from "../constants/routes";
// Importing Pages
import NewPlace from "../../places/pages/NewPlace";
import Users from "../../user/pages/Users";
import NotFound from "@/errors/NotFound";
import UserPlaces from "@/places/pages/UserPlaces";
import UpdatePlace from "@/places/pages/UpdatePlace";

//* Application routes
export const appRoutes = [
  {
    //* Route for user page
    path: routes.users,
    Element: Users,
  },
  {
    //* Route for new places page
    path: routes.userPlace,
    Element: UserPlaces,
  },
  {
    //* Route for new places page
    path: routes.newPlaces,
    Element: NewPlace,
  },
  {
    //* Route for new places page
    path: routes.PlaceId,
    Element: UpdatePlace,
  },

  {
    //* Fallback route  for undefined path
    path: "*",
    Element: NotFound, //* Redirect user  instead of "not found" Page ;)
  },
];
