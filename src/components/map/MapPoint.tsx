/* eslint-disable react/no-unused-prop-types */
import { useState, MouseEvent } from "react";
import { styled } from "@mui/material/styles";
import { Stack, Typography, Box, Popover } from "@mui/material";

interface IMapPointProps {
  lat: number;
  lng: number;
  name: string;
  revenue: number;
  city: string;
  state: string;
}

const StorePointStyled = styled(Stack)(() => ({
  borderRadius: "50%",
  width: "15px",
  height: "15px",
  border: "1px solid #000",
  backgroundColor: "#b9b9b9",
}));

export default function MapPoint({
  name,
  revenue,
  city,
  state,
}: IMapPointProps) {
  const [hover, setHover] = useState<HTMLDivElement | null>(null);

  const handleHoverOpen = (event: MouseEvent<HTMLDivElement>) => {
    setHover(event.currentTarget);
  };

  const handleHoverClose = () => {
    setHover(null);
  };

  return (
    <>
      <StorePointStyled
        onMouseEnter={(event) => handleHoverOpen(event)}
        onMouseLeave={handleHoverClose}
      />
      <Popover
        id="mouse-over-popover"
        open={Boolean(hover)}
        anchorEl={hover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
        sx={{
          pointerEvents: "none",
        }}
      >
        <Box sx={{ p: 2, maxWidth: 280 }}>
          <Typography>oi</Typography>
        </Box>
      </Popover>
    </>
  );
}
