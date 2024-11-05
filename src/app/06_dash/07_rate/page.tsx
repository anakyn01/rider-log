import BodyContent from "./body";
import TopNav from "../../00_common/top";
import Lnb from "../../00_common/left";
import DriveTotal from "./DriveTotal";


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
<DriveTotal/>
    </div>
  </div>
</div>
      </>

    );
    
}