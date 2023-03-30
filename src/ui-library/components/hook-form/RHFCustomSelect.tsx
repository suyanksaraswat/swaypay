// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  TextFieldProps,
} from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  children: React.ReactNode;
  renderValue?: (value: any) => React.ReactNode;
};

type Props = IProps & TextFieldProps;

export default function RHFSelect({
  name,
  children,
  renderValue,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error} sx={other?.sx}>
          <InputLabel>{other?.label}</InputLabel>
          <Select
            {...field}
            label={other?.label}
            fullWidth
            renderValue={renderValue && renderValue}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {children}
          </Select>
          {!!error && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
