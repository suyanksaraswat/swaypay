import { ReactNode, forwardRef } from "react";
import Head from "next/head";
// @mui
import { Box, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(function Page(
  { children, title = "", meta, ...other },
  ref,
) {
  return (
    <>
      <Head>
        <title>{`${title} | Swaypay`}</title>
        {meta}
      </Head>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  );
});

export default Page;
