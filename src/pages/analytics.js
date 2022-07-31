import React from 'react'
import Head from 'next/head'
import {Box, Typography} from "@mui/material";
import { DashboardLayout } from '../components/dashboard-layout';

const Analytics=()=> (
  <>
    <Head>
        <title>
            Analytics | 
        </title>
    </Head>
    <Box>
        <Typography variant="h1">Analytics</Typography>
    </Box>
    
  </>
);
Analytics.getLayout = (page)=>(
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Analytics