import axios from "axios";

const CatInitState = {
  categories: [],

  // categories: [
  //   {
  //     normalizedName: "Electronics",
  //     displayName: "ELECTRONICS",
  //     description:
  //       "Electronics is both a science and an art, where creativity meets engineering precision",
  //   },
  //   {
  //     normalizedName: "Food",
  //     displayName: "FOOD",
  //     description:
  //       "food is a universal language that transcends borders and connects us all It brings people together at the dining table, sparking conversations, forging bonds, and creating memories",
  //   },
  // ],
  activeCategory: "",
};

// create a reducer

export const catReducer = (state = CatInitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "activeCat":
      return {
        ...state,
        activeCategory: payload,
      };
      case "FETCH":
        const categoriesArray = payload.results;
        return {
          ...state,
          categories: categoriesArray,
        };
      case "SET":
        return {
          ...state,
          selectedCategory: payload,
        };
    default:
      return state;
  }
};

export const activeCat = (name) => {
  return {
    type: "activeCat",
    payload: name,
  };
};
/////////////////////////////


// Categories
export const setSelectedCategory = (category) => ({
  type: 'SET',
  payload: category,
});
export const fetchCategories = () => {
  return async (dispatch) => {
  try {
  const response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  console.log("CATTTEE",response.data)
  if (response.status === 200) {
    dispatch({
      type: 'FETCH',
      payload: response.data,
    });
  } else {
    console.error("Error fetching categories: ", response.statusText);
  }
} catch (error) {
  console.error("Error fetching categories:", error);
}
  };
};