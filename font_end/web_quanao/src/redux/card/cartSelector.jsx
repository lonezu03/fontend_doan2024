import { createSelector } from '@reduxjs/toolkit';

export const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (cartState) => cartState.items
);

export const selectCartLoading = createSelector(
  selectCartState,
  (cartState) => cartState.loading
);

export const selectCartError = createSelector(
  selectCartState,
  (cartState) => cartState.error
);
