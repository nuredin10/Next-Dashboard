import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const CustomerListToolbar = (props) => {
  const [searchedInput, setSearchedInput] = useState('')
  const [beforeSearch, setBeforeSearch] = useState([])
  let searchType = 'name'

  let result = [];

  const inputOnchangeHandler = (e) => {

    setSearchedInput(e.target.value.toLowerCase())

  }

  useEffect(() => {
    setBeforeSearch(props.customerList);
  }, [])


  useEffect(() => {

    result = props.customerList.filter((data) => {
      return data.name.toLowerCase().search(searchedInput) != -1 || data.phone.toLowerCase().search(searchedInput) != -1 || data.email.toLowerCase().search(searchedInput) != -1;
    });

    if (searchedInput.length === 0) {
      props.setCustomerList(beforeSearch)
    } else {
      props.setCustomerList(result);
    }


  }, [searchedInput])


  const dropdownHandleChange = (event) => {
    searchType = event.target.value
    // setSearchType(event.target.value.toString());
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Customers
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Import
          </Button>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Export
          </Button>
          <Button
            color="primary"
            variant="contained"
          >
            Add Customers
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3, display: 'flex' }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                onChange={inputOnchangeHandler}
                value={searchedInput}
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
};
