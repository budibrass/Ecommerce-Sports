import {
  FETCH_PRODUCT,
  GET_ONE_PRODUCT,
  ADD_PRODUCT,
  CHANGE_PRODUCT,
  DELETE_PRODUCT,

  FETCH_CATEGORY,
  GET_ONE_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,

  FETCH_ORDER,
  GET_ONE_ORDER,

  FETCH_CUSTOMER_LIST,

  FECTH_BANNER,
  ADD_BANNER,
  DELETE_BANNER
} from "../utils/constants";

const initState = {
  products: [],
  product: {},
  categories: [],
  category: {},
  orders: [],
  order: {},
  customerList: [],
  banners: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // PRODUCT
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case GET_ONE_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case CHANGE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
      };

    // CATEGORY
    case FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_ONE_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case DELETE_CATEGORY:
        return {
          ...state,
        };
    

    // ORDER
    case FETCH_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ONE_ORDER:
        return {
          ...state,
          order: action.payload,
        };

    // CUSTOMER LIST
    case FETCH_CUSTOMER_LIST:
      return {
        ...state,
        customerList: action.payload,
      };

    // BANNER
    case FECTH_BANNER:
      return {
        ...state,
        banners: action.payload,
      };
    case ADD_BANNER:
        return {
          ...state,
          banner: [...state.products, action.payload],
        };
    case DELETE_BANNER:
        return {
            ...state,
        };

    default:
      return state;
  }
};

export default reducer;
