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
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  paddingLeft: 24,
  paddingRight: 24,
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <Box display="flex" alignItems="center" gap={2}>
            {prevRoute && (
              <IconButton onClick={() => router.push(prevRoute)}>
                <ArrowBackIcon />
              </IconButton>
            )}

            <Typography variant="h3">{title}</Typography>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            {actions?.map((res, i) => (
              <Button key={i} variant="contained" onClick={res?.onClick}>
                {res?.name}
              </Button>
            ))}
          </Box>
        </Box>

        <Divider sx={{ marginY: 4 }} />

        {children}
      </MainStyle>
    </Box>
  );
}
