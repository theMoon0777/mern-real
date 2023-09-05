import './index.css';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const tableData = [
  ['Median Household Income', '$82,464'],
  ['Median Family Income', '$115,513'],
  ['Median Married-Couple Family Income', '$128,024'],
  ['Median Non-Family Household Income', '$52,990'],
  ['Percent Below Poverty Level', '8.00%'],
  ['Age 18 Years & Younger Below Poverty Level', '5.90%'],
  ['Age 18-64 Years Below Poverty Level', '9.30%'],
  ['Age 65 Years+ Below Poverty Level', '4.90%']
];
const tablecomp = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {tableData.map((rowData, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <p className="mb-xs">{rowData[0]}</p>
              </TableCell>
              <TableCell align="right">
                <p className="mb-xs">{rowData[1]}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const ReportDemographics = () => {
  return (
    <div className="report-content-content" id="item-12">
      <div className="report-content-content-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <path d="M156,72l76,76V80a8,8,0,0,0-8-8Z" opacity="0.2"></path>
          <path d="M84,72l88,88H100L24,84V80a8,8,0,0,1,8-8Z" opacity="0.2"></path>
          <rect
            x="24"
            y="72"
            width="208"
            height="88"
            rx="8"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></rect>
          <line
            x1="84"
            y1="72"
            x2="172"
            y2="160"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="156"
            y1="72"
            x2="232"
            y2="148"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="24"
            y1="84"
            x2="100"
            y2="160"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="192"
            y1="160"
            x2="192"
            y2="200"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
          <line
            x1="64"
            y1="160"
            x2="64"
            y2="200"
            fill="none"
            stroke="#5C53C5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></line>
        </svg>
        <p className="mb-0">Demographics (03820)</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
          <rect width="256" height="256" fill="none"></rect>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></circle>
          <circle cx="128" cy="180" r="12"></circle>
          <path
            d="M128,144v-8a28,28,0,1,0-28-28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          ></path>
        </svg>
      </div>
      <div className="permit-accordian-div" id="item-12-1">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective header="Income" content={tablecomp} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>

      <div className="font-size-xs gray-dark mt-s mb-s">Source(s): US Census</div>
    </div>
  );
};
