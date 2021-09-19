import { ICardItem } from "../utils/DataDump";

interface IInitialState {
  products: ICardItem[];
}

const ADD_PRODUCT = "ADD_PRODUCT";

interface IAddProduct {
  type: typeof ADD_PRODUCT;
  payload: { product: ICardItem };
}

const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";

interface IIncrementProduct {
  type: typeof INCREMENT_PRODUCT;
  payload: Pick<ICardItem, "id">;
}

const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

interface IDecrementProduct {
  type: typeof DECREMENT_PRODUCT;
  payload: Pick<ICardItem, "id">;
}

const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface IRemoveProduct {
  type: typeof REMOVE_PRODUCT;
  payload: Pick<ICardItem, "id">;
}

type Actions =
  | IAddProduct
  | IIncrementProduct
  | IDecrementProduct
  | IRemoveProduct;

export { ADD_PRODUCT, REMOVE_PRODUCT, DECREMENT_PRODUCT, INCREMENT_PRODUCT };

export type { Actions, IInitialState };
