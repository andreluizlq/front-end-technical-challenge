import { Stack, Box } from "@mui/material";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <Stack
      sx={{
        backgroundColor: "#f1f1f1",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "#8A03C0",
        }}
      >
        <Box
          component="img"
          alt="LOGO"
          src="images/assertiva_logo_white.svg"
          sx={{ height: "3rem", my: "1rem" }}
        />
      </Stack>
      <Box sx={{ pt: "6rem" }}>{children}</Box>
    </Stack>
  );
}
