import { Box, Fade, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import EditTicket from "../../components/edit-ticket";
import Page from "../../ui-library/components/Page";
import DashboardLayout from "../../ui-library/layouts/dashboard";

const Ticket: NextPage = () => {
  const router = useRouter();
  const { ticketId } = router.query;

  return (
    <Page title="Edit Ticket">
      <DashboardLayout title={"Edit Ticket"} prevRoute="/">
        <Fade in={true}>
          <Box>
            <EditTicket id={ticketId as string} />
          </Box>
        </Fade>
      </DashboardLayout>
    </Page>
  );
};
export default Ticket;
