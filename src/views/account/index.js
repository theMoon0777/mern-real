// import { useEffect } from 'react';

// material-ui
import { Link } from 'react-router-dom';
import './index.css';
// project imports

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Account = () => {
  return (
    <div className="account-div">
      <h4 className="account_header">Account</h4>
      <div className="account-content-body">
        <div className="account_alertBox__NrEaj">
          <svg width="156" height="145" viewBox="0 0 156 145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M41.008 80.895c22.648 0 41.008-18.11 41.008-40.448S63.656 0 41.008 0C18.36 0 0 18.109 0 40.447c0 22.339 18.36 40.448 41.008 40.448z"
              fill="url(#paint0_linear_2791_243665)"
            ></path>
            <path
              d="M125.975 35.526H27.918c-2.97 0-5.378 2.375-5.378 5.304v68.518c0 2.93 2.408 5.305 5.378 5.305h98.057c2.97 0 5.378-2.375 5.378-5.305V40.83c0-2.93-2.408-5.304-5.378-5.304z"
              fill="url(#paint1_linear_2791_243665)"
            ></path>
            <path
              d="M85.75 14.886H54.148c-4.99 0-9.03 3.986-9.03 8.907v71.252c0 4.922 4.04 8.907 9.03 8.907h54.179c4.989 0 9.03-3.985 9.03-8.907v-48.99l-31.601-31.17h-.006z"
              fill="#fff"
            ></path>
            <path
              d="M99.598 60.351h-35.55c-2.459 0-4.442-1.646-4.442-3.682 0-2.035 1.99-3.682 4.441-3.682h35.55c2.459 0 4.442 1.647 4.442 3.682 0 2.036-1.99 3.682-4.441 3.682z"
              fill="url(#paint2_linear_2791_243665)"
            ></path>
            <path
              d="M99.598 75.092h-35.55c-2.459 0-4.442-1.647-4.442-3.682s1.99-3.682 4.441-3.682h35.55c2.459 0 4.442 1.647 4.442 3.682s-1.99 3.682-4.441 3.682z"
              fill="url(#paint3_linear_2791_243665)"
            ></path>
            <path
              d="M72.93 45.612h-8.889c-2.458 0-4.441-1.647-4.441-3.682 0-2.036 1.99-3.682 4.441-3.682h8.89c2.457 0 4.44 1.646 4.44 3.682 0 2.035-1.99 3.682-4.44 3.682z"
              fill="url(#paint4_linear_2791_243665)"
            ></path>
            <path d="M85.75 14.886v26.618c0 2.516 2.07 4.551 4.614 4.551h26.987" fill="url(#paint5_linear_2791_243665)"></path>
            <path
              d="M127.497 115.363H27.16c-3.53 0-5.445-1.938-4.275-4.319l19.645-40.04c1.17-2.389 4.983-4.32 8.513-4.32H151.38c3.53 0 5.446 1.938 4.275 4.32l-19.645 40.04c-1.17 2.387-4.983 4.319-8.513 4.319z"
              fill="url(#paint6_linear_2791_243665)"
            ></path>
            <path
              d="M107.575 19.552c2.613 0 4.731-2.089 4.731-4.666 0-2.577-2.118-4.666-4.731-4.666s-4.731 2.089-4.731 4.666c0 2.577 2.118 4.666 4.731 4.666z"
              fill="url(#paint7_linear_2791_243665)"
            ></path>
            <rect x="92" y="80.8784" width="64" height="64" rx="32" fill="url(#paint8_linear_2791_243665)"></rect>
            <path
              d="M122.5 121.878c5.799 0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5-10.5 4.701-10.5 10.5 4.701 10.5 10.5 10.5zM129.925 118.803l6.075 6.075"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <defs>
              <linearGradient id="paint0_linear_2791_243665" x1="41.0082" y1="0" x2="41.0082" y2="80.8946" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#DEDEDE" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_2791_243665"
                x1="76.9466"
                y1="35.5261"
                x2="76.9466"
                y2="120.332"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_2791_243665"
                x1="81.8226"
                y1="52.9873"
                x2="81.8226"
                y2="63.1238"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_2791_243665"
                x1="81.8226"
                y1="67.728"
                x2="81.8226"
                y2="75.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_2791_243665"
                x1="68.4856"
                y1="38.2478"
                x2="68.4856"
                y2="45.3707"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_2791_243665"
                x1="100.5"
                y1="19.7263"
                x2="100.986"
                y2="48.3299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_2791_243665"
                x1="89.2702"
                y1="66.6833"
                x2="89.2702"
                y2="115.363"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#DEDEDE"></stop>
                <stop offset="1" stopColor="#DEDEDE" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_2791_243665"
                x1="107.575"
                y1="10.2197"
                x2="107.575"
                y2="19.7266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint8_linear_2791_243665" x1="124" y1="80.8784" x2="124" y2="144.878" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C9C9C9"></stop>
                <stop offset="1" stopColor="#C9C9C9" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p>Create an account to access your account settings</p>
          <button className="s-pr64 s-pr35 s-pr2645 s-pr37 Account_createBtn__gxwL5 account-create-btn" tabIndex="0" type="button">
            <Link to="/pages/login/login3" className="s-pr36 signin-link">
              Create Account
            </Link>
            <span className="s-pr290"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
