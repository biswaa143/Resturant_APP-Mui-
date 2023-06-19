import React from "react";
import Layout from "../Layoout/Layout";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          fontSize: "20px",
          p: 5,
          "@media (max-width: 600px)": {
            justifyContent: "center",
            maxWidth: "90%",
            mx: "auto",
            "& h4": {
              fontSize: "30px"
            }
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, fontSize: "45px", color: "maroon" }}
        >
          Contact My Restaurant
        </Typography>
        <p>
          Introducing Biswa's Kitchen, a culinary haven nestled in the heart of
          cuttack, Odisha. With a passion for exquisite flavors and a dedication
          to authentic cuisine, Biswa's Kitchen invites you on a delectable
          journey like no other. Step into our cozy and inviting atmosphere,
          where the aromas of freshly prepared dishes waft through the air,
          instantly captivating your senses. Our skilled team of chefs, led by
          the talented Chef Biswa, meticulously crafts each dish with an
          unwavering commitment to quality and taste.
        </p>
        <p>
          At Biswa's Kitchen, we specialize in Non-veg items mostly Biriyani,
          offering a diverse menu that showcases the vibrant and rich flavors of
          the region. From traditional favorites to innovative creations, every
          bite at Biswa's Kitchen is a harmonious symphony of spices and
          textures, leaving you craving for more. Whether you're a connoisseur
          seeking culinary adventures or simply looking for a satisfying meal,
          our menu caters to every palate. Indulge in tantalizing appetizers
          that awaken your taste buds, savor the hearty and soulful curries, and
          relish the perfectly cooked and seasoned meats and seafood. Vegetarian
          options are abundant, showcasing the diversity and creativity of
          plant-based cuisine.
        </p>
        <p>
          In addition to our inviting dining area, Biswa's Kitchen also offers
          takeout and catering services, allowing you to enjoy our exceptional
          cuisine wherever you desire. Whether it's a cozy dinner for two, a
          celebratory gathering, or a corporate event, we'll provide a culinary
          experience that exceeds your expectations.
        </p>
        <p>
          Come and experience Biswa's Kitchen, where passion meets taste, and
          every dish tells a story. Book your table today and let us take you on
          a culinary voyage you won't soon forget.
        </p>
      </Box>
      <Box
        sx={{
          m: "auto",
          width: "50%",
          "@media (max-width: 600px)": {
            width: "90%",
          },
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white", fontSize: "20px" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1800-400-200 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  barikbiswa143@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: "green", pt: 1 }} />
                  +91-7978149413
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
