import BodyContent from "./body";
import TopNav from "../../../00_common/top";
import Lnb from "../../../00_common/left";
import AlertModalSearchSeoul from "@/app/00_common/modal/alertModalSearchSeoul";
import Orgar from '@/app/00_common/left/orgar';
import Toggle1 from '@/app/00_common/right/toggle1';
import Toggle from '@/app/00_common/right/toggle';
import Toast from '@/app/00_common/toast/toast1';

export default function Page() {
    return (
      <>
<TopNav/>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12"  id="wrapper">
      <Lnb/>
      <Toggle/>
    <Orgar/>
    <Toggle1/>
    <Toast/>
    <Toggle/>
    <Orgar/>
    <Toggle1/>
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">

    </div>
  </div>
  </div>
      </>

    );
    
}