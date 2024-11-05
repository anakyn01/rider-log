import BodyContent from "./body";

import Lnb from "../../00_common/left";
import Map from "./map";
import MobileTopLocation from "@/app/00_common/top/MobileTopLocation";


export default function Page() {
    return (
      <>
<MobileTopLocation/>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <Lnb/>
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<Map/>
</div>
  </div>  
</div>
      </>

    );
    
}