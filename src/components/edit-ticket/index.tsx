import {
  Backdrop,
  Box,
  Card,
  CircularProgress,
  Divider,
  Fade,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { trpc } from "../../utils/trpc";
import { useRouter } from "next/router";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { STATUS } from "../../utils/constants";

type StatusType = "open" | "inProgress" | "codeReview";

interface EditTicketI {
  id: string;
}

const EditTicket = ({ id }: EditTicketI) => {
  const router = useRouter();

  const [status, setStatus] = useState("open");

  const { data, isFetching, error } = trpc.example.fetchTicketById.useQuery(
    { id },
    {
      refetchOnWindowFocus: false,
      onSuccess: (val) => {
        if (val?.status) {
          setStatus(val?.status);
        }
      },
    },
  );

  const updateTicketStatus = trpc.example.updateTicketStatus.useMutation();

  const onChangeStatus = (value: StatusType) => {
    updateTicketStatus.mutate(
      {
        id,
        status: value,
      },
      {
        onSuccess: () => setStatus(value),
      },
    );
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Card sx={{ p: 4, maxWidth: 600, width: "100%" }}>
          <Typography variant="h2" textAlign="center">
            Ticket {data?.ticketNumber}
          </Typography>

          <Typography variant="h5" textAlign="center" mt={4}>
            {data?.name}
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            color="text.secondary"
            mt={2}
          >
            {data?.description}
          </Typography>
        </Card>
      </Box>

      <Box mt={8} display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          width="100%"
          sx={{ maxWidth: 410 }}
        >
          <FormControl fullWidth>
            <InputLabel>Select Status</InputLabel>
            <Select
              name="Status"
              label="Status"
              value={status}
              onChange={(e) => onChangeStatus(e.target.value as StatusType)}
              error={!!updateTicketStatus.error}
            >
              {STATUS.map((s, index: number) => {
                return (
                  <MenuItem key={index} value={s?.key}>
                    {s?.title}
                  </MenuItem>
                );
              })}
            </Select>

            {!!updateTicketStatus.error && (
              <Typography variant="caption" color="error" mt={1}>
                {updateTicketStatus.error?.message}
              </Typography>
            )}
          </FormControl>
          <Typography
            variant="caption"
            textAlign="center"
            color="text.secondary"
            mt={2}
          >
            * Autosave on status update
          </Typography>
        </Box>
      </Box>

      <Backdrop open={isFetching || updateTicketStatus.isLoading}>
        <CircularProgress />
      </Backdrop>
    </Box>
  );
};
export default EditTicket;
