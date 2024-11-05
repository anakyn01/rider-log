import Bell from "../svg/Bell";
import Person from "../svg/person";
import RiderLogLogo from "../svg/RiderLogLogo";

const MobileTopSearch =()=>{
    return(
        <>
<div className="mobileTopSearch p-3">
    <div className="d-flex justify-content-between ">
        <a href="">
            <RiderLogLogo/>
        </a>

        <div className="d-flex justify-content-between align-items-center rightIconBox">
            <a href="" className="">
                <Bell/>
            </a>

            <a href="" >
                <Person/>
            </a>
        </div>
    </div>

        <div className="searchTitleTop">
            <p className="searchTitle">실시간 위치 검색</p>
            <input type="text" className="form-control h-42 rounded-3 mag input-bg" placeholder="차량번호 또는 운전자명으로 검색해보세요"/>
        </div>



    
</div>
</>
    );
    
}
export default MobileTopSearch