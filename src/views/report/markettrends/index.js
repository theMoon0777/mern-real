import * as React from 'react';
import Box from '@mui/material/Box';

//redux part
import { useDispatch, useSelector } from 'react-redux';

import { setValue } from '../../../store/slice/homeslice';

import './index.css';

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { Button, Typography } from '@mui/material';
// import { PlunkMarketInsightChart } from './plunkMarektInsightChart';
import { HomeCompareChart } from './homeCompareChart';
import { PlunkReModelValueChart } from './plunkRemodelValueChart';
import { useEffect } from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const PlunkHomeValue = () => {
  // const [homeprice ,setHomeprice] = useState("");


  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.home);

  const addressObj = {
    fips: '04013',
    apn: '301-55-105',
    addressLineOne: '11635 S MOHAVE ST',
    aptNum: '',
    city: 'PHOENIX',
    state: 'AZ',
    zipcode: '85044'
  };


  useEffect(() => {
    axios.post('http://localhost:7000/api/home-value', addressObj).then((res) => {
      dispatch(setValue(res.data));
    });
   
  }, [dispatch]);

  useEffect(() => {
    console.log(value);
    // setHomeprice(value.valuation_dollars);
  }, [value]);


  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px',
          marginBottom: '50px'
        }}
      >
        Plunk Home Value™
      </Box>
      <Box
        sx={{
          textAlign: 'center'
        }}
      >
        <Box
          id="numberpart1"
          sx={{
            color: 'black',
            fontSize: '30px',
            marginBottom: '15px'
          }}
        >
          $417722.54
        </Box>
        <Box
          sx={{
            color: 'green',
            fontSize: '20px',
            marginBottom: '20px'
          }}
        >
          $299.62/day
        </Box>
        <Button
          variant="contained"
          sx={{
            marginBottom: '50px'
          }}
        >
          Improve accuracy
        </Button>
        <Box>powered by plunk</Box>
      </Box>
    </Box>
  );
};
const PlunkMarketInsight = () => {
  // const dispatch = useDispatch();

  // const [insightarr, setInsightarr] = useState([]);
  // const { insights } = useSelector(state => state.home?state.home: "");
  // const measure = 'days_of_inventory_count';
  // const region_type = 'zipcode';

  // useEffect(() => {
  //   axios.get('http://localhost:7000/api/market-insights/' + measure + '/' + region_type + '?region_id=85044').then((res) => {
  //     dispatch(setInsight(res.data));
  //   });
  // }, [dispatch]);
  // useEffect(() => {
  //   setInsightarr(!insights.values ? "" : insights.values);
  // }, [insights])

  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px'
        }}
      >
        Plunk Market Insights™
      </Box>
      <Box
        sx={{
          color: 'black',
          fontSize: '15px',
          marginBottom: '50px'
        }}
      >
        for 98115 - August 2nd, 2023
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} id="fixed-high-table" aria-label="simple table">
          <TableBody>
            {/* {
            !insightarr? "" : insightarr.map((data, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="left">
                  <p className="mb-xs">{data.date}</p>
                  <p className="mb-xs font-size-xs">Valuation</p>
                </TableCell>
                <TableCell align="left">
                  <p className="mb-xs">${data.value}</p>
                  <p className="mb-xs font-size-xs">Min</p>
                </TableCell>
            </TableRow>
            ))
            } */}
            <TableRow
              key="0" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
              <TableCell  scope="row">
                <p className="mb-xs">2023-09-01</p>
                <p className="mb-xs font-size-xs">Valuation</p>
              </TableCell>
              <TableCell className="hidden-th" align="left">
                <p className="mb-xs">365</p>
                <p className="mb-xs font-size-xs">Min</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <PlunkMarketInsightChart id="insig"/> */}
    </Box>
  );
};
const PlunkHomeCompare = () => {

  // const addressObj = {
  //   fips: '04013',
  //   apn: '301-55-105',
  //   addressLineOne: '11635 S MOHAVE ST',
  //   aptNum: '',
  //   city: 'PHOENIX',
  //   state: 'AZ',
  //   zipcode: '85044'
  // };
  // const dispatch = useDispatch();

  // // const [homecompares, setHomecompares] = useState([])
  // useEffect(() => {
  //   axios.post('http://localhost:7000/api/home-compare', addressObj).then((res) => {
  //     console.log(res.data);  
  //     dispatch(setCompare(res.data));
  //   });
  // }, [dispatch]);

  return (
    <Box
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px'
        }}
      >
        Home compared to 91436
      </Box>
      <Box
        sx={{
          color: 'black',
          fontSize: '15px',
          marginBottom: '50px'
        }}
      >
        June 19th, 2023
      </Box>
      <HomeCompareChart />
    </Box>
  );
};
const PlunkRemodelValue = () => {
  return (
    <Box
      id="plunk-remodal"
      sx={{
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Box
        sx={{
          color: 'black',
          fontSize: '20px',
          marginBottom: '50px'
        }}
      >
        Plunk Remodel Value™
      </Box>
      <Box
        id="plunk-remodal-container"
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            textAlign: 'right',
            width: '40%',
            marginRight: '20px'
          }}
        >
          <Box
            sx={{
              backgroundColor: 'green',
              borderRadius: 8,
              padding: '10px',
              marginBottom: '30px'
            }}
          >
            <Typography
              sx={{
                color: 'black',
                fontSize: '20px'
              }}
            >
              Plunk Remodel Value™
            </Typography>
            <Typography
              id="numberpart"
              sx={{
                color: 'black',
                fontSize: '30px'
              }}
            >
              $2,267,790
            </Typography>
            <Typography
              sx={{
                color: 'green',
                fontSize: '15px'
              }}
            >
              $299.62 /day
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '15px'
            }}
          >
            Remodel up
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '15px',
              marginBottom: '40px'
            }}
          >
            $821,090
          </Typography>
          <Typography
            sx={{
              color: 'gray',
              fontSize: '15px'
            }}
          >
            Plunk Home Value™
          </Typography>
          <Typography
            sx={{
              color: 'black',
              fontSize: '15px',
              marginBottom: '40px'
            }}
          >
            $1,446,700
          </Typography>

          <Box>powered by plunk</Box>
        </Box>
        <Box
          sx={{
            width: '40%'
          }}
        >
          <PlunkReModelValueChart />
        </Box>
      </Box>
    </Box>
  );
};

const remodal = () => {
  axios.post('http://localhost:7000/api/home-value', addressObj).then((res) => {
    dispatch(setValue(res.data));
  });
};

export const MarketTrends = () => {
  return (
    <div className="report-content-content" id="item-14">
      <div className="report-content-content-header">
        <span>Market Trends - Dover, NH (03820)</span>
      </div>
      <div className="permit-accordian-div" id="item-14-1">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Home Value™" content={PlunkHomeValue} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-2">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Market Insights™" content={PlunkMarketInsight} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-3">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Home Compare" content={PlunkHomeCompare} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="permit-accordian-div" id="item-14-4">
        <AccordionComponent onClick={remodal}>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Plunk Remodel Value™" content={PlunkRemodelValue} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): Zoneomics</div>
    </div>
  );
};
