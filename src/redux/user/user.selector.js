import { createSelector } from "reselect";

const selectUser = (state) => state.user.select;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
