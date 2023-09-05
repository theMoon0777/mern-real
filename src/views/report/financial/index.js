import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const single_table = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow
                        key="100001"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
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
                    <TableRow
                        key="100002"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
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
                    <TableRow
                        key="100003"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
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
                    <TableRow
                        key="100004"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
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
                    <TableRow
                        key="100005"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
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

const climate_risk = () => {
    return (
        <div className="climate-risk-header">
            <span>Tax Information</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="128" cy="180" r="12"></circle>
                <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
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
            </AccordionItemsDirective>
        </AccordionComponent>
    )
}

export const Financial = () => {
    return (
        <div className='report-content-content'>
            <div className="report-content-content-header" id="item-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256" >
                    <rect width="256" height="256" fill="none"></rect><path d="M88,216a24,24,0,0,0,17.9-40h112A24,24,0,0,1,200,216Z" opacity="0.2"></path>
                    <path d="M200,176V64a23.9,23.9,0,0,0-24-24H40" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    <line x1="104" y1="104" x2="168" y2="104" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="104" y1="136" x2="168" y2="136" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <path d="M22.1,80A24,24,0,1,1,64,64V192a24,24,0,1,0,41.9-16h112A24,24,0,0,1,200,216H88" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
                <span>Financial</span>
            </div>
            <div className="permit-accordian-div" id="item-8-1">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Liens" content={childcomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" id="item-8-2">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Loan & Transaction History" content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" id="item-8-3">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header={climate_risk} content={childcomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" id="item-8-4">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header="Tax History" content={single_table} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
        </div>
    )
}