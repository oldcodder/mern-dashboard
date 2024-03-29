import { Box, Typography, Stack, } from '@pankod/refine-mui';
import React from 'react';
// import { PieChartProps } from 'interfaces/home';
import ReactApexChart from 'react-apexcharts';
import { ArrowCircleUpRounded } from '@mui/icons-material';
import { TotalRevenueOptions,TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box 
    p={4} 
    flex="1"
    id="chart"
    display="flex"
    borderRadius="15px"
    bgcolor="#fcfcfc"
    flexDirection="column"
    >
        <Typography 
        fontSize="18px"
        fontWeight={600}
        color="#11142d"
        >
          Total Revenue
        </Typography>
        <Stack my="20px" direction="row" gap={4} flexWrap="wrap" padding="30px">
          <Typography fontSize={28} fontWeight={700} color="#11142d">$236,535</Typography>
       
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{fontSize:25,color:"#475be8",}} />
          <Stack>
            <Typography fontSize={15} color="#475be8">0.8%</Typography>
            <Typography fontSize={12} color="#808191">The Last Month</Typography>
          </Stack>
        </Stack>
        </Stack>
        <ReactApexChart series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
        />
    </Box>
  )
}

export default TotalRevenue;