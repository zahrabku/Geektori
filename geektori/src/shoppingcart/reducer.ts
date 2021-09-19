import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  DECREMENT_PRODUCT,
  Actions,
  INCREMENT_PRODUCT,
  IInitialState,
} from "./types";
import update from "immutability-helper";
import { incrementProductAction } from "./actions";

export const shoppingCartReducer = (
  state: IInitialState,
  action: Actions
): IInitialState => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const product = action.payload.product;
      const itemIndex = state.products.findIndex(
        (item) => item.id === product.id
      );
      if (itemIndex === -1) {
        return update(state, {
          products: { $set: [...state.products, { ...product, amount: 1 }] },
        });
      }
      return shoppingCartReducer(state, incrementProductAction(product.id));
    }
    case DECREMENT_PRODUCT: {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.products[itemIndex];
      const amount = item.amount - 1;

      return update(state, {
        products: { [itemIndex]: { $set: { ...item, amount } } },
      });
    }
    case INCREMENT_PRODUCT: {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = state.products[itemIndex];
      const amount = item.amount + 1;

      return update(state, {
        products: { [itemIndex]: { $set: { ...item, amount } } },
      });
    }

    case REMOVE_PRODUCT: {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      return update(state, { products: { $splice: [[itemIndex, 1]] } });
    }

    default:
      return state;
  }
};
