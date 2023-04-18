import { Box, Button, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { useDeviceOrientation } from "../../utils/useDeviceOrientation";

const divideBy = 1;

const Dashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        width: "100%",
        img: {
          position: "absolute",
          top: 0,
          filter: "blur(15px)",
          opacity: "0.48",
          width: "100%",
          height: "100vh",
          // transform: "scale(1.8)",
        },
      }}
    >
      <img src={"/assets/drake.webp"} alt="" />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          background:
            "linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
        }}
      >
        {" "}
      </Box>

      <Box
        sx={{
          p: 3,
          position: "absolute",
          width: "100%",
          marginTop: "80px",
          maxWidth: "400px",
        }}
      >
        <Tilt gyroscope={true} tiltMaxAngleX={30} tiltMaxAngleY={30}>
          <Box
            sx={{
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.52%, rgba(255, 255, 255, 0) 93.27%)",
              backdropFilter: "blur(21px)",
              p: 1.5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1",
                background: "url('/assets/drake.webp')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Tilt>

        <Box display="flex" justifyContent="center" mt={2}>
          <Typography variant="h3" textAlign="center">
            HONESTLY, NEVERMIND
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt={1}>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Drake
          </Typography>
        </Box>
      </Box>

      <Box sx={{ p: 3, position: "absolute", width: "100%", bottom: 0 }}>
        <Box display="flex" justifyContent="center" mb={1}>
          <Typography variant="body2" textAlign="center">
            Pre-save links:
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              width: 48,
              height: 48,
              background: "#fff",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <Box
              sx={{
                width: "100%",
                aspectRatio: "1",
                background: "url('/assets/drake.webp')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

{
  /* <Box>{JSON.stringify(data)}</Box> */
}
