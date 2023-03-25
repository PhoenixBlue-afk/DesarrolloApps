import { ADD_PRODUCT, LOAD_PRODUCT } from "./items.action";

import Item from "../models/Item";

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = new Item(
        Date.now(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.lat,
        action.payload.lng
      );
      return {
        ...state,
        products: state.products.concat(newProduct),
      };
    case LOAD_PRODUCT:
      return {
        ...state,
        products: action.products.map(
          (item) =>
            new Item(
              item.id.toString(),
              item.title,
              item.image,
              item.address,
              item.lat,
              item.lng
            )
        ),
      };
    default:
      return state;
  }
};