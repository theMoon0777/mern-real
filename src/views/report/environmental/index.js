import "./index.css";

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const tr1 = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                        key="100000"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <div className="radio-div"></div>
                        </TableCell>
                        <TableCell align="left">
                            <p className="mb-xs">$1,099.355</p>
                            <p className="mb-xs font-size-xs">Min</p>
                        </TableCell>
                        <TableCell className="hidden-th" align="left">
                            <p className="mb-xs">$1,185,754</p>
                            <p className="mb-xs font-size-xs">Max</p>
                        </TableCell>
                        <TableCell className="hidden-th" align="left">
                            <p className="mb-xs">98</p>
                            <p className="mb-xs font-size-xs">Confidence</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    )
}
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
const tablecomp = () => {
    return (
        <AccordionComponent>
            <AccordionItemsDirective>
                <AccordionItemDirective header={tr1} content={childcomp} />
            </AccordionItemsDirective>
        </AccordionComponent>
    )
}

const climate_risk = () => {
    return (
        <div className="climate-risk-header">
            <span>Climate Risk</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="128" cy="180" r="12"></circle>
                <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
        </div>
    )
}

const climatecomp = () => {
    const pieParams = { height: 200, margin: { right: 5 } };
    // const palette = ['red', 'blue', 'green'];
    return (
        <div className="climate-div">
            <div className="risk-div">
                <div className="lx align-center c-g-s">
                    <span className="overal-span">Overall Risk</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                        <rect width="256" height="256" fill="none"></rect>
                        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                        <circle cx="128" cy="180" r="12"></circle>
                        <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    </svg>
                </div>
                <div className="lx align-center">
                    <div className="radio-div">

                    </div>
                    <span className="relative-span">Relatively Low</span>
                </div>
            </div>
            <div className="summary-div">
                <span className="summary-duv-p">Hazard Summary</span>
                <div>
                    <PieChart
                        id="climate-pie"
                        series={[{
                            data: [{ value: 10 }, { value: 15 }, { value: 20 }],
                            innerRadius: 15,
                            outerRadius: 60,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: -90,
                            endAngle: 180,
                            cx: 70,
                            cy: 70,
                        }]}
                        {...pieParams}
                    />
                </div>
            </div>
        </div>
    )
}
const flood_map = () => {
    return (
        <div className="flood-map-div">

        </div>
    )
}

const whether = () => {
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
    return (
        <LineChart
            width={500}
            height={300}
            series={[
                { data: pData, label: 'pv', yAxisKey: 'leftAxisId' },
                { data: uData, label: 'uv', yAxisKey: 'rightAxisId' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
            rightAxis="rightAxisId"
        />
    )
}

export const Environmental = () => {

    return (
        <div className="report-content-content">
            <div className="report-content-content-header" id="item-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z" opacity="0.2"></path>
                    <path d="M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z" opacity="0.2"></path>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <path d="M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    <path d="M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    <path d="M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
                <span>Environmental Factors</span>
            </div>
            <div className="permit-accordian-div" id="item-5-1">
                <AccordionComponent id="env-parent">
                    <AccordionItemsDirective id="env-child">
                        <AccordionItemDirective header='Climate Risk Summaries' id="env-strict-part" content={climatecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" >
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header={climate_risk} content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>

            <div className="permit-accordian-div" id="item-5-2">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="FEMA FLOOD MAP" content={flood_map} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>

            <div className="permit-accordian-div" id="item-5-3">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Flood Data Details" content={childcomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>

            <div className="permit-accordian-div" id="item-5-4">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Average Daily Weather" content={whether} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>

            <div className="font-size-xs gray-dark mt-s mb-s">
                Source(s): Zoneomics
            </div>
        </div>
    );
};
