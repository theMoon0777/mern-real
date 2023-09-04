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

const gradient = (a, b) => {
  return (b.y - a.y) / (b.x - a.x);
}

const bzCurve = (ctx, color, width, points, f, t) => {


  ctx.setLineDash([0]);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  if (typeof (f) == 'undefined') f = 0.3;
  if (typeof (t) == 'undefined') t = 0.6;

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  var m = 0;
  var dx1 = 0;
  var dy1 = 0;

  var preP = points[0];

  for (var i = 1; i < points.length; i++) {
    var curP = points[i];
    var nexP = points[i + 1];
    if (nexP) {
      m = gradient(preP, nexP);
      var dx2 = (nexP.x - curP.x) * -f;
      var dy2 = dx2 * m * t;
    } else {
      dx2 = 0;
      dy2 = 0;
    }

    ctx.bezierCurveTo(
      preP.x - dx1, preP.y - dy1,
      curP.x + dx2, curP.y + dy2,
      curP.x, curP.y
    );

    dx1 = dx2;
    dy1 = dy2;
    preP = curP;
  }
  ctx.stroke();
}

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
        <div className='parent-spec-div'>
          <div className="color-spec font-weight-normal value-price-big">
            $992,4469.
            <span className="value-price-small">03</span>
          </div>
          <div>
            <span></span>
            <span className="color-green font-weight-normal value-day">$299.62/day</span>
          </div>
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
        <button className="big-accuracy-btn">Plunk Home Value™</button>
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

  useEffect(() => {

    var cv = document.querySelector('#my-canvas');
    var ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, cv.width, cv.height);

    var cv1 = document.querySelector('#my-canvas1');
    var ctx1 = cv1.getContext('2d');
    ctx1.clearRect(0, 0, cv1.width, cv1.height);

    var cv2 = document.querySelector('#my-canvas2');
    var ctx2 = cv2.getContext('2d');
    ctx2.clearRect(0, 0, cv2.width, cv2.height);

    var lines = [];
    var X = 10;
    var t = 40; // control the width of X.
    var lines1 = [];
    var X1 = 10;
    var t1 = 40; // control the width of X.

    for (var i = 0; i < 200; i++) {
      var Y = Math.floor((Math.random() * 39));
      var p = { x: X, y: Y };
      lines.push(p);
      X = X + t;
    }
    for (i = 0; i < 200; i++) {
      var Y1 = Math.floor((Math.random() * 39));
      var p1 = { x: X1, y: Y1 };
      lines1.push(p1);
      X1 = X1 + t1;
    }
    bzCurve(ctx, "blue", 3, lines, 0.3, 0.3);
    bzCurve(ctx, "gray", 1, lines1, 0.3, 0.3);

    bzCurve(ctx1, "blue", 3, lines, 0.3, 0.3);
    bzCurve(ctx1, "gray", 1, lines1, 0.3, 0.3);

    bzCurve(ctx2, "blue", 3, lines, 0.3, 0.3);
    bzCurve(ctx2, "gray", 1, lines1, 0.3, 0.3);
  }, [])

  return (
    <div className="plunk-comp">
      <div className='plunk-comp-header color-lightspec'>
        Plunk Market Insights™
      </div>
      <div className="plunk-comp-des market-insight-des">
        Tracks ZIP code-level market insights through key housing metrics
      </div>
      <div className="plunk-comp-main lx lx-col align-center h-313">
        <div className="lx space-between w-100 lx-col">
          <span className="font-size-normal">Plunk Market Insights™</span>
          <span className="font-size-s">for 98115 - August 2nd , 2023</span>
        </div>
        <div className="chart-container">
          <div className="lx">
            <span>Sale vs. list price</span>
            <span>!</span>
          </div>
          <div className="lx align-center canvas-status-div">
            <span className='color-blue'>o</span>
            <span>Actual</span>
            <div className='gray-radio-div'></div>
            <span>90day average</span>
          </div>
          <div className="linechart-container-custom lx align-center">
            <div className='canvas-start-pro-div'>
              98.3%
            </div>
            <div className="canvas-part">
              <canvas id="my-canvas" width="150" height="40">

              </canvas>
            </div>
            <div className='canvas-end-pro-div lx lx-col align-center'>
              <div className='end-pro-span'>
                103.1%
              </div>
              <div className='color-red'>
                2.1% <span className='color-gray font-size-xs'>7d</span>
              </div>
            </div>
          </div>

        </div>
        <div className="chart-container">
          <div className="lx">
            <span>Sale vs. list price</span>
            <span>!</span>
          </div>
          <div className="lx align-center canvas-status-div">
            <span className='color-blue'>o</span>
            <span>Actual</span>
            <div className='gray-radio-div'></div>
            <span>90day average</span>
          </div>
          <div className="linechart-container-custom lx align-center">
            <div className='canvas-start-pro-div'>
              98.3%
            </div>
            <div className="canvas-part">
              <canvas id="my-canvas1" width="150" height="40">

              </canvas>
            </div>
            <div className='canvas-end-pro-div lx lx-col align-center'>
              <div className='end-pro-span'>
                103.1%
              </div>
              <div className='color-red'>
                2.1% <span className='color-gray font-size-xs'>7d</span>
              </div>
            </div>
          </div>

        </div>
        <div className="chart-container">
          <div className="lx">
            <span>Sale vs. list price</span>
            <span>!</span>
          </div>
          <div className="lx align-center canvas-status-div">
            <span className='color-blue'>o</span>
            <span>Actual</span>
            <div className='gray-radio-div'></div>
            <span>90day average</span>
          </div>
          <div className="linechart-container-custom lx align-center">
            <div className='canvas-start-pro-div'>
              98.3%
            </div>
            <div className="canvas-part">
              <canvas id="my-canvas2" width="150" height="40">

              </canvas>
            </div>
            <div className='canvas-end-pro-div lx lx-col align-center'>
              <div className='end-pro-span'>
                103.1%
              </div>
              <div className='color-red'>
                2.1% <span className='color-gray font-size-xs'>7d</span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div>
        <button className="big-accuracy-btn font-size-22 market-insight-btn">Plunk Market Insights™</button>
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
      <div className="plunk-comp-main plunk-comp-main1 lx lx-col h-328 over-hidden">
        <div className='lx lx-col'>
          <span className='compare-91436'>Home Comparred to 91436</span>
          <span>September 2th, 2023</span>
        </div>
        <div className='lx end column-gap-small'>
          <div className='lx align-center compare-home-group-part'>
            <div className="check-div bg-gray"></div>
            <span>In 91436</span>
          </div>
          <div className='lx align-center compare-home-group-part'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#007bff">
                <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm6 17h-4v-6h-4v6H6v-9.586L12 4.828l6 6V19z" />
              </svg>
            </div>
            <span>this home</span>
          </div>
        </div>
        <div className='font-weight-bold font-size-normal'>Numbers Of Bathrooms</div>
        <div className='lx lx-col bedroom-group bb-gray pb-10'>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>1</span>
            <div style={{ "width": "10px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>
            </div>
            <span className='hidden-span'>1%(64)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>2</span>
            <div style={{ "width": "50px", "backgroundColor": "#64a0ff", "border": "1px solid #3880dc", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#007bff">
                  <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm6 17h-4v-6h-4v6H6v-9.586L12 4.828l6 6V19z" />
                </svg>
              </div>
            </span>
            <span className='hidden-span'>19%(822)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>3</span>
            <div style={{ "width": "100px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span className='hidden-span'>35%(1,601)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>4</span>
            <div style={{ "width": "80px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span className='hidden-span'>25%(1,106)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>5|more</span>
            <div style={{ "width": "65px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span className='hidden-span'>20%(606)</span>
          </div>
        </div>
        <div className='font-weight-bold font-size-normal'>Numbers Of Bedroom</div>
        <div className='lx lx-col bedroom-group'>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>1</span>
            <div style={{ "width": "10px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>
            </div>
            <span>1%(64)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>2</span>
            <div style={{ "width": "50px", "backgroundColor": "#64a0ff", "border": "1px solid #3880dc", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#007bff">
                  <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm6 17h-4v-6h-4v6H6v-9.586L12 4.828l6 6V19z" />
                </svg>
              </div>
            </span>
            <span>19%(822)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>3</span>
            <div style={{ "width": "100px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span>35%(1,601)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>4</span>
            <div style={{ "width": "80px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span>25%(1,106)</span>
          </div>
          <div className='lx'>
            <span style={{ "width": "50px", "textAlign": "right" }}>5|more</span>
            <div style={{ "width": "65px", "backgroundColor": "#eeeeee", "border": "1px solid lightgray", "height": "20px", "margin": "0px 5px 0px 5px" }}>

            </div>
            <span>20%(606)</span>
          </div>
        </div>
      </div>
      <div>
        <button className="big-accuracy-btn">Home Compare</button>
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
        <button className="big-accuracy-btn remodel-btn">Plunk Remodel Value</button>
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
      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): Zoneomics</div>
    </div>
  );
};
