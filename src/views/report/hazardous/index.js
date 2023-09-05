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

const climate_risk = () => {
    return (
        <div className="climate-risk-header">
            <span className="climate-risk-nearby-span">Nearby Hazardous Materials Facilities</span>
            <svg className="hidden-svg-question" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                <circle cx="128" cy="180" r="12"></circle>
                <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
        </div>
    )
}

const radoncomp = () => {
    return (
        <div className="radoncomp-div">
            <div className="radoncomp-child">
                <div className="lx lx-col align-center center r-g-m">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 33" height="24" width="24">
                        <path d="M32 16.7202C32 25.5568 24.8366 32.7202 16 32.7202C7.16344 32.7202 0 25.5568 0 16.7202C0 7.88366 7.16344 0.720215 16 0.720215C24.8366 0.720215 32 7.88366 32 16.7202Z" fill="#5C53C5" fillOpacity="0.2">
                        </path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0997 0.731743C12.1204 0.998752 9.87526 1.69583 7.70383 3.02791C4.19387 5.18114 1.63871 8.57831 0.539273 12.5534C0.171339 13.8836 0.0491565 14.7333 0.0102077 16.232C-0.028048 17.7017 0.0370283 18.5696 0.276889 19.7918C1.42068 25.6198 5.79319 30.4069 11.5019 32.0812C16.036 33.4111 21.0648 32.6379 24.9313 30.0165C27.2854 28.4204 29.256 26.1213 30.4869 23.5346C31.1749 22.089 31.5412 20.9412 31.8392 19.2975C31.9932 18.4485 32.0536 15.9917 31.9445 15.0171C31.6629 12.5012 30.7494 9.97812 29.3907 7.96323C27.7763 5.56912 25.923 3.87738 23.4854 2.5727C21.2382 1.36992 19.0654 0.793888 16.541 0.731673C15.9198 0.716349 15.2712 0.716419 15.0997 0.731743ZM14.448 3.66531C13.1083 3.84044 11.417 4.33449 10.2884 4.88037C8.1909 5.89481 6.29516 7.57878 4.94949 9.62276C4.0922 10.925 3.25238 13.0894 2.9629 14.7426C2.30617 18.4931 3.62274 22.7088 6.36426 25.6341C6.7893 26.0877 7.40825 26.6791 7.7398 26.9483C11.1868 29.7479 15.9878 30.5889 20.2628 29.142C22.7119 28.3131 24.7379 26.8744 26.3599 24.8123C27.0334 23.956 27.3675 23.4188 27.8569 22.4047C29.2968 19.4212 29.5748 16.1947 28.657 13.1184C27.1317 8.00588 22.9348 4.4013 17.677 3.68812C16.867 3.57824 15.2036 3.56651 14.448 3.66531ZM15.0304 5.3276C13.9055 5.44483 12.0808 5.89368 11.4981 6.19656C11.1494 6.37784 11.0107 6.64887 11.0107 7.149C11.0107 7.52066 11.0989 7.72228 12.6096 10.807C13.489 12.6026 14.2384 13.5264 14.2643 13.5259C14.2903 13.5254 14.4986 13.4471 14.7273 13.352C15.0918 13.2005 15.2501 13.1791 16.0094 13.1787C16.8872 13.1783 16.8853 13.1779 17.677 13.5202C17.7588 13.5556 17.8379 13.4585 18.0006 13.1232C18.1192 12.8791 18.8283 11.9532 19.5873 10.3996C20.3463 8.84596 20.9874 7.47158 21.0118 7.34531C21.1374 6.69746 20.7582 6.2335 19.8816 5.96267C18.0816 5.40648 16.3938 5.18552 15.0304 5.3276ZM15.0888 14.9776C14.3928 15.2751 13.8376 15.8792 13.6055 16.5913C13.4386 17.1035 13.4888 17.9869 13.7113 18.4501C13.928 18.9013 14.4238 19.4069 14.9 19.6624C15.2408 19.8452 15.3356 19.8625 16.0006 19.8625C16.655 19.8625 16.7676 19.8428 17.1181 19.6674C17.5481 19.4522 18.06 18.94 18.2757 18.5093C18.607 17.8474 18.607 16.8636 18.2757 16.2017C18.0605 15.7719 17.5706 15.283 17.1287 15.057C16.7918 14.8846 16.6295 14.8488 16.1046 14.831C15.5746 14.8131 15.4219 14.8351 15.0888 14.9776ZM5.48909 17.8284C5.25366 17.875 4.99648 18.1848 4.94741 18.4807C4.89571 18.7926 4.9928 19.4115 5.21957 20.2159C5.76575 22.1532 6.92881 23.9588 8.55045 25.3869C9.44356 26.1734 9.95905 26.4077 10.2634 26.1652C10.3243 26.1166 10.8656 25.3778 11.4663 24.5233C12.0669 23.6688 12.8682 22.5307 13.2471 21.9942C13.6259 21.4577 13.9249 21.0109 13.9114 21.0012C12.7715 20.1834 12.2125 19.4063 11.9368 18.2559L11.8225 17.7792L8.73105 17.7888C7.03082 17.7941 5.57191 17.8119 5.48909 17.8284ZM20.0649 18.2559C19.8708 19.0687 19.5061 19.7265 18.9167 20.3263C18.6279 20.6203 18.316 20.9085 18.2237 20.9669L18.0559 21.0729L18.3783 21.4916C18.5556 21.722 19.3673 22.8479 20.1821 23.9936C20.997 25.1394 21.7426 26.1227 21.839 26.1787C22.2186 26.3991 22.9961 25.9161 24.1262 24.7577C25.4783 23.3718 26.3756 21.8091 26.8518 20.0109C27.098 19.0808 27.1364 18.4401 26.9625 18.1602C26.7392 17.8007 26.5263 17.7792 23.1875 17.7792H20.1787L20.0649 18.2559Z" fill="#5C53C5">
                        </path>
                    </svg>
                    <span className="radoncomp-h">
                        Avg. Radon Levels
                    </span>
                    <span className="radoncomp-des">
                        6.1 pCi/L
                    </span>
                    <div>
                        <span>Radon levels exceed EPA standard</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                            <rect width="256" height="256" fill="none"></rect>
                            <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                            <circle cx="128" cy="180" r="12"></circle>
                            <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="radoncomp-child">
                <div className="lx lx-col align-center center r-g-m">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35" height="24" width="24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.09261 1.75958C6.51641 2.01064 5.27502 3.58517 5.27502 5.33324C5.27502 6.58008 5.70052 7.48453 6.59663 8.14248C7.51835 8.8193 8.40605 9.04809 9.8958 8.99303C11.2491 8.94297 12.4035 8.62689 13.8092 7.92145C15.6294 7.00808 18.1374 6.91342 19.5835 7.70357C20.1529 8.01477 20.6484 8.40362 20.9071 8.74241L21.1219 9.0237L21.4693 8.69511C22.2074 7.99712 22.4286 7.20735 22.1602 6.22903C21.9877 5.60015 21.8347 5.29801 21.43 4.78747C20.7955 3.98692 19.6946 3.27154 18.5919 2.94321C17.8181 2.71287 16.2274 2.65081 15.2867 2.81434C14.6412 2.92652 13.7126 3.21898 13.2344 3.46067L12.947 3.60597L12.5605 3.27257C11.7527 2.5756 11.0011 2.13791 10.1897 1.89185C9.67978 1.73718 8.64357 1.67185 8.09261 1.75958ZM17.891 11.3382C17.8718 11.4882 17.8115 12.1886 17.757 12.8945C17.7025 13.6005 17.6172 14.5535 17.5675 15.0124C17.5178 15.4712 17.4586 16.0488 17.436 16.2959C17.4134 16.543 17.3834 16.8318 17.3694 16.9377C17.2859 17.571 17.0356 19.9941 16.9187 21.3018C16.8997 21.5135 16.8575 21.9323 16.8249 22.2323C16.7922 22.5324 16.7492 22.98 16.7292 23.2271C16.7093 23.4742 16.6654 23.9362 16.6317 24.2539C16.5582 24.9465 16.2798 27.7062 16.1882 28.6501C16.1522 29.0207 16.0662 29.8149 15.9972 30.415C15.928 31.015 15.8266 31.9103 15.7716 32.4045C15.7168 32.8986 15.6592 33.3968 15.6437 33.5115L15.6157 33.7201H21.1702H26.7249L26.6887 33.4473C26.5665 32.5247 26.3726 30.7283 26.2609 29.4844C26.1897 28.6902 26.0735 27.535 26.0029 26.9173C25.8838 25.8761 25.4807 22.0539 25.3971 21.1734C25.3521 20.6998 25.1787 19.0209 25.1385 18.6705C25.1102 18.4235 25.026 17.5558 24.6867 14.0176C24.6004 13.1175 24.4966 12.085 24.4561 11.7233L24.3823 11.0654H21.1541H17.9259L17.891 11.3382Z" fill="#5C53C5" fillOpacity="0.2" stroke="#5C53C5" strokeWidth="2">
                        </path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.25515 16.4743C7.24007 16.5899 7.19273 17.1296 7.14987 17.6735C7.10706 18.2175 7.04005 18.9518 7.00102 19.3054C6.96199 19.659 6.91545 20.104 6.8977 20.2944C6.87991 20.4848 6.85636 20.7074 6.84537 20.7889C6.77977 21.2769 6.58312 23.1441 6.49125 24.1516C6.47638 24.3148 6.4432 24.6375 6.41753 24.8687C6.39187 25.0999 6.35809 25.4448 6.3424 25.6352C6.32672 25.8256 6.29224 26.1816 6.26576 26.4264C6.20803 26.9601 5.9893 29.0865 5.91735 29.8138C5.88906 30.0994 5.82149 30.7113 5.76724 31.1737C5.71293 31.6361 5.63322 32.3259 5.59005 32.7067C5.54694 33.0875 5.50172 33.4713 5.48956 33.5597L5.46753 33.7204H9.83157H14.1957L14.1673 33.5103C14.0712 32.7993 13.9189 31.4151 13.8312 30.4567C13.7752 29.8447 13.6839 28.9546 13.6284 28.4786C13.5348 27.6763 13.2181 24.7311 13.1525 24.0527C13.1171 23.6878 12.9809 22.3941 12.9493 22.1241C12.9271 21.9338 12.8609 21.2652 12.5944 18.5389C12.5265 17.8454 12.445 17.0498 12.4131 16.771L12.3552 16.2642H9.81887H7.28258L7.25515 16.4743Z" fill="#5C53C5" fillOpacity="0.2" stroke="#5C53C5" strokeWidth="2">
                        </path>
                    </svg>
                    <span className="radoncomp-h">
                        Air Quality
                    </span>
                    <span className="radoncomp-des">
                        0/yr
                    </span>
                    <div>
                        <span>Days with poor air quality</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                            <rect width="256" height="256" fill="none"></rect>
                            <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                            <circle cx="128" cy="180" r="12"></circle>
                            <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Hazardous = () => {

    return (
        <div className="report-content-content">
            <div className="report-content-content-header" id="item-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" opacity="0.2"></path>
                    <line x1="128" y1="112" x2="128" y2="144" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <path d="M114.2,40l-88,152A16,16,0,0,0,40,216H216a16,16,0,0,0,13.8-24l-88-152A15.9,15.9,0,0,0,114.2,40Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    <circle cx="128" cy="180" r="12"></circle>
                </svg>
                <span>Hazardous Materials</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div className="permit-accordian-div" id="item-6-1">
                <AccordionComponent id="env-parent">
                    <AccordionItemsDirective id="env-child">
                        <AccordionItemDirective header='Radon & Air Quality(Strafford Country)' id="env-strict-part" content={radoncomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="report-content-valuation" id="item-6-2">
                <button className="collapsible" id="item-2-1">EPA Environmental Ratings</button>
                <div className="table-content">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow
                                    key="100006"
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
                </div>
            </div>

            <div className="permit-accordian-div">
                <div id="map">

                </div>
            </div>
            <div className="permit-accordian-div" id="item-6-3">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header={climate_risk} content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="font-size-xs gray-dark mt-s mb-s">
                Source(s): Zoneomics
            </div>
        </div>
    );
};
