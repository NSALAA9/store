import axios from "axios";

const proInitState = {
  products: [
    // {
    //   category: "Food",
    //   image:
    //     "https://www.itisakeeper.com/wp-content/uploads/2020/08/Easy-Alfredo-Sauce-HERO-1-400x400.jpg",
    //   name: "Fettuccine Alfredo",
    //   description:
    //     "A creamy Italian pasta dish with fresh fettuccine, butter, and Parmesan cheese.",
    //   price: "$10",
    //   inStock: "234",
    // },
    // {
    //   category: "Food",
    //   image:
    //     "https://th.bing.com/th/id/R.e77ba2518e762c8c97334f82c2a58595?rik=4%2bpNv6PKJtx0Uw&pid=ImgRaw&r=0",
    //   name: "Steamed Cheeseburger",
    //   description:
    //     "Steamed ground beef then topped with melted cheese (usually cheddar). You can add condiments, tomatoes, and lettuce for extra flavor. ",
    //   price: "$5",
    //   inStock: "300",
    // },
    // {
    //   category: "Food",
    //   image:
    //     "https://th.bing.com/th/id/OIP.CjPZRPbHdRm-buvnVlXq_QHaLH?pid=ImgDet&rs=1",
    //   name: "Pizza",
    //   description:
    //     " A flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
    //   price: "$7",
    //   inStock: "105",
    // },
    // ///////////////////////
    // {
    //   category: "Electronics",
    //   image:
    //     "https://th.bing.com/th/id/OIP.jpY3GqAUZ1QV-5300tCuqQAAAA?pid=ImgDet&rs=1",
    //   name: "Laptop",
    //   description: "A small, portable personal computer",
    //   price: "$550",
    //   inStock: "275",
    // },
    // {
    //   category: "Electronics",
    //   image:
    //     "https://images.fonearena.com/blog/wp-content/uploads/2017/05/Samsung-QLED-TV.jpg",
    //   name: "TV",
    //   description:
    //     "A telecommunication medium for transmitting moving images and sound",
    //   price: "$899",
    //   inStock: "460",
    // },
    // {
    //   category: "Electronics",
    //   image:
    //     "https://th.bing.com/th/id/OIP.JEV_U7QBCrdvAyznN1cs5wHaEc?pid=ImgDet&rs=1",
    //   name: "iPhone",
    //   description: "iPhone",
    //   price: "$899",
    //   inStock: "788",
    // },
  ],
  finalProducts: [],
};

export const proReducer = (state = proInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "productsList":
      const selectedProducts = state.products.filter(
        (pro) => pro.category === payload
      );
      return {
        ...state,
        finalProducts: selectedProducts,
      };
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: payload.results,
      };
    case "AddToCart":
      const removeFromStock = state.finalProducts.map((product) => {
        if (product.name === payload.name) {
          return {
            ...product,
            inStock: product.inStock - 1,
          };
        }
        return product;
      });
      return {
        ...state,
        finalProducts: removeFromStock,
      };
    case "removeFromCart":
      const addToStock = state.finalProducts.map((product) => {
        if (product.name === payload.name) {
          return {
            ...product,
            inStock: product.inStock + 1,
          };
        }
        return product;
      });
      return {
        ...state,
        finalProducts: addToStock,
      };

    default:
      return state;
  }
};

export const selectedPro = (name) => {
  return {
    type: "productsList",
    payload: name,
  };
};

export const removeFromStock = (product) => {
  return {
    type: "AddToCart",
    payload: product,
  };
};

export const addToStock = (product) => {
  return {
    type: "removeFromCart",
    payload: product,
  };
};

//////////////////////

// Products
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api-js401.herokuapp.com/api/v1/products`
      );
      if (response.status === 200) {
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: response.data,
        });
      } else {
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};