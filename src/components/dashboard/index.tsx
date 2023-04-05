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
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();

  const { data, isFetching, error } = trpc.example.fetchTickets.useQuery(
    undefined,
    {
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    const handleOrientationEvent = (
      frontToBack: number | null,
      leftToRight: number | null,
      rotateDegrees: number | null,
    ) => {
      console.log("###### orient-", frontToBack, leftToRight, rotateDegrees);
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

  return (
    <Grid container spacing={2}>
      {STATUS?.map((s, i) => (
        <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={i}>
          <Card sx={{ p: 4 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" textAlign="center">
                {s?.title}
              </Typography>
            </Box>

            <Box mt={1} mb={3}>
              <Typography variant="body2" color="text.secondary">
                {s?.subtitle}
              </Typography>
            </Box>

            <Divider />

            <Box mt={3} display="flex" flexDirection="column" gap={2}>
              {isFetching ? (
                <LoadingSkeleton />
              ) : data?.filter((ticket) => ticket?.status === s?.key) &&
                data?.filter((ticket) => ticket?.status === s?.key)?.length >
                  0 ? (
                data
                  ?.filter((ticket) => ticket?.status === s?.key)
                  ?.map((ticket, i) => (
                    <Card
                      key={i}
                      sx={{
                        p: 2,
                        backgroundColor: COLOR_STYLES.CARD_BACKGROUND,
                      }}
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        gap={2}
                      >
                        <Box display="flex" alignItems="center" gap={2}>
                          <Card
                            sx={{
                              p: 1,
                              backgroundColor: COLOR_STYLES.CARD_BACKGROUND,
                              minWidth: 40,
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Typography variant="body2">
                              {ticket?.ticketNumber}
                            </Typography>
                          </Card>
                          <Typography variant="body2">
                            {ticket?.name}
                          </Typography>
                        </Box>

                        <IconButton
                          size="small"
                          onClick={() =>
                            router.push(`/ticket/${ticket.ticketNumber}`)
                          }
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </Card>
                  ))
              ) : (
                <Box>
                  <Typography variant="body2">
                    No {s?.title} Ticket Found.
                  </Typography>
                </Box>
              )}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Dashboard;

const LoadingSkeleton = () => (
  <>
    {[1, 2, 3]?.map((_, i) => (
      <Card
        key={i}
        sx={{
          p: 2,
          backgroundColor: COLOR_STYLES.CARD_BACKGROUND,
        }}
      >
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box display="flex" alignItems="center" gap={2}>
            <Card
              sx={{
                p: 1,
                backgroundColor: COLOR_STYLES.CARD_BACKGROUND,
                minWidth: 40,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Skeleton variant="rounded" width={40} height={10} />
            </Card>
            <Skeleton variant="rounded" height={20} sx={{ width: 100 }} />
          </Box>

          <Skeleton variant="rounded" width={40} height={20} />
        </Box>
      </Card>
    ))}
  </>
);
