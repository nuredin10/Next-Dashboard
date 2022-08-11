import React,{useState, useEffect} from 'react'
import { Box, Container, Typography, Grid,Divider, Avatar } from "@mui/material";
import { flexbox } from '@mui/system';

export const OrderResults =()=>{
  const data =[
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


  return(
    <Box sx={{mt: 3}}>
      <Grid container>
        {data.map((e,i) =>(
          
          <Grid item sx={{display: "flex", alignItems: "center", height: "15vh",width: "100%", display: "flex", justifyContent: "space-between", borderTop: 1, borderColor: "rgb(229, 231, 235)"}} lg={12}>
              <Box sx={{display: "flex", alignItems: "center"}}>
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
                  <Typography sx={{fontWeight: "500"}}>{e.Date}</Typography>
                </Box>
                <Box sx={{marginLeft: "20%"}}>
                  <Typography variant='h6'>{e.OrderNumber}</Typography>
                  <Typography variant='body1'>{e.Total}</Typography>
                </Box>
              </Box>
              {
                
              }
              <Box className={e.status == 'Pending' ? 'pending-status' : (e.status=='Complete' ? 'complete-status' : (e.status == 'Rejected' ? 'reject-status' : 'canceld-status'))} sx={{borderRadius: "30px", color: 'white', width: 110, height: "30%", marginLeft: "10%"}}>
                  <Typography sx={{textAlign: "center"}}>{e.status}</Typography>
              </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}