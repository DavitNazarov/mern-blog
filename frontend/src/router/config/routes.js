// Importing constants
import routes from "../constants/routes";
// Importing Pages
import NewPlace from "../../places/pages/NewPlace";
import Users from "../../user/pages/Users";
import NotFound from "@/errors/NotFound";
import UserPlaces from "@/places/pages/UserPlaces";
import UpdatePlace from "@/places/pages/UpdatePlace";
import Auth from "@/user/pages/Auth";

//* Application routes
export const appRoutes = [
  {
    path: routes.users,
    Element: Users,
  },
  {
    path: routes.userPlace,
    Element: UserPlaces,
  },

  // AUTH
  {
    path: routes.auth,
    Element: Auth,
  },

  //* Fallback route  for undefined path
  {
    path: "*",
    Element: NotFound,
  },
];

// private routes
export const privateRoutes = [
  {
    path: routes.users,
    Element: Users,
  },
  {
    path: routes.userPlace,
    Element: UserPlaces,
  },
  {
    path: routes.newPlaces,
    Element: NewPlace,
  },
  {
    path: routes.PlaceId,
    Element: UpdatePlace,
  },

  {
    path: "*",
    Element: NotFound,
  },
];
