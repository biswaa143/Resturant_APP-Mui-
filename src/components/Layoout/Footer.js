import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "rgba(26, 24, 24, 0.89)",
          color: "white",
          p: '0.1px',
          marginTop: '-21px'
        }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 1.5,
            },
            "& svg: hover": {
                color: "goldenrod",
                transform: "translateX(5px)",
                transition: "all 500ms"
            }
          }}
        >
          <GitHubIcon />
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          <h3>All Rights Reserved &copy; Biswa Ranjan Barik</h3>
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
