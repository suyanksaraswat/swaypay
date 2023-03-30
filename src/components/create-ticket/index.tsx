import {
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import { trpc } from "../../utils/trpc";
import { useForm } from "react-hook-form";
import { createTicketShape } from "../../utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  RHFTextField,
} from "../../ui-library/components/hook-form";
import { useRouter } from "next/router";
import { LoadingButton } from "@mui/lab";

const defaultValues = {
  name: "",
  description: "",
};

type FormValuesProps = {
  name: string;
  description: string;
};

const CreateTicket = () => {
  const router = useRouter();

  const methods = useForm<FormValuesProps>({
    resolver: zodResolver(createTicketShape),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const createTicket = trpc.example.createTicket.useMutation();

  const onSubmit = (data: FormValuesProps) => {
    createTicket.mutate(
      {
        name: data?.name,
        description: data?.description,
      },
      {
        onSuccess: () => router.push("/"),
      },
    );
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Box display="flex" justifyContent="center">
          <Card sx={{ p: 4, maxWidth: 600, width: "100%" }}>
            <RHFTextField name="name" label="Name" />
            <RHFTextField
              name="description"
              label="Description"
              multiline
              minRows={5}
              sx={{ mt: 2 }}
            />

            <LoadingButton
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 4 }}
              loading={createTicket.isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </LoadingButton>
          </Card>
        </Box>
      </Box>
    </FormProvider>
  );
};
export default CreateTicket;
