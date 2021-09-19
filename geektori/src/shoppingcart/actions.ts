import { ICardItem } from "../utils/DataDump";
import {
  Actions,
  ADD_PRODUCT,
  DECREMENT_PRODUCT,
  INCREMENT_PRODUCT,
  REMOVE_PRODUCT,
} from "./types";

export const addProductAction = (product: ICardItem): Actions => {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
};

export const incrementProductAction = (id: ICardItem["id"]): Actions => {
  return {
    type: INCREMENT_PRODUCT,
    payload: {
      id
    },
  };
};

export const decrementProductAction = (id: ICardItem["id"]): Actions => {
  return {
    type: DECREMENT_PRODUCT,
    payload: {
      id,
    },
  };
};

export const removeProductAction = (id: ICardItem["id"]): Actions => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
};
