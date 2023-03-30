import { Box, Fade, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Dashboard from "../components/dashboard";
import Page from "../ui-library/components/Page";
import DashboardLayout from "../ui-library/layouts/dashboard";

const DashboardPage: NextPage = () => {
  const router = useRouter();

  return (
    <Page title="Dashboard">
      <Fade in={true}>
        <Box>
          <DashboardLayout
            title="Ticket Management System"
            actions={[
              {
                name: "Create Ticket",
                onClick: () => router.push(`/ticket/create`),
              },
            ]}
          >
            <Dashboard />
          </DashboardLayout>
        </Box>
      </Fade>
    </Page>
  );
};
export default DashboardPage;
