import React from "react";
// import up from "../images/arrow.png"
import "../styles/Footer.css";
function Footer() {
  
  return (
    <div className="footer">
      
        <h3 className="terms">Terms and Conditions - Privacy Policy</h3>
        <div className="Border" onClick={()=>{window.scrollTo(0,0)}}> <i className="arrow up"></i></div>
       <p className="para"> <span className="hdfc">HDFC Life Insurance Company Limited ("HDFC Life").</span>  CIN: L65110MH2000PLC128245, IRDAI Registration No. 101. <br />
 <span className="hdfc">Registered Office: </span> 13th Floor, Lodha Excelus, Apollo Mills Compound, N.M. Joshi Marg, Mahalaxmi, Mumbai - 400 011. <br />
Email: service@hdfclife.com,  Tel No: 1860-267-9999. Available (Mon-Sat 10 am to 7 pm) Local charges apply. DO NOT prefix any country code e.g. +91 or 00, Website: <br /> www.hdfclife.com <br />
The name/letters "HDFC" in the name/logo of the company belongs to Housing Development Finance Corporation Limited ("HDFC Limited") and is used by HDFC Life under an <br /> agreement entered into with HDFC Limited. <br />
Any unauthorized dissemination, distribution, reproduction, display, alteration or copying in any form or by any means of any contents of this communication is prohibited. <br />
ARN: INT/MC/05/22/28801
</p>
      </div>
    
  );
}

export default Footer;
