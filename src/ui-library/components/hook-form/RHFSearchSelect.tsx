// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import { Autocomplete, TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  options: any[];
  onSelectChange?: (data: any) => void;
  fullWidth?: boolean;
  freeSolo?: boolean;
};

type Props = IProps & TextFieldProps;

export default function RHFSearchSelect({
  name,
  label,
  options,
  onSelectChange,
  fullWidth,
  freeSolo,
  ...other
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Autocomplete
            {...field}
            disablePortal
            handleHomeEndKeys
            options={options}
            fullWidth={fullWidth}
            freeSolo={freeSolo}
            renderInput={(params) => (
              <TextField
                {...params}
                {...other}
                label={label}
                error={!!error}
                helperText={error?.message}
              />
            )}
            onChange={(e, value) => {
              field.onChange(value);
              if (onSelectChange) {
                onSelectChange(value);
              }
            }}
            onInputChange={(event, newInputValue) => {
              if (freeSolo) {
                field.onChange(newInputValue);
              }
            }}
          />
        );
      }}
    />
  );
}
