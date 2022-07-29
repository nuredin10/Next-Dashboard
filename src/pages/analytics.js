import Head from 'next/head';
import { Box, Container,Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';


const Analytics = () => (
  <>
    <Head>
      <title>
         Analytics | Material Kit
      </title>
    </Head>
    <Box>
      <Container maxWidth={false}>
        <Typography variant='h1'>Analytics</Typography>
      </Container>
    </Box>
  </>
);
Analytics.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Analytics;
