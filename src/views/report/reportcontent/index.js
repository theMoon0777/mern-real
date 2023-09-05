import "./index.css";
export const ReportContent = () => {
    return (
        <div className="report-content-content" id="item-12">
            <div className="report-content-content-header" id="item-12-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5C53C5" viewBox="0 0 256 256" style={{ "marginTop": "3px" }}>
                    <rect width="256" height="256" fill="none"></rect>
                    <path d="M200,56H56A23.9,23.9,0,0,0,32,80V192a23.9,23.9,0,0,0,24,24H200a23.9,23.9,0,0,0,24-24V80A23.9,23.9,0,0,0,200,56ZM164,184H92a20,20,0,0,1,0-40h72a20,20,0,0,1,0,40Z" opacity="0.2"></path>
                    <rect x="32" y="56" width="192" height="160" rx="24" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                    <rect x="72" y="144" width="112" height="40" rx="20" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect>
                    <line x1="148" y1="144" x2="148" y2="184" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="108" y1="144" x2="108" y2="184" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <line x1="128" y1="56" x2="128" y2="16" fill="none" stroke="#5C53C5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
                    <circle cx="84" cy="108" r="12"></circle><circle cx="172" cy="108" r="12"></circle>
                </svg>
                <p className="mb-0">Aiden (AI Copilot)</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="">
                    <rect width="256" height="256" fill="none"></rect>
                    <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle>
                    <circle cx="128" cy="180" r="12"></circle>
                    <path d="M128,144v-8a28,28,0,1,0-28-28" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
                </svg>
            </div>
            <div className="report-content-content-body">
                <p className="lh-1">Aiden is a powerful real estate AI that can answer any question you have about this property. Select from the examples below or enter a question of your own.</p>
                <div className="report-content-content-btn-group">
                    <button className="report-content-content-btn">
                        Rental Potential?
                    </button>
                    <button className="report-content-content-btn">
                        Kid-friendly?
                    </button>
                    <button className="report-content-content-btn">
                        Give me ideas
                    </button>
                    <button className="report-content-content-btn">
                        Write me a poem
                    </button>
                </div>
            </div>
            <div className="report-content-content-footer">
                <textarea rows="1" className="report-content-content-text" />
                <button className="report-content-submit-btn">Submit</button>
            </div>
        </div>
    );
};

