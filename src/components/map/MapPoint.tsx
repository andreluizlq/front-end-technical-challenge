/* eslint-disable react/no-unused-prop-types */
import { useState, MouseEvent } from "react";
import { Stack, Typography, Box, Popover } from "@mui/material";
import useStores from "../../hooks/useStore";

interface IMapPointProps {
  lat: number;
  lng: number;
  name: string;
  revenue: number;
  city: string;
  state: string;
}

export default function MapPoint({
  name,
  revenue,
  city,
  state,
}: IMapPointProps) {
  const [hover, setHover] = useState<HTMLDivElement | null>(null);
  const { billing } = useStores();

  const handleHoverOpen = (event: MouseEvent<HTMLDivElement>) => {
    setHover(event.currentTarget);
  };

  const handleHoverClose = () => {
    setHover(null);
  };

  return (
    <>
      <Stack
        sx={{
          borderRadius: "50%",
          width: "15px",
          height: "15px",
          border: "1px solid #000",
          backgroundColor:
            !billing ||
            (!!billing &&
              parseFloat(billing.replace(".", "").replace(",", ".")) <= revenue)
              ? "#b9b9b9"
              : "#FF0000",
        }}
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
        <Box
          sx={{
            p: 2,
            maxWidth: 280,
            backgroundColor:
              !billing ||
              (!!billing &&
                parseFloat(billing.replace(".", "").replace(",", ".")) <=
                  revenue)
                ? "#ffffff"
                : "#ffebeb",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
          <Typography>
            {city} - {state}
          </Typography>
        </Box>
      </Popover>
    </>
  );
}
