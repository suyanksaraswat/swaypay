// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import { Autocomplete, Chip, TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFChipInput({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          // {...field}
          fullWidth
          value={Array.isArray(field.value) ? field.value : []}
          options={[]}
          multiple
          freeSolo
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <span key={index}>
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              </span>
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              label="freeSolo"
              placeholder="Favorites"
              error={!!error}
              helperText={error?.message}
            />
          )}
          onChange={(_, data) => field?.onChange(data)}
        />
      )}
    />
  );
}
