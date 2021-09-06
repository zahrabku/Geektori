import { createContext, useContext, FC, useState, useReducer } from "react";
import update from "immutability-helper";
import product from "../components/product";
import { ICardItem } from "../utils/DataDump";

interface IDefaultState {
	products: ICardItem[];
}

// interface BaseAction {
// 	id: ICardItem["id"];
// }

interface Base extends Pick<ICardItem, "id"> {}

const INCREMENT = "INCREMENT";
interface IIncrementAction extends Base {
	type: typeof INCREMENT;
	amount: number;
}

const DECREMENT = "DECREMENT";
interface IDecrementAction extends Base {
	type: typeof DECREMENT;
	amount: number;
}

type ActionType = IIncrementAction | IDecrementAction;

function shoppingCartItemsReducer(state: IDefaultState, action: ActionType) {
	switch (action.type) {
		case INCREMENT: {
			const productIndex = state.products.findIndex(
				(product) => product.id === action.id
			);

			const oldAmount = state.products[productIndex].amount;
			return update(state, {
				products: {
					[productIndex]: { amount: { $set: oldAmount + action.amount } },
				},
			});
			// const product = state.products.find(
			// 	(product) => product.id === action.id
			// );
			// if (!product) break;
			// const newProducts = state.products.filter((p) => p.id !== product.id);

			// return {
			// 	...state,
			// 	products: [
			// 		...newProducts,
			// 		{ ...product, amount: product.amount + action.amount },
			// 	],
			// };
		}
	}
	return state;
}

const ShoppingCartContext = createContext<
	| {
			isOpenShoppingCart: boolean;
			setIsOpenShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
			state: IDefaultState;
			dispatch: React.Dispatch<ActionType>;
	  }
	| undefined
>(undefined);

const useShoppingCart = () => {
	const value = useContext(ShoppingCartContext);

	if (value === undefined) {
		throw Error("useShoppingCart must be within ShoppingCartProvider!!");
	}

	return value;
};

const ShoppingCartProvider: FC = (props) => {
	const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
	const [state, dispatch] = useReducer(shoppingCartItemsReducer, {
		products: [],
	});
	// ShoppingCartItemsSate

	// dispatch({
	// 	type: DECREMENT,
	// 	id: 342,
	// 	amount: 100,
	// });

	return (
		<ShoppingCartContext.Provider
			value={{
				isOpenShoppingCart,
				setIsOpenShoppingCart,
				state,
				dispatch,
			}}>
			{props.children}
		</ShoppingCartContext.Provider>
	);
};

export { ShoppingCartProvider, useShoppingCart };
