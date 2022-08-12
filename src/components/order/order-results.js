import React, { useState, useEffect } from 'react'
import { Box, Container, Typography, Grid, Divider, Avatar, Button } from "@mui/material";
import { border, flexbox } from '@mui/system';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const OrderResults = (props) => {
  const data = [
    {
      Date: "AUG 9",
      OrderNumber: 101,
      Total: "$500.00",
      status: "Pending"
    },
    {
      Date: "AUG 8",
      OrderNumber: 102,
      Total: "$600.00",
      status: "Complete"
    },
    {
      Date: "AUG 7",
      OrderNumber: 103,
      Total: "$700.00",
      status: "Canceld"
    },
    {
      Date: "AUG 8",
      OrderNumber: 102,
      Total: "$600.00",
      status: "Complete"
    },
    {
      Date: "AUG 7",
      OrderNumber: 103,
      Total: "$700.00",
      status: "Canceld"
    },
    {
      Date: "AUG 6",
      OrderNumber: 104,
      Total: "$800.00",
      status: "Rejected"
    },
    {
      Date: "AUG 7",
      OrderNumber: 103,
      Total: "$700.00",
      status: "Canceld"
    },
    {
      Date: "AUG 7",
      OrderNumber: 103,
      Total: "$700.00",
      status: "Canceld"
    },
    {
      Date: "AUG 6",
      OrderNumber: 104,
      Total: "$800.00",
      status: "Rejected"
    },
    {
      Date: "AUG 7",
      OrderNumber: 103,
      Total: "$700.00",
      status: "Canceld"
    },
    {
      Date: "AUG 6",
      OrderNumber: 104,
      Total: "$800.00",
      status: "Rejected"
    },
  ]

  const [status, setStatus] = useState('green');
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Canceld" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
          <Tab label="Pending" {...a11yProps(3)} />
          <Tab label="Rejected" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box className={`${props.drawer ? 'drawer-open' : 'drawer-close'}`} sx={{ mt: 3}}>
          <Grid container >
            {data.map((e, i) => (

              <Grid item sx={{ display: "flex", alignItems: "center", height: "10vh", width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)" }} lg={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      height: "70%",
                      width: 56,
                      borderRadius: "15px",
                      backgroundColor: "rgb(229, 231, 235)",
                      padding: 1,
                      textAlign: "center"
                    }}
                  >
                    <Typography sx={{ fontWeight: "500" }}>{e.Date}</Typography>
                  </Box>
                  <Box sx={{ marginLeft: "20%" }}>
                    <Typography variant='h6'>{e.OrderNumber}</Typography>
                    <Typography variant='body1'>{e.Total}</Typography>
                  </Box>
                </Box>
                {

                }
                <Box className={e.status == 'Pending' ? 'pending-status' : (e.status == 'Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px", color: 'white', width: 110, height: 30, marginLeft: "10%" }}>
                  <Typography sx={{ textAlign: "center" }}>{e.status}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ mt: 3 }}>
          <Grid container>
            {data.map((e, i) => (
              e.status == 'Canceld' ? (

                <Grid item sx={{ display: "flex", alignItems: "center", height: "10vh", width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)" }} lg={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "70%",
                        width: 56,
                        borderRadius: "15px",
                        backgroundColor: "rgb(229, 231, 235)",
                        padding: 1,
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ fontWeight: "500" }}>{e.Date}</Typography>
                    </Box>
                    <Box sx={{ marginLeft: "20%" }}>
                      <Typography variant='h6'>{e.OrderNumber}</Typography>
                      <Typography variant='body1'>{e.Total}</Typography>
                    </Box>
                  </Box>
                  {

                  }
                  <Box className={e.status == 'Pending' ? 'pending-status' : (e.status == 'Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px", color: 'white', width: 110, height: "4vh", marginLeft: "10%" }}>
                    <Typography sx={{ textAlign: "center" }}>{e.status}</Typography>
                  </Box>
                </Grid>
              ) : null
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ mt: 3 }}>
          <Grid container>
            {data.map((e, i) => (
              e.status == 'Complete' ? (

                <Grid item sx={{ display: "flex", alignItems: "center", height: "10vh", width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)" }} lg={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "70%",
                        width: 56,
                        borderRadius: "15px",
                        backgroundColor: "rgb(229, 231, 235)",
                        padding: 1,
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ fontWeight: "500" }}>{e.Date}</Typography>
                    </Box>
                    <Box sx={{ marginLeft: "20%" }}>
                      <Typography variant='h6'>{e.OrderNumber}</Typography>
                      <Typography variant='body1'>{e.Total}</Typography>
                    </Box>
                  </Box>
                  {

                  }
                  <Box className={e.status == 'Pending' ? 'pending-status' : (e.status == 'Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px", color: 'white', width: 110, height: "4vh", marginLeft: "10%" }}>
                    <Typography sx={{ textAlign: "center" }}>{e.status}</Typography>
                  </Box>
                </Grid>
              ) : null
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ mt: 3 }}>
          <Grid container>
            {data.map((e, i) => (
              e.status == 'Pending' ? (

                <Grid item sx={{ display: "flex", alignItems: "center", height: "10vh", width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)" }} lg={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "70%",
                        width: 56,
                        borderRadius: "15px",
                        backgroundColor: "rgb(229, 231, 235)",
                        padding: 1,
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ fontWeight: "500" }}>{e.Date}</Typography>
                    </Box>
                    <Box sx={{ marginLeft: "20%" }}>
                      <Typography variant='h6'>{e.OrderNumber}</Typography>
                      <Typography variant='body1'>{e.Total}</Typography>
                    </Box>
                  </Box>
                  {

                  }
                  <Box className={e.status == 'Pending' ? 'pending-status' : (e.status == 'Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px", color: 'white', width: 110, height: "4vh", marginLeft: "10%" }}>
                    <Typography sx={{ textAlign: "center" }}>{e.status}</Typography>
                  </Box>
                </Grid>
              ) : null
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ mt: 3 }}>
          <Grid container>
            {data.map((e, i) => (
              e.status == 'Rejected' ? (

                <Grid item sx={{ display: "flex", alignItems: "center", height: "10vh", width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)" }} lg={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "70%",
                        width: 56,
                        borderRadius: "15px",
                        backgroundColor: "rgb(229, 231, 235)",
                        padding: 1,
                        textAlign: "center"
                      }}
                    >
                      <Typography sx={{ fontWeight: "500" }}>{e.Date}</Typography>
                    </Box>
                    <Box sx={{ marginLeft: "20%" }}>
                      <Typography variant='h6'>{e.OrderNumber}</Typography>
                      <Typography variant='body1'>{e.Total}</Typography>
                    </Box>
                  </Box>
                  {

                  }
                  <Box className={e.status == 'Pending' ? 'pending-status' : (e.status == 'Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: "30px", color: 'white', width: 110, height: "4vh", marginLeft: "10%" }}>
                    <Typography sx={{ textAlign: "center" }}>{e.status}</Typography>
                  </Box>
                </Grid>
              ) : null
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <Button onClick={() => props.setDrawer(true)}>do</Button>
      
    </Box>

  )
}