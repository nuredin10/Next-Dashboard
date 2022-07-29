import { useState } from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Doughnut, Bar,LineElement,BubbleController,RadarController,TimeScale} from 'react-chartjs-2';
import { Pie } from "react-chartjs-2";
import { UserData } from '../__mocks__/Data';
// import Grid from '@mui/material/Grid';

const Analytics = () => {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "gray",
        borderWidth: 2,
      },
    ],
  });


  return (

    <>
      <Head>
        <title>
          Analytics | Material Kit
        </title>
      </Head>
      <Box>
        <Container maxWidth={false}>
          <Typography variant='h1'>Analytics</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Doughnut data={userData} width="10" />
            </Grid>
            <Grid item xs={6}>
              <Bar data={userData} />
            </Grid>
            {/* <Grid item xs={6}>
              <ArcElement data={userData} width="10" />
            </Grid> */}
            {/* <Grid item xs={6}>
              <LineElement data={userData} />
            </Grid>
            <Grid item xs={6}>
              <BubbleController data={userData} width="10" />
            </Grid>
            <Grid item xs={6}>
              <RadarController data={userData} />
            </Grid>
            <Grid item xs={8}>
              <TimeScale data={userData} />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
Analytics.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Analytics;
