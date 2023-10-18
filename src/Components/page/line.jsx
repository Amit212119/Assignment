import React from "react";
const Line = () => {
  return (
    <>
      <div className="graph">
        <div className="line">
          
          <div className="first">
            <div className="line1"></div>
            <div className="month">Jan</div>
          </div>
          <div className="second">
            <div className="line2"></div>
            <div className="month">Feb</div>
          </div>
          <div className="third">
            <div className="line3"></div>
            <div className="month">Mar</div>
          </div>
          <div className="fourth">
            <div className="line4"></div>
            <div className="month">Apr</div>
          </div>
          <div className="fifth">
            <div className="line5"></div>
            <div className="month">May</div>
          </div>
          <div className="fifth">
            <div className="line6"></div>
            <div className="month">Jun</div>
          </div>
          <div className="third">
            <div className="line7"></div>
            <div className="month">Jul</div>
          </div>
          <div className="third">
            <div className="line8"></div>
            <div className="month">aug</div>
          </div>
          <div className="third">
            <div className="line9"></div>
            <div className="month">Sep</div>
          </div>
          <div className="third">
            <div className="line10"></div>
            <div className="month">Oct</div>
          </div>
          <div className="third">
            <div className="line11"></div>
            <div className="month">Nov</div>
          </div>
          <div className="third">
            <div className="line12"></div>
            <div className="month">Dec</div>
          </div>
          
        </div>

        <div className="customer">
          <div className="cust">Customers</div>
          <div className="para">Customers that buy products</div>
          <div className="circle">
            <div className="cir">
              <div className="percent">65%</div>
              <div className="newcust">
                Total new
                <br /> customers
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tablediv">
        <div className="upper">
          <h1>Product Sell</h1>
          <input type="text" placeholder="Search" className="tablesearch"/>
          <select className="days">
            <option>Last 30 Days</option>
            <option> Last 15 Days</option>
            <option>Last 10 Days</option>
            <option>Last 5 Days</option>
          </select>
        </div>
        <div className="lower">
          <table  width='100%'>
            <tr>
              <th width='70%' align ="left">Product Name </th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total Sales</th>
            </tr>
            
            <tr align="center">
              <td align="left">Abstract 3D</td>
              <td>32 in stock</td>
              <td>$48</td>
              <td>20</td>
            </tr>
          </table>

        </div>


      </div>
    </>
  );
};
export default Line;
