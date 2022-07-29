import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';


const Kanban = () => {

  return (

    <>
      <Head>
        <title>
          kanban | Material Kit
        </title>
      </Head>
      <Box>
        <Container maxWidth={false}>
          <Typography variant='h1'>Kanban</Typography>
        </Container>
      </Box>
    </>
  )
}
Kanban.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Kanban;
