import BodyContent from "./body";
import TopNav from "../../../00_common/top";
import Lnb from "../../../00_common/left";
import Orl3 from "../2/Orl3";


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
<Orl3/>
</div>
  </div>
  </div>
      </>

    );
    
}