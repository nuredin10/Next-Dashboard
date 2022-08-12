import React, {useState,useEffect} from 'react'
import Head from "next/head";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Sales } from "../components/finance/sales";
import { Cost } from "../components/finance/cost";
import { Profit } from "../components/finance/profit";
// import styles from '../styles/Home.module.css';
import OrdersToolBar from "src/components/order/order-toolbar";
import { OrderResults } from "src/components/order/order-results";
import RightDrawer from 'src/components/order/RightDrawer';
const Finance = () => {

  const [drawer, setDrawer] = useState(false)

  return (
    <>
      <Head>
        <title>Orders | Material Kit</title>
      </Head>
      <Box component="main"

      >
        <Container maxWidth={false}>
          <Typography variant="h1">Orders</Typography>
          <Box>
            <OrdersToolBar>


            </OrdersToolBar>
            <OrderResults drawer={drawer} setDrawer={setDrawer}/>
            <RightDrawer drawer={drawer} setDrawer={setDrawer}/>
            {/* <Divider sx={{ borderColor: 'gray', mt: 3}} /> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Finance;
