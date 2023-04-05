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

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState<{
    frontToBack: number | null;
    leftToRight: number | null;
    rotateDegrees: number | null;
  }>({
    frontToBack: null,
    leftToRight: null,
    rotateDegrees: null,
  });

  useEffect(() => {
    const handleOrientationEvent = (
      frontToBack: number | null,
      leftToRight: number | null,
      rotateDegrees: number | null,
    ) => {
      console.log("###### orient-", frontToBack, leftToRight, rotateDegrees);

      setData({
        frontToBack,
        leftToRight,
        rotateDegrees,
      });
    };

    window.addEventListener(
      "deviceorientation",
      (event) => {
        const rotateDegrees = event.alpha; // alpha: rotation around z-axis
        const leftToRight = event.gamma; // gamma: left to right
        const frontToBack = event.beta; // beta: front back motion

        handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
      },
      true,
    );

    return () => {
      window.removeEventListener(
        "deviceorientation",
        (event) => {
          const rotateDegrees = event.alpha; // alpha: rotation around z-axis
          const leftToRight = event.gamma; // gamma: left to right
          const frontToBack = event.beta; // beta: front back motion

          handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        },
        true,
      );
    };
  }, []);

  return <Box>{JSON.stringify(data)}</Box>;
};

export default Dashboard;
