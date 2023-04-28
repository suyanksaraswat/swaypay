import { Box, Button, Typography } from "@mui/material";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useDeviceOrientation } from "../../utils/useDeviceOrientation";

const divideBy = 1;

const Dashboard = () => {
  const {
    orientation,
    requestAccess,
    revokeAccess,
    error,
    cssTransformInverse,
  } = useDeviceOrientation();

  const getAccess = async () => {
    await requestAccess();
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src={"/assets/drake.webp"} alt="" className="bkg" />

        <Box
          sx={{
            zIndex: 10,
            width: "100%",
            maxWidth: { md: "320px", xs: "300px" },
            marginTop: "12vh",
            ".glare-wrapper": {
              borderRadius: "16px !important",
            },
          }}
        >
          <Tilt
            gyroscope={true}
            tiltMaxAngleX={2}
            tiltMaxAngleY={8}
            glareEnable={true}
            glareMaxOpacity={0.16}
            glarePosition="all"
          >
            <Box
              sx={{
                aspectRatio: "1/1.5",
                borderRadius: 1.5,
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.52%, rgba(255, 255, 255, 0) 93.27%)",
                backdropFilter: "blur(21px)",
                p: 1.5,
                position: "relative",

                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 1.5,
                  border: "1px solid transparent",
                  background:
                    "radial-gradient(170.42% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%) border-box",
                  "-webkit-mask":
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  "-webkit-mask-composite": " destination-out",
                  "mask-composite": "exclude",
                },
              }}
            >
              <img src="/assets/drake.webp" alt="" className="cover" />
            </Box>
          </Tilt>
        </Box>

        <Box
          sx={{
            background:
              "linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 40%)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "60vh",
            position: "absolute",
            bottom: 0,
            zIndex: 100,
          }}
        >
          {" "}
        </Box>

        <Box
          sx={{
            zIndex: 1000,
            marginTop: "-140px",
            maxWidth: { md: "380px", xs: "280px" },
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Box display="flex" justifyContent="center">
              <Typography variant="h3" textAlign="center">
                HONESTLY, NEVERMIND
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" mt={1.5}>
              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
              >
                Drake, 2022
              </Typography>
            </Box>
          </Box>

          <Box paddingX={2} pt={1} pb={2}>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Typography variant="body2" textAlign="center">
                Pre-save links:
              </Typography>
            </Box>

            <Box display="flex" justifyContent="center" gap={2}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "50%",
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    background: "url('/assets/spotify.svg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "50%",
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    background: "url('/assets/apple-music.svg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "50%",
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    background: "url('/assets/spotify.svg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "50%",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: 48,
                  height: 48,
                  background: "#fff",
                  borderRadius: "50%",
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    background: "url('/assets/apple-music.svg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              mt={3}
            >
              <Image src="/assets/madverse.png" alt="" width={35} height={13} />

              <Typography
                variant="body2"
                textAlign="center"
                color="text.secondary"
              >
                Powered by MADverse
              </Typography>
            </Box>
          </Box>

          {/* <Box sx={{ p: 1 }}>
            <Box display="flex" justifyContent="center" mb={1}>
              <Button variant="contained" onClick={getAccess}>
                Give Permission
              </Button>
            </Box>
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
          </Box> */}
        </Box>
      </Box>
      <style>
        {`
        .bkg {
          position: absolute;
          top: 0;
          filter: blur(16px);
          opacity: 0.16;
          width: 100%;
          height: 100vh;
        }

        .cover {
          width: 100%;
          border-radius: 12px;
          aspect-ratio: 1;

          border: 1px solid rgba(255, 255, 255, 0.08);
          filter:
            drop-shadow(0px 16.9875px 16.9875px rgba(0, 0, 0, 0.4));
        }
      `}
      </style>
    </>
  );
};

export default Dashboard;

{
  /* <Box>{JSON.stringify(data)}</Box> */
}
