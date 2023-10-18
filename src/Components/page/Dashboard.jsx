import React from "react";

import {
  BsCurrencyDollar,
  BsWallet2,
  BsFileBarGraphFill,
  BsTrash,
  BsSearch,
  BsArrowUp,
  BsArrowDown,
} from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
const Dashboard = (props) => {
  
  return (
    <>
      <div>
        <div className="search">
          <h1>Hello Shahrukh <FcApproval /></h1>
          <div>
            <input type="text" placeholder="   Search" />
          </div>
        </div>
        <div className="deshcontainer">
          <div className="center">
            <div className="image">
              <div className="icon1">
                <BsCurrencyDollar />
              </div>
            </div>
            <div className="text1">
              <div className="name">Earning</div>
              <div className="amount">$198K</div>
              <div className="months"><span className="green"><BsArrowUp size="13px" />37.8%</span> this month</div>
            </div>
          </div>

          <div className="center">
            <div className="image">
              <div className="icon2">
                <BsFileBarGraphFill />
              </div>
            </div>
            <div className="text1">
              <div className="name">Orders</div>
              <div className="amount">$2.4K</div>
              <div className="months"><span className="red"><BsArrowDown size="13px"/>2%</span> this month</div>
            </div>
          </div>

          <div className="center">
            <div className="image">
              <div className="icon3">
                <BsWallet2 />
              </div>
            </div>
            <div className="text1">
              <div className="name">Balance</div>
              <div className="amount">$2.4k</div>
              <div className="months"><span className="red"><BsArrowDown size="13px"/>2%</span> this month</div>
            </div>
          </div>

          <div className="center">
            <div className="image">
              <div className="icon4">
                <BsTrash />
              </div>
            </div>
            <div className="text1">
              <div className="name">Total Sales</div>
              <div className="amount">$89K</div>
              <div className="months"><span className="green"><BsArrowUp size="13px"/>11%</span> this month</div>
            </div>
          </div>
        </div>
      </div>
      <props.Line />
    </>
  );
};
export default Dashboard;
