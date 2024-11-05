import BodyContent from "./body";
import SignMobile2 from "./SignMobile2";

export default function Page() {
    return (
<>
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12" id="wrapper">
      <BodyContent/>
    </div>
    <div className="col-md-12" id="mobile">
<SignMobile2/>
    </div>
  </div>  
</div>
</>
    );
    
}