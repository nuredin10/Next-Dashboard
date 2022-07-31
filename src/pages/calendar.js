import React from 'react'
import Head from 'next/head'
import {Box, Typography} from "@mui/material";
import { DashboardLayout } from '../components/dashboard-layout';
// import Scheduler from "react-mui-scheduler"
import {
    Scheduler,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
    AgendaView,
  } from "@progress/kendo-react-scheduler";

const Calendar=()=> (
  <>
    <Head>
        <title>
            Calendar | 
        </title>
    </Head>
    <Box>
        <Typography variant="h1">Calendar</Typography>
        {/* <Scheduler></Scheduler> */}
    </Box>
    
  </>
);
Calendar.getLayout = (page)=>(
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Calendar