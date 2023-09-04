import { useEffect, useState } from "react";
import "./index.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, BubbleSeries } from '@syncfusion/ej2-react-charts';

export const ReportValuation = () => {
    const [valuation, setValuation] = useState({});
    const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'X-Api-Key': 'b3a1f7002a8e4b1da8da6c58071f27e2' }
    };

    const data = [
        { x: 92.2, y: 7.8, size: 1.347, text: 'China' },
        { x: 74, y: 6.5, size: 1.241, text: 'India' },
        { x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
        { x: 99.4, y: 2.2, size: 0.312, text: 'US' },
        { x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
        { x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
        { x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
        { x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
        { x: 99, y: 0.2, size: 0.128, text: 'Japan' },
        { x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
        { x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
        { x: 61.3, y: 14.5, size: 0.162, text: 'Nigeria' }
    ];
    const primaryxAxis = { title: 'Literacy Rate', minimum: 60, maximum: 100, interval: 5 };
    const primaryyAxis = { title: 'GDP growth rate', minimum: -2, maximum: 16, interval: 2 };

    useEffect(() => {
        fetch('https://api.rentcast.io/v1/avm/value?address=5500%20Grand%20Lake%20Drive%2C%20San%20Antonio%2C%20TX%2C%2078244&propertyType=Single%20Family&bedrooms=4&bathrooms=2&squareFootage=1600&compCount=5', options)
            .then(response => response.json())
            .then(response => setValuation(response))
            .catch(err => console.error(err));
    }, []);

    const valuationComp = () => {
        console.log("valuation comp ____", valuation);
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {
                            !valuation.comparables ? "" : valuation.comparables.map((data, key) =>

                                <TableRow
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <p className="mb-xs">${data.price}</p>
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
                            )
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    const insightComp = () => {
        return (
            <div>
                <div className="insight-part">
                    <span>Avg.Valuation</span><span>${!valuation.price ? "" : valuation.price}</span>
                </div>
                <div className="insight-part">
                    <span>Avg.Min</span><span>${!valuation.priceRangeLow ? "" : valuation.priceRangeLow}</span>
                </div>
                <div className="insight-part">
                    <span>Avg.Max</span><span>${!valuation.priceRangeHigh ? "" : valuation.priceRangeHigh}</span>
                </div>
            </div>
        )
    }
    return (
        <div className="report-content-value">
            <div className="report-content-content-header" id="item-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z" opacity="0.2"></path><path d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                    <circle cx="84" cy="84" r="12"></circle>
                </svg>
                <p className="mb-0">Estimated Property Valuation</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div className="report-content-chart">
                <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='GDP vs Literacy Rate'>
                    <Inject services={[BubbleSeries]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='x' yName='y' size='size' type='Bubble' name='pound'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
            <div className="report-content-valuation">

                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header='Valuations' content={valuationComp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="report-content-valuation">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header='Valuation Insights' content={insightComp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="font-size-xs mt-s dark-gray">
                Source(s): ATTOM Data, Melissa Data, AirDNA, others
            </div>
        </div>
    );
};

