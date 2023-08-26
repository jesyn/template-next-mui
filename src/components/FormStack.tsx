import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Box,
  Checkbox,
} from "@mui/material";

const FormStack = () => {
  const [stack, setStack] = useState();

  const handleChange = (e: any) => {
    setStack(e.target.value);
  };

  return (
    <Box sx={{ m: 6 }}>
      <FormControl fullWidth>
        <InputLabel id="id_stack">Stack</InputLabel>
        <Select
          labelId="id_stack"
          id="demo-simple-select"
          value={stack}
          label="Stack"
          onChange={handleChange}
        >
          <MenuItem value={10}>Frontend </MenuItem>
          <MenuItem value={20}>Backend</MenuItem>
          <MenuItem value={30}>Full stack</MenuItem>
        </Select>
        <FormLabel id="id_gender">Genero</FormLabel>
        <RadioGroup
          aria-labelledby="id_gender"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="desea recibir noticias"
        />
      </FormControl>
    </Box>
  );
};

export default FormStack;
