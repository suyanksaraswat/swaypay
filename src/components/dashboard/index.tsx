import {
  Box,
  Card,
  Divider,
  Fade,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { COLOR_STYLES } from "../../ui-library/config";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
import { STATUS } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useDeviceOrientation } from "../../utils/useDeviceOrientation";

const divideBy = 3;

const Dashboard = () => {
  const { orientation, requestAccess, revokeAccess, error } =
    useDeviceOrientation();

  useEffect(() => {
    console.log("#### orientation", orientation);
    const ele = document.getElementById("tilting-card-body");

    const frontToBack = orientation?.alpha;
    const leftToRight = orientation?.beta;
    const rotateDegrees = orientation?.gamma;

    if (ele) {
      console.log("#### ele", ele);

      ele.style["transform"] = `perspective(400px) rotateX(${
        frontToBack ? frontToBack / divideBy : 0
      }deg) rotateY(${leftToRight ? leftToRight / divideBy : 0}deg) rotateZ(${
        rotateDegrees ? rotateDegrees / divideBy : 0
      }deg)`;
    }
  }, [orientation]);

  const getAccess = async () => {
    await requestAccess();
  };

  useEffect(() => {
    getAccess();

    return () => {
      revokeAccess();
    };
  }, []);

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
        <Box>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <div className="mouse-position-tracker"></div>
          <Box
            id="tilting-card-body"
            className="tilting-card-body"
            sx={{
              borderRadius: 2,
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.52%, rgba(255, 255, 255, 0) 93.27%)",
              backdropFilter: "blur(21px)",
              p: 1.5,
              transition: "transform 500ms ease",
              // transform: `perspective(400px) rotateX(0.18deg) rotateY(-0.01deg) rotateZ(0deg)`,
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
        </Box>

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
        <Box display="flex" justifyContent="center" mt={1}>
          <Typography variant="caption" textAlign="center" color="text.secondary">
            {orientation && JSON.stringify(orientation)}
          </Typography>
        </Box>

        {/* <Box display="flex" justifyContent="center" mt={1}>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            {JSON.stringify(data)}
          </Typography>
        </Box> */}
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

      <style>
        {`
        .tilting-card-body {
        }
        
        .mouse-position-tracker {
          position: absolute;
          width: calc(100% / 3);
          height: calc(100% / 3);
          z-index: 2;
        }
        .mouse-position-tracker {
          // background: blue;
          // opacity: .2;
        }
        
        /* 1st, 4th, 7th */
        .mouse-position-tracker:nth-child(3n - 2) {
          left: 0;
        }
        /* 2nd, 5th, 8th */
        .mouse-position-tracker:nth-child(3n - 1) {
          left: calc(100% / 3);
        }
        
        /* 2nd, 5th, 8th */
        .mouse-position-tracker:nth-child(3n) {
          right: 0;
        }
        
        /* 4 to 6 */
        .mouse-position-tracker:nth-child(n + 4):nth-child(-n + 6) {
          top: calc(100% / 3);
        }
        /* 7 to 9 */
        .mouse-position-tracker:nth-child(n + 7):nth-child(-n + 9) {
          bottom: 0;
        }
        
        .tilting-card-wrapper {
          position: relative;
          width: 15rem;
          aspect-ratio: 1 / 2;
        }
        
        .tilting-card-body {
        }
        
        .tilting-card-body > :where(h1, p) {
          background: white;
          padding: 0.2rem;
          margin: 0;
        }
        
        .tilting-card-body {
          --perspective: 400px;
          --rotationX: 0;
          --rotationY: 0;
          --rotationZ: 0;
          --angle: 5deg;
        }
        
        .mouse-position-tracker:nth-child(1):hover ~ .tilting-card-body {
          --rotationX: var(--angle);
          --rotationY: calc(var(--angle) * -1);
        }
        
        .mouse-position-tracker:nth-child(2):hover ~ .tilting-card-body {
          --rotationX: var(--angle);
        }
        
        .mouse-position-tracker:nth-child(3):hover ~ .tilting-card-body {
          --rotationX: var(--angle);
          --rotationY: var(--angle);
        }
        
        .mouse-position-tracker:nth-child(4):hover ~ .tilting-card-body {
          --rotationY: calc(var(--angle) * -1);
        }
        
        .mouse-position-tracker:nth-child(6):hover ~ .tilting-card-body {
          --rotationY: var(--angle);
        }
        
        .mouse-position-tracker:nth-child(7):hover ~ .tilting-card-body {
          --rotationY: calc(var(--angle) * -1);
          --rotationX: calc(var(--angle) * -1);
        }
        
        .mouse-position-tracker:nth-child(8):hover ~ .tilting-card-body {
          --rotationX: calc(var(--angle) * -1);
        }
        
        .mouse-position-tracker:nth-child(9):hover ~ .tilting-card-body {
          --rotationY: var(--angle);
          --rotationX: calc(var(--angle) * -1);
        }
        `}
      </style>
    </Box>
  );
};

export default Dashboard;

{
  /* <Box>{JSON.stringify(data)}</Box> */
}
