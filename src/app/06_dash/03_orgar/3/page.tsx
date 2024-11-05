import BodyContent from "./body";
import TopNav from "../../../00_common/top";
import Lnb from "../../../00_common/left";
import AlertModalSearchSeoul from "@/app/00_common/modal/alertModalSearchSeoul";
import Orgar from '@/app/00_common/left/orgar';
import Dead from '@/app/00_common/dead/dead';
import Toggle from '@/app/00_common/right/toggle';
import Toast from '@/app/00_common/toast/toast1';
import Orl3 from "../2/Orl3";

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
<Orl3/>
    </div>
  </div>
  </div>
      </>

    );
    
}