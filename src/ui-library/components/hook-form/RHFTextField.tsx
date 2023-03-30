// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import { TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({ name, defaultValue, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) =>
        defaultValue ? (
          <TextField
            {...field}
            fullWidth
            defaultValue={defaultValue}
            error={!!error}
            helperText={error?.message}
            InputLabelProps={other.type === "date" ? { shrink: true } : {}}
            {...other}
          />
        ) : (
          <TextField
            {...field}
            fullWidth
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            error={!!error}
            helperText={error?.message}
            InputLabelProps={other.type === "date" ? { shrink: true } : {}}
            {...other}
          />
        )
      }
    />
  );
}
