import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableFooter,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { NavLink } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, removeOne } from "../../action/action";

const Header = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state.updateCart);

  const getTotal = () => {
    let price = 0;
    cart.map((menu) => (price = menu.price * menu.quantity + price));
    setTotal(price);
  };
  useEffect(() => {
    getTotal();
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAddToCart = (menuItem) => {
    dispatch({ type: "ADDTOCART", payload: menuItem }); // Dispatch the action to add to cart
  };
  console.log(handleAddToCart);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // mobile drawer
  const drawer = (
    <div>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography
          color="goldenrod"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, my: 2 }}
          fontFamily={"cursive"}
        >
          <FastfoodIcon />
          Biswa's Kitchen
        </Typography>
        <Divider />
        <ul className="mobile-navigation">
          <li>
            <NavLink activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon onClick={handleClick} />
              </Badge>
            </NavLink>
          </li>
        </ul>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Your Cart Is Empty</MenuItem>
      </Menu>
    </div>
  );

  return (
    <div>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="goldenrod"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              fontFamily={"cursive"}
            >
              <FastfoodIcon />
              Biswa's Kitchen
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeclassname="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink>
                    <Badge
                      style={{ float: "right" }}
                      badgeContent={cart.length}
                      color="primary"
                    >
                      <ShoppingCartIcon onClick={handleClick} />
                    </Badge>
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box sx={{ marginBottom: "-43px" }}>
          <Toolbar />
        </Box>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          {cart.length === 0 ? (
            <Box>Your Cart Is Empty</Box>
          ) : (
            <Box style={{ width: "500px" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableCell sx={{fontSize: "30px", fontWeight: "bold"}}>Photo</TableCell>
                    <TableCell sx={{fontSize: "30px", fontWeight: "bold"}}>Details</TableCell>
                  </TableHead>
                  {cart.map((menu) => {
                    return (
                      <TableBody key={menu.id}>
                        <TableCell>
                          <img
                            style={{ width: "170px", height: "150px" }}
                            src={menu.image}
                            alt="FoodImage"
                          />
                        </TableCell>
                        <TableCell>
                          <p>Dish Name: {menu.name}</p>
                          <p>Price: ₹{menu.price}</p>
                          <p>
                            Rating: {menu.rating} <br />
                            <diV style={{ color: "goldenrod" }}>
                              
                              <StarIcon />
                              <StarIcon /> <StarIcon /> <StarIcon />
                              <StarHalfIcon />
                            </diV>
                          </p>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <p onClick={() => dispatch(removeOne(menu))}>-</p>
                            <p>x {menu.quantity}</p>
                            <p onClick={() => dispatch(add(menu))}>+</p>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <DeleteIcon
                            onClick={() => dispatch(remove(menu))}
                            sx={{
                              fontSize: "30px",
                              cursor: "pointer",
                              color: "red",
                            }}
                          />
                        </TableCell>
                      </TableBody>
                    );
                  })}
                  <TableFooter>
                    <Box>Total: ₹{total.toFixed(2)}</Box>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Box>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
