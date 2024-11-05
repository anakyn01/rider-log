import BodyContent from "./body";
import TopNav from "../../../00_common/top";
import Lnb from "../../../00_common/left";
import Mc2 from "./Mc2";


export default function Page() {
    return (
      <>
<TopNav/>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <Lnb/>
    <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<Mc2/>
    </div>
  </div>
  </div>
      </>

    );
    
}