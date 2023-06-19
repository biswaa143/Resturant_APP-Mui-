import React from "react";
import Layout from "../Layoout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          p: 5,
          textAlign: "center",
          fontSize: "20px",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "45px",
            color: "maroon",
          },
          "& p": {
            textAlign: "justify",
            p: 2,
            fontSize: "19px",
          },
          "@media (max-width: 600px)": {
            mt: "70px",
            "& h4": {
              fontSize: "30px",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to Biswa's Kitchen, where culinary excellence meets
          exceptional service in a vibrant and inviting atmosphere. Located in
          Cuttack, our restaurant is the perfect destination for food
          enthusiasts and those seeking an unforgettable dining experience. At
          Biswa's Kitchen, we take pride in offering a diverse menu that
          showcases the best of local and international flavors. Our talented
          team of chefs combines fresh, high-quality ingredients with creative
          techniques to craft exquisite dishes that will tantalize your taste
          buds. From savory appetizers and mouthwatering entrees to decadent
          desserts, each plate is a work of art designed to delight and satisfy
          even the most discerning palate.
        </p>
        <p>
          We believe that dining is not just about great food, but also about
          creating memorable moments. Our warm and welcoming staff is dedicated
          to providing impeccable service, ensuring that every guest feels
          valued and cared for. Whether you're celebrating a special occasion,
          enjoying a romantic dinner for two, or simply indulging in a delicious
          meal with friends and family, our attentive team is here to make your
          experience truly extraordinary. Biswa's Kitchen also boasts a stylish
          and inviting ambiance, with thoughtfully designed interiors that
          strike the perfect balance between elegance and comfort. Whether you
          prefer an intimate booth, a cozy corner, or a lively communal table,
          our restaurant offers a variety of seating options to suit your
          preference.
        </p>
        <p>
          We understand the importance of accommodating dietary restrictions and
          preferences, and our menu features vegetarian, vegan, and gluten-free
          options, ensuring that everyone can savor our culinary offerings. Join
          us at Biswa's Kitchen and embark on a culinary journey that will
          leave you with unforgettable memories. Indulge your senses, immerse
          yourself in our warm hospitality, and discover the true art of dining.
          Make a reservation today and experience Biswa's Kitchen—where
          exceptional food and exceptional service come together.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
