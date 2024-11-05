import BodyContent from "./body";
import TopNav from "../../../00_common/top";
import Lnb from "../../../00_common/left";
import Car3 from "./Car3";

export default function Page() {
    return (
      <>
<TopNav/>
<div className="conatiner-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <Lnb/>
    <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
    <Car3/>
    </div>
  </div>
  </div>
      </>

    );
    
}