import React from 'react'
import { Box, Container, Typography, Grid,Divider, Avatar } from "@mui/material";
import { flexbox } from '@mui/system';

export const OrderResults =()=>{
  const data =[
    {
      Date: "AUG 9",
      OrderNumber: 101,
      Total: "$500.00",
      status: "pending"
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
  ]

  return(
    <Box sx={{mt: 3}}>
      <Grid container>
        {data.map((e,i) =>(
          <Grid item sx={{display: "flex", justifyContent: "space-between"}} lg={12}>
              <Container sx={{}}>
                <Avatar 
                  sx={{
                    height: 56,
                    width: 56
                  }}
                >
                  {e.Date}
                </Avatar>
                <Container>
                  
                </Container>
              </Container>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}