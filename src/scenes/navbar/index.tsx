import React, { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.2rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween
        sx={{
          "&:hover": {
            color: palette.primary[100],
            cursor: "pointer",
            duration: 1000,
            transition: "ease-in-out",
          },
        }}
        gap="0.75rem"
      >
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h1" fontSize="16px">
          AnalytiCash
        </Typography>
      </FlexBetween>
      {/* Right Side */}
      <FlexBetween gap="2rem">
        <Box
          sx={{
            "&:hover": {
              color: palette.secondary[500],
              transition: "ease-in-out",
              cursor: "pointer",
              duration: 1000,
            },
          }}
        >
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box
          sx={{
            "&:hover": {
              color: palette.secondary[500],
              transition: "ease-in-out",
              cursor: "pointer",
              duration: 1000,
            },
          }}
        >
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
