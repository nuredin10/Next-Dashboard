import React from 'react'
import Drawer from '@mui/material/Drawer';
import { Box, Container, Typography, Grid, Divider, Button } from "@mui/material";

const RightDrawer = (props) => {

  return (
    <Box>
      {/* <h1>asdc</h1> */}
      <Drawer variant={"persistent"} sx={{ width: '20vw' }} open={props.drawer} onClose={() => props.setDrawer(false)} anchor={'right'}>
        <Box sx={{ width: '20vw', height: '100%', backgroundColor: 'blue' }}>
          <h1>Hello</h1>
        </Box>
        <Button onClick={() => props.setDrawer(() => (false))}>Close</Button>
      </Drawer>
    </Box>
  )
}

export default RightDrawer