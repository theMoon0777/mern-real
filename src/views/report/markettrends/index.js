import * as React from 'react';

import logo from "./logo.png";

//redux part
import { useDispatch, useSelector } from 'react-redux';

import { setValue } from '../../../store/slice/homeslice';

import './index.css';

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
// import { HomeCompareChart } from './homeCompareChart';
import { useEffect } from 'react';
import axios from 'axios';
import { LineChart } from '@mui/x-charts/LineChart';
import { HomeCompareChart } from './homeCompareChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];


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

    <div className="plunk-comp">
      <div className='plunk-comp-header'>
        Plunk Home Value™
      </div>
      <div className="plunk-comp-des">
        Delivers real-time valuation for 104+ million homes nationwide
      </div>
      <div className="plunk-comp-main lx lx-col align-center">
        <div className="lx space-between w-100">
          <span className="plunk-value-title">Plunk Home Value™</span>
          <div>
            <img alt="Free Cycle Refresh Turn Icon" loading="lazy" src="https://cdn.iconscout.com/icon/free/png-256/free-refresh-1754122-1493235.png?f=webp&amp;w=128" srcSet="https://cdn.iconscout.com/icon/free/png-256/free-refresh-1754122-1493235.png?f=webp&amp;w=128 1x, https://cdn.iconscout.com/icon/free/png-256/free-refresh-1754122-1493235.png?f=webp&amp;w=256 2x" className="thumb_p6OvR" />
          </div>
        </div>
        <div className="color-spec font-weight-normal value-price-big">
          $992,4469.
          <span className="value-price-small">03</span>
        </div>
        <div>
          <span></span>
          <span className="color-green font-weight-normal value-day">$299.62/day</span>
        </div>
        <div>
          <button className="accuracy-btn bgcolor-lightblue">Improve accuracy -</button>
        </div>
        <div>
          <span className="small-size-span">powered by</span>
          <span><img className="small-logo" src={logo} alt="loading" /> </span>
        </div>
      </div>
      <div>
        <button className="big-accuracy-btn">Plunk Home Value™ API</button>
      </div>
    </div>
  );
};
const plunkParent = () => {
  return (
    <div className="plunk-parent">
      <PlunkHomeValue />
      <PlunkMarketInsight />
      <PlunkHomeCompare />
      <PlunkRemodelValue />
    </div>
  )
}
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
    <div className="plunk-comp">
      <div className='plunk-comp-header color-lightspec'>
        Plunk Market Insights™
      </div>
      <div className="plunk-comp-des market-insight-des">
        Tracks ZIP code-level market insights through key housing metrics
      </div>
      <div className="plunk-comp-main lx lx-col align-center h-335">
        <div className="lx space-between w-100 lx-col">
          <span className="font-size-normal">Plunk Market Insights™</span>
          <span className="font-size-s">for 98115 - August 2nd , 2023</span>
        </div>
        <div className="chart-container">
          <div className="lx">
            <span>Sale vs. list price</span>
            <span>!</span>
          </div>
          <div className="lx">
            <span>o</span>
            <span>Actual</span>
            <div></div>
            <span>90day average</span>
          </div>
          <div>
            <span>103.21%</span>
            <LineChart
              width={500}
              height={300}
              series={[
                { data: pData, label: 'pv' },
                { data: uData, label: 'uv' },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
          </div>

        </div>
      </div>
      <div>
        <button className="big-accuracy-btn font-size-22 market-insight-btn">Plunk Market Insights™ API</button>
      </div>
    </div>
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
    <div className="plunk-comp">
      <div className='plunk-comp-header color-lightspec'>
        Home Compare
      </div>
      <div className="plunk-comp-des">
        Provides statitic on how a home compares against others in the neightborhood
      </div>
      <div className="plunk-comp-main lx lx-col align-center">
        <div className='lx lx-col'>
          <span>Home COmparred to 91436</span>
          <span>September 2th, 2023</span>
        </div>
        <div className='lx'>
          <div className='lx'>
            <div className="check-div bg-gray"></div>
            <span>In 91436</span>
          </div>
          <div>
            <div className="check-div bg-blue"></div>
            <span>this home</span>
          </div>
        </div>
        <div>Numbers Of Bathrooms</div>
        <div>
          <HomeCompareChart />
        </div>
      </div>
      <div>
        <button className="big-accuracy-btn">Home Compare API</button>
      </div>
    </div>
  );
};
const PlunkRemodelValue = () => {
  return (
    <div className="plunk-comp">
      <div className='plunk-comp-header color-lightspec'>
        Plunk Remodel Value™
      </div>
      <div className="plunk-comp-des remodel-des">
        Introduces a new metric that uncovers a homes upside or potential value with certain upgrades
      </div>
      <div className="plunk-comp-main lx lx-col align-center">
        <div className="lx space-between w-100">
          <span className="font-size-normal">Plunk Remodel Value™</span>
        </div>
        <div className='lx'>
          <div className='lx lx-col lx-2'>
            <div className="remodel-comp lx lx-col lx-2">
              <span>Plunk Remodel Value™</span>
              <span className='remodel-comp-price'>$22,675,3</span>
              <span>$299.63/day</span>
            </div>
            <span className='bar-next-div-span right'>
              -Remodel upside
              <span className='bar-next-div-span'>&821,090</span>
            </span>
            <span className='bar-next-div-span right'>-Plunk Home Value™<span className='bar-next-div-span'>$1,446,700</span></span>
          </div>
          <div>
            <div className='lx lx-col lx-1 align-center'>
              <div className='remodel-bar-parent'>
              </div>
              <div className='remodel-bar-part'>
              </div>
              <div className='remodel-bar-part'>
              </div>
              <div className='remodel-bar-part'>
              </div>
              <div className='remodel-bar-parent'></div>
            </div>
          </div>

          <div className="lx lx-2 lx-col bar-next-div">
            <span className="bar-next-div-span">- Expaned first floor</span>
            <span className="bar-next-div-span">- Remodel kitchen to luxury grade</span>
            <span className="bar-next-div-span">- Add a full bath(+sqf)</span>
            <span className="bar-next-div-span">- +2more projects</span>
          </div>
        </div>
        <div>
          <span className="small-size-span">powered by</span>
          <span><img className="small-logo" src={logo} alt="loading" /> </span>
        </div>
      </div>
      <div>
        <button className="big-accuracy-btn remodel-btn">Plunk Remodel Value API</button>
      </div>
    </div>
  );
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
            <AccordionItemDirective header="Plunk Home Value™" id="plunks-container" content={plunkParent} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      {/* <div className="permit-accordian-div" id="item-14-2">
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
      </div> */}
      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): Zoneomics</div>
    </div>
  );
};
