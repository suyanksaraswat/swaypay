import { ReactNode, useState } from "react";
// @mui
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// config
import { HEADER, NAVBAR } from "../../config";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  // paddingTop: HEADER.MOBILE_HEIGHT + 24,
  // paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  // paddingLeft: 24,
  // paddingRight: 24,
  [theme.breakpoints.up("lg")]: {
    width: "calc(100% - 320px)",
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    // width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    // height: `calc(100% - ${HEADER.DASHBOARD_DESKTOP_HEIGHT}px)`,
    transition: theme.transitions.create("margin-left", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

// ----------------------------------------------------------------------

type ActionI = {
  name: string;
  onClick: () => void;
}[];

type Props = {
  children: ReactNode;
  title: string;
  actions?: ActionI;
  prevRoute?: string;
};

export default function DashboardLayout({
  children,
  title,
  actions,
  prevRoute,
}: Props) {
  const router = useRouter();

  const verticalLayout = false; // can be changed to support menu as a list on top

  if (verticalLayout) {
    return (
      <>
        <Box
          component="main"
          sx={{
            px: { lg: 2 },
          }}
        >
          {children}
        </Box>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1 },
      }}
    >
      <MainStyle
        sx={{
          // border: "2px solid red",
          minHeight: "100vh",
          // overflow: "hidden"
        }}
      >
        {children}
      </MainStyle>
    </Box>
  );
}
