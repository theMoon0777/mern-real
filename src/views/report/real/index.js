// material-ui
import { Grid } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// import These Component
import { ReportHeader } from "../reportheader";
import { ReportValuation } from "../reportvaluation";
import { ReportPermits } from "../reportpermits";
import { Zoning } from "../zoning";
import { Environmental } from "../environmental";
import { Hazardous } from "../hazardous";
import { Long } from "../long";
import { Financial } from "../financial";
import { Owner } from "../owner";
import { Neighburhood } from "../neighburhood";
import { MarketTrends } from '../markettrends';
import { Crime } from '../crime';
import { ReportDemographics } from '../reportdemographics';
import { Building } from "../building";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// import custom css
import "./index.css";
import { useState } from 'react';

const RealReport = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={gridSpacing}>
      <div className='report-container'>
        <div className='report-content'  >
          <div data-spy="scroll" data-target="#navbar-example3" data-offset="0" className="report-content-left">
            <div className='print-div'>
              <span>Back</span>
              <button className='print-btn' onClick={handleClickOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4D4D4D" viewBox="0 0 256 256">
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline points="64 80 64 40 192 40 192 80" fill="none" stroke="#4D4D4D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                  <rect x="64" y="152" width="128" height="68" fill="none" stroke="#4D4D4D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                  <path d="M64,176H28V96c0-8.8,7.8-16,17.3-16H210.7c9.5,0,17.3,7.2,17.3,16v80H192" fill="none" stroke="#4D4D4D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                  <circle cx="188" cy="116" r="12"></circle>
                </svg>
              </button>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle sx={{ m: 0, p: 2, fontSize: 24 }} id="customized-dialog-title">
                  Print Your Real Report™
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id='valuation' type="checkbox" />
                    <label className="checkbox-label" htmlFor='valuation'>Property Valuation</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id='permits' type="checkbox" />
                    <label className="checkbox-label" htmlFor='permits'>Permits</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="zoning" type="checkbox" />
                    <label className="checkbox-label" htmlFor='zoning'>Zoning</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="environmental" type="checkbox" />
                    <label className="checkbox-label" htmlFor="environmental">Environmental</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="hazardous" type="checkbox" />
                    <label className="checkbox-label" htmlFor="hazardous">Hazardous Materials</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="longterm" type="checkbox" />
                    <label className="checkbox-label" htmlFor='longterm'>Long-Term Rental</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id='financial' type="checkbox" />
                    <label className="checkbox-label" htmlFor='financial'>Financial</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="ownership" type="checkbox" />
                    <label className="checkbox-label" htmlFor='ownership'>Ownership</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="neighborhood" type="checkbox" />
                    <label className="checkbox-label" htmlFor="neighborhood">Neighborhood</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="building" type="checkbox" />
                    <label className="checkbox-label" htmlFor="building">Building & Site</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="demographics" type="checkbox" />
                    <label className="checkbox-label" htmlFor="demographics">Demographics</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="crime" type="checkbox" />
                    <label className="checkbox-label" htmlFor='crime'>Crime</label>
                  </div>
                  <div className='dialog-part'>
                    <input className="checkbox-input" id="market" type="checkbox" />
                    <label className="checkbox-label" htmlFor='market'>Market Trends</label>
                  </div>

                </DialogContent>
                <DialogActions>
                  <Button id="print-btn-modal" autoFocus onClick={handleClose}>
                    Print
                  </Button>
                </DialogActions>
              </BootstrapDialog>
            </div>
            <ReportHeader />
            <ReportValuation />
            <ReportPermits />
            <Zoning />
            <Environmental />
            <Hazardous />
            <Long />
            <Financial />
            <Owner />
            <Neighburhood />
            <Building />
            <ReportDemographics />
            <Crime />
            <MarketTrends />
          </div>

          <div className='report-content-right'>
            <nav id="navbar-example3" className="navbar navbar-light bg-light">
              <nav className="nav nav-pills flex-column">

                <a className="nav-link" href="#item-2">Property Valuation</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-2-1">Valuations</a>
                  <a className="nav-link ml-3 my-1" href="#item-2-2">Valuation Insights</a>
                </nav>

                <a className="nav-link" href="#item-3">Permits</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-3-1">PermitHistory</a>
                </nav>

                <a className="nav-link" href="#item-4">Zoning</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-4-1">Zoning Uses</a>
                  <a className="nav-link ml-3 my-1" href="#item-4-2">Zoning Information</a>
                </nav>

                <a className="nav-link" href="#item-5">Environmental</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-5-1">Climate Risk</a>
                  <a className="nav-link ml-3 my-1" href="#item-5-2">FEMA FLOOD Map</a>
                  <a className="nav-link ml-3 my-1" href="#item-5-3">FLOOD Data</a>
                  <a className="nav-link ml-3 my-1" href="#item-5-4">Average Daily Weather</a>
                </nav>

                <a className="nav-link" href="#item-6">Hazardous Materials</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-6-1">Radon & Air Quality</a>
                  <a className="nav-link ml-3 my-1" href="#item-6-2">Environmental Ratings</a>
                  <a className="nav-link ml-3 my-1" href="#item-6-3">Nearby Facilities</a>
                </nav>

                <a className="nav-link" href="#item-7">Long-Term Rental</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-7-1">Rental Potential</a>
                  <a className="nav-link ml-3 my-1" href="#item-7-2">Rental Trends</a>
                  <a className="nav-link ml-3 my-1" href="#item-7-3">Comparable Listings</a>
                </nav>

                <a className="nav-link" href="#item-8">Financial</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-8-1">Liens</a>
                  <a className="nav-link ml-3 my-1" href="#item-8-2">Loan & Transaction History</a>
                  <a className="nav-link ml-3 my-1" href="#item-8-3">Tax Information</a>
                  <a className="nav-link ml-3 my-1" href="#item-8-4">Tax History</a>
                </nav>

                <a className="nav-link" href="#item-9">Ownership</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-9-1">Current Owner</a>
                  <a className="nav-link ml-3 my-1" href="#item-9-2">Previous Sales</a>
                  <a className="nav-link ml-3 my-1" href="#item-9-3">HOA Information</a>
                </nav>

                <a className="nav-link" href="#item-10">Neighborhood</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-10-1">School Information</a>
                  <a className="nav-link ml-3 my-1" href="#item-10-2">Nearby Schools</a>
                  <a className="nav-link ml-3 my-1" href="#item-10-3">Neighborhood Scores</a>
                </nav>

                <a className="nav-link" href="#item-11">Building & Site</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-11-1">Property Characteristics</a>
                  <a className="nav-link ml-3 my-1" href="#item-11-2">Site Information</a>
                  <a className="nav-link ml-3 my-1" href="#item-11-3">Location Information</a>
                </nav>

                <a className="nav-link" href="#item-12">Demographics</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-12-1">Demographics</a>
                </nav>

                <a className="nav-link" href="#item-13">Crime</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-13-1">Arrests by Offense</a>
                  <a className="nav-link ml-3 my-1" href="#item-13-2">Violent Crimes</a>
                </nav>

                <a className="nav-link" href="#item-14">Market Trends</a>
                <nav className="nav nav-pills flex-column">
                  <a className="nav-link ml-3 my-1" href="#item-14-1">Snapshot (Last 30 days)</a>
                  <a className="nav-link ml-3 my-1" href="#item-14-2">Sales (Last 6 Months)</a>
                  <a className="nav-link ml-3 my-1" href="#item-14-3">Listings (Last 6 Months)</a>
                  <a className="nav-link ml-3 my-1" href="#item-14-4">Home vs Recently Sold Properties</a>
                </nav>

              </nav>
            </nav>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default RealReport;
