import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Container, Typography, Grid, Divider, Button } from "@mui/material";
import { ButtonGroup } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';

const RightDrawer = (props) => {

  return (
    <Box>
      {/* <h1>asdc</h1> */}
      <Drawer variant={"persistent"} open={props.drawer} onClose={() => props.setDrawer(false)} anchor={'right'}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25vw', minHeight: '93vh', height: 'auto', marginTop: '7vh', border: 1 }}>
          <Box className='header' sx={{paddingLeft: '5%',paddingRight: '5%', width: '100%' ,height: '8vh', display: 'flex', alignItems: 'center',justifyContent: 'space-between', backgroundColor: 'rgb(80, 72, 229)'}}>
            <Typography variant='h5' color="white">101</Typography>
            <Button onClick={() => props.setDrawer(() => (false))} sx={{color: 'black'}}>Close</Button>
          </Box>

          <Box className='action' sx={{ display: 'flex', alignItems: 'center' ,justifyContent: 'space-around', width: '90%', height: '8vh', marginTop: '8%', backgroundColor: 'rgb(243, 244, 246)', borderRadius: '10px'}}>
            <Typography variant="subtitle2" >ACTION</Typography>
            <Box sx={{width: '60%', display: 'flex', justifyContent:'space-evenly'}}>
              <Button size='small' variant='contained'>Approve</Button>
              <Button size='small'variant="outlined">Reject</Button>
              <Button size='small'><EditIcon/>Edit</Button>
            </Box>
          </Box>

          <Box>
            
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default RightDrawer