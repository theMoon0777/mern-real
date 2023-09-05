import "./index.css";

import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';

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
                        key="100015"
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <p className="mb-xs">$1,127,300</p>
                            <p className="mb-xs font-size-xs">Valuation</p>
                        </TableCell>
                        <TableCell className="hidden-th" align="left">
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
        <div className="childcomp-div">
            <div className="childcomp-part"><span>Description</span><span>-</span></div>
            <div className="childcomp-part"><span>Bussiness</span><span>Allegro Construction Inc</span></div>
            <div className="childcomp-part"><span>Permit Number</span><span>17-173394-b3</span></div>
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

export const ReportPermits = () => {



    return (
        <div className="report-content-content">
            <div className="report-content-content-header" id="item-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M156,72l76,76V80a8,8,0,0,0-8-8Z" opacity="0.2"></path>
                    <path d="M84,72l88,88H100L24,84V80a8,8,0,0,1,8-8Z" opacity="0.2"></path>
                    <rect x="24" y="72" width="208" height="88" rx="8" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                    <line x1="84" y1="72" x2="172" y2="160" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="156" y1="72" x2="232" y2="148" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="24" y1="84" x2="100" y2="160" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="192" y1="160" x2="192" y2="200" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="64" y1="160" x2="64" y2="200" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                </svg>
                <p className="mb-0">Permits</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div className="permit-accordian-div" id="item-3-1">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header='Permits History' content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>

            <div className="font-size-xs gray-dark mt-s mb-s">
                Source(s): ATTOM Data
            </div>
        </div>
    );
};

