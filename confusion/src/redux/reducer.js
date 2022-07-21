import { baseURL } from "../shared/baseURL";
import { DATABASE } from "../shared/database";

let initialState = {
  dishes: DATABASE.dishes,
  comments: DATABASE.comments,
  promotions: DATABASE.promotions,
  leaders: DATABASE.leaders,
};

export { initialState };

export const Reducer = (state = initialState, action) => {
  return state;
};
