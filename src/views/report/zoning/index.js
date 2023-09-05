import './index.css';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';

const childcomp = () => {
    return (
        <div className="childcomp-div">
            <div className="zoning-part">
                <span>Accessory Dwelling unit</span>
            </div>
            <div className="zoning-part">
                <span>Adult day care</span>
            </div>
            <div className="zoning-part">
                <span>Assembly hall</span>
            </div>
            <div className="zoning-part">
                <span>Bank</span>
            </div>
            <div className="zoning-part"><span>Beauty and Barber Shop</span></div>
            <div className="zoning-part"><span>Bed and Breakfast</span></div>
            <div className="zoning-part"><span>Child Care Home</span></div>
            <div className="zoning-part"><span>Child care facility</span></div>
            <div className="zoning-part"><span>Conservation lot</span></div>
            <div className="zoning-part"><span>Conversion Of Existing Dwelling To Accommodate not more than 2 units</span></div>
            <div className="zoning-part"><span>Dwelling 2 Family</span></div>
            <div className="zoning-part"><span>Dwelling 3 to 4 Family</span></div>
            <div className="zoning-part"><span>Educational institution k 12</span></div>
            <div className="zoning-part"><span>Farm</span></div>
            <div className="zoning-part"><span>Farm Animals For Family Use for non commercial purposes on lots containing a one or Two Family Dwelling</span></div>
            <div className="zoning-part"><span>Office</span></div>
            <div className="zoning-part"><span>Personal service establishment</span></div>
            <div className="zoning-part"><span>Public Recreation</span></div>
            <div className="zoning-part"><span>Public Utility</span></div>
            <div className="zoning-part"><span>Retail On site</span></div>
        </div>
    )
}

const childcomp1 = () => {
    return (
        <div className="childcomp-div">
            <div className="zoning-part"><span>Assisted living facility</span></div>
            <div className="zoning-part"><span>Congregate care facility</span></div>
            <div className="zoning-part"><span>Continuing care Community Facility</span></div>
            <div className="zoning-part"><span>Educational Institutional post secondary</span></div>
            <div className="zoning-part"><span>Elderly assisted care home</span></div>
            <div className="zoning-part"><span>Helicopter Take Offs and Landings</span></div>
            <div className="zoning-part"><span>Nursing Home</span></div>
        </div>
    )
}

const infocomp = () => {
    return (
        <div className="childcomp-div">
            <div className="zoning-part lx space-between"><span>Zone Type</span><span>Residential</span></div>
            <div className="zoning-part lx space-between"><span>Zone Subtype</span><span>Multi Family</span></div>
            <div className="zoning-part lx space-between"><span>Zone Name</span><span>Low Density Residental</span></div>
            <div className="zoning-part lx space-between"><span>Zone Code</span><span>R-20</span></div>
            <div className="zoning-part lx space-between"><span>Zone Code Link</span><span><a>Link</a></span></div>
            <div className="zoning-part lx space-between"><span>Zone Type</span><span>Residential</span></div>
        </div>
    )
}

const tablecomp = () => {
    return (
        <AccordionComponent>
            <AccordionItemsDirective >
                <AccordionItemDirective id="zoning-strict-height" header="Permitted Uses" content={childcomp} />
                <AccordionItemDirective header="Conditional Uses" content={childcomp1} />
            </AccordionItemsDirective>
        </AccordionComponent>
    )
}

export const Zoning = () => {
    return (
        <div className="report-content-content">
            <div className="report-content-content-header" id="item-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256" >
                    <rect width="256" height="256" fill="none"></rect><polygon points="160 216 96 184 96 40 160 72 160 216" opacity="0.2"></polygon>
                    <polyline points="96 184 32 200 32 56 96 40" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                    <polygon points="160 216 96 184 96 40 160 72 160 216" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polygon>
                    <polyline points="160 72 224 56 224 200 160 216" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
                </svg>
                <p className="mb-0">Zoning</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div>
                <div id="map">
                </div>
            </div>
            <div className="permit-accordian-div" id="item-4-1">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective header='Zoning Uses' content={tablecomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="permit-accordian-div" id="item-4-2">
                <AccordionComponent>
                    <AccordionItemsDirective>
                        <AccordionItemDirective id="zoning-info-div" header='Zoning Information' content={infocomp} />
                    </AccordionItemsDirective>
                </AccordionComponent>
            </div>
            <div className="font-size-xs gray-dark mt-s mb-s">
                Source(s): Zoneomics
            </div>
        </div>
    );
};
