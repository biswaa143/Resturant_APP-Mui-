import React from "react";
import { MenuList } from "../data/data";
import Layout from "../Layoout/Layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Menu.css";
import { Link } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import add from "../../action/action";

const Menu = () => {
  const cart = useSelector((state) => state.updateCart);
  const dispatch = useDispatch();
  console.log(cart);

  const send = (menu) => {
    dispatch(add(menu));
  };
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card
            key={menu.id}
            sx={{ maxWidth: "390px", display: "flex", m: 2, mt: 5 }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="body1">{menu.price}</Typography>
                <div className="buttonContainer">
                  <Link to="/cart">
                    <Button onClick={() => send(menu)}>ADD TO CART</Button>
                  </Link>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
