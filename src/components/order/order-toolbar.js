import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OrdersToolBar = () => {
  return (
    <Box sx={{ mt: 3, width: "90vw"}}>
      <Grid container spacing={2}>
        <Grid item lg={10} sm={12}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" >
                  <SvgIcon
                    color="action"
                    fontSize="small"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            placeholder="Search customer"
            variant="outlined"
          />
        </Grid>
        <Grid item={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={sortBy}
              label="Sort"
              // onChange={dropdownHandleChange}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="phone">Phone</MenuItem>
              <MenuItem value="email">Email</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OrdersToolBar;