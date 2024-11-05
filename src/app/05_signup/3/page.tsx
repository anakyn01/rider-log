import BodyContent from "./body";
import SignMobile4 from "./SignMobile4";

export default function Page() {
    return (
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<SignMobile4/>
    </div>
  </div>  
</div>
</>
    );
    
}