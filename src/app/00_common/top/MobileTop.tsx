import LeftArrow from "../svg/leftArrow";
import Bell from "../svg/Bell";
import Person from "../svg/person";

const MobileTop =()=>{
    return(
<div className="mobile-top">

<a href="">
<LeftArrow/>
</a>

<div className="d-flex justify-content-between align-items-center rightIconBox">
<a href="" className="mr-2">
<Bell/>
</a>

<a href="" >
<Person/>
</a>
</div>

</div>
    );
    
}
export default MobileTop