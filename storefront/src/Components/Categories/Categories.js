

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { connect, useDispatch } from "react-redux";
import { activeCat, fetchCategories } from "../../store/categoriesReducer";
import { selectedPro } from "../../store/productsReducer";
import "./Categories.css"; 

function Categories(props) {
  const { activeCat, selectedPro } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = (category) => {
    activeCat(category);
    selectedPro(category);
  };

  return (
    <div className="categories-container"> 
      <h3 className="categories-title">Browse our Categories</h3> 
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "& > *": {
            margin: "5px", // Fix the margin syntax here
          },
        }}
      >
        {props.categories.map((item) => (
          <Button
            key={item.name}
            variant="text"
            aria-label="text button group"
            className="category-button" // Apply button class
            onClick={() => handleClick(item.name)}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </div>
  );
}


const mapStateToProps = (state) => ({
  activeCategory: state.catReducer.activeCategory,
  categories: state.catReducer.categories,
});

const mapDispatchToProps = { activeCat, selectedPro };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

