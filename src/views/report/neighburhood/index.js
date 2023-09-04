import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';

import "./index.css";

const childcomp = () => {
    return (
        <div className="environment-child-div">
            <div className="environment-child-part">
                <div>
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="right">
                    276sdf
                </div>
            </div>
            <div className="environment-child-part">
                <div>
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="right">
                    276sdf
                </div>
            </div>
            <div className="environment-child-part">
                <div>
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="right">
                    276sdf
                </div>
            </div>
            <div className="environment-child-part">
                <div>
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="right">
                    276sdf
                </div>
            </div>
            <div className="environment-child-part">
                <div>
                    <span>Description</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="right">
                    276sdf
                </div>
            </div>
        </div>
    )
}
const tr1 = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                        key="0"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <div className="radio-div"></div>
                        </TableCell>
                        <TableCell align="left">
                            <p className="mb-xs">$1,099.355</p>
                            <p className="mb-xs font-size-xs">Min</p>
                        </TableCell>
                        <TableCell align="left">
                            <p className="mb-xs">$1,185,754</p>
                            <p className="mb-xs font-size-xs">Max</p>
                        </TableCell>
                        <TableCell align="left">
                            <p className="mb-xs">98</p>
                            <p className="mb-xs font-size-xs">Confidence</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tablecomp = () => {
    return (
        <AccordionComponent>
            <AccordionItemsDirective>
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
                <AccordionItemDirective header={tr1} content={childcomp} />
            </AccordionItemsDirective>
        </AccordionComponent>
    )
}

const neigh_spinner = () => {
    return (
        <div className='spinner-parent lx center align-center'>
            <div className='spinner-item lx lx-col align-center'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"></path>
                        <path d="M218.9,77.1a71.9,71.9,0,0,1,0,101.8" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        <path d="M190.6,105.4a31.9,31.9,0,0,1,0,45.2" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </span>
                <h2 className="spinner-h">Noise</h2>
                <h3 className="spinner-h3">Active</h3>
                <ProgressBarComponent id="circular" type='Circular' height='160px' width='90%' trackThickness={24} progressThickness={24} value={71} enableRtl={false} showProgressValue={true} trackColor="#F8C7D8" radius="100%" progressColor="#E3165B" cornerRadius="Round" animation={{
                    enable: true,
                    duration: 500,
                    delay: 0
                }}>
                </ProgressBarComponent>
            </div>
            <div className='spinner-item lx lx-col align-center'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"></path>
                        <path d="M218.9,77.1a71.9,71.9,0,0,1,0,101.8" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        <path d="M190.6,105.4a31.9,31.9,0,0,1,0,45.2" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </span>
                <h2 className="spinner-h">Noise</h2>
                <h3 className="spinner-h3">Active</h3>
                <ProgressBarComponent id="circular1" type='Circular' height='160px' width='90%' trackThickness={24} progressThickness={24} value={71} enableRtl={false} showProgressValue={true} trackColor="#F8C7D8" radius="100%" progressColor="#E3165B" cornerRadius="Round" animation={{
                    enable: true,
                    duration: 500,
                    delay: 0
                }}>
                </ProgressBarComponent>
            </div>
            <div className='spinner-item lx lx-col align-center'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"></rect>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2"></path>
                        <path d="M218.9,77.1a71.9,71.9,0,0,1,0,101.8" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                        <path d="M190.6,105.4a31.9,31.9,0,0,1,0,45.2" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </span>
                <h2 className="spinner-h">Noise</h2>
                <h3 className="spinner-h3">Active</h3>
                <ProgressBarComponent id="circular2" type='Circular' height='160px' width='90%' trackThickness={24} progressThickness={24} value={71} enableRtl={false} showProgressValue={true} trackColor="#F8C7D8" radius="100%" progressColor="#E3165B" cornerRadius="Round" animation={{
                    enable: true,
                    duration: 500,
                    delay: 0
                }}>
                </ProgressBarComponent>
            </div>
        </div>
    )
}

export const Neighburhood = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div className='report-content-content'>
            <div className="report-content-content-header" id="item-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" opacity="0.2"></path>
                    <circle cx="128" cy="104" r="32" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
                <span>Neighborhood</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div className="permit-accordian-div" id="item-10-1">
                <div id="map">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyA52qSFk7awgE8vvAo4U5-P0CUKe6wugk8" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
            <div className="permit-accordian-div" id="item-10-2">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Flood Data Details" content={childcomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" id='item-10-3'>
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Long-Term Rental Listings" content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" >
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Long-Term Rental Listings" content={neigh_spinner} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
        </div>
    )
}