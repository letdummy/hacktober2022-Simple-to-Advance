import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

function SongImg({img}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const height = !isMobile ? "400px" : "300px";
  const width = !isMobile ? "400px" : "300px";
  return (
    <>
      <Card sx={{ maxWidth: width, borderRadius: "20px" }}>
        <CardActionArea>
          <CardMedia component="img" height={height} image={img} />
        </CardActionArea>
      </Card>
    </>
  );
}

export default SongImg;
