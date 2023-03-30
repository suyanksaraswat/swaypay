import { Box, Fade, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CreateTicket from "../../components/create-ticket";
import Page from "../../ui-library/components/Page";
import DashboardLayout from "../../ui-library/layouts/dashboard";

const Ticket: NextPage = () => {
  const router = useRouter();
  const { ticketId } = router.query;

  return (
    <Page title="Dashboard">
      <DashboardLayout title={"Create Ticket"} prevRoute="/">
        <Fade in={true}>
          <Box>
            <CreateTicket />
          </Box>
        </Fade>
      </DashboardLayout>
    </Page>
  );
};
export default Ticket;
