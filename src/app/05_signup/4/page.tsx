import BodyContent from "./body";
import SignMobile5 from "./SignMobile5";

export default function Page() {
    return (
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<SignMobile5/>
    </div>
  </div>  
</div>
</>
    );
    
}