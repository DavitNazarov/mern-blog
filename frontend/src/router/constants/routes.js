const users = "/";
const newPlaces = "/places/new";
const PlaceId = "/places/:placeId";
const userPlace = "/:id/places/";
const auth = "/auth";
const signUp = "/register";
const routes = {
  users,
  newPlaces,
  // Dynamic
  userPlace,
  PlaceId,
  auth,
  signUp,
};
export default routes;
