import { Theme, alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Backdrop(theme: Theme) {
  const varLow = alpha(theme.palette.grey[900], 0.48);
  const varHigh = alpha(theme.palette.grey[900], 1);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: "rgba(13, 13, 13, 0.8) !important",
          backdropFilter: "blur(2px)",

          "&.MuiBackdrop-invisible": {
            background: "rgba(13, 13, 13, 0.8)",
          },
        },
      },
    },
  };
}
