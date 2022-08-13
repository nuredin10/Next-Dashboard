import Head from "next/head";
import { Box, Container, Typography, Grid } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";

// import styles from '../styles/Home.module.css';

const Add = () => {
  return (
    <>
      <Head>
        <title>Add Order| Material Kit</title>
      </Head>
      <Box component="main"

      >
        <h1>Add</h1>
      </Box>
    </>
  );
};

Add.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Add;
