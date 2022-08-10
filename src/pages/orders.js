import Head from "next/head";
import { Box, Container, Typography, Grid,Divider } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { Sales } from "../components/finance/sales";
import { Cost } from "../components/finance/cost";
import { Profit } from "../components/finance/profit";
// import styles from '../styles/Home.module.css';
import OrdersToolBar from "src/components/order/order-toolbar";
import { OrderResults } from "src/components/order/order-results";
const Finance = () => {
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
            <OrdersToolBar></OrdersToolBar>
            <OrderResults/>
            {/* <Divider sx={{ borderColor: 'gray', mt: 3}} /> */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

Finance.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Finance;
