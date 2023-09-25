
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect, useDispatch } from "react-redux";
import { add } from "../../store/cartReducer";
import { fetchProducts } from "../../store/productsReducer";
import "./products.css"; // Import the CSS file

function Products(props) {
  const { products, activeCategory, add } = props;
  const filteredProducts = activeCategory
    ? products.filter((item) => item.category === activeCategory)
    : products;

  function handleClick(product) {
    add(product);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeCategory) {
      dispatch(fetchProducts(activeCategory));
    }
  }, [activeCategory, dispatch]);

  return (
    <div className="cards-container">
      {filteredProducts.map((item) => (
        <div key={item.id} className="card-container">
          <Card className="product-card">
            <CardMedia
              className="card-media"
              image={item.image}
              title="Product Image"
            />
            <CardContent className="card-content">
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In Stock: {item.inStock}
              </Typography>
            </CardContent>
            <CardActions className="card-actions">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleClick(item)}
                className="action-button"
              >
                ADD TO CART
              </Button>
              <Button
                variant="outlined"
                size="small"
                className="action-button"
              >
                VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.proReducer.finalProducts,
  activeCategory: state.catReducer.activeCategory,
  cart: state.cartReducer.count,
});

const mapDispatchToProps = { add };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
