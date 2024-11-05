import BodyContent from "./body";
import SignMobile3 from "./SignMobile3";

export default function Page() {
    return (
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<SignMobile3/>
    </div>
  </div>  
</div>
</>
    );
    
}