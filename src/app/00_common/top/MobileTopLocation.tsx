import Bell from "../svg/Bell";
import Person from "../svg/person";
import LeftArrow from "../svg/leftArrow";


const MobileTopLocation =()=>{
    return(
        <>
<div className="mobileTopSearch p-3">
    <div className="d-flex justify-content-between ">
        <a href="">
            <LeftArrow/>
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
            <p className="searchTitleDec">담당 조직의 직속 차량/운전자를 검색하여, 현재 위치를 확인할 수 있습니다.</p>
            <input type="text" className="form-control h-42 rounded-3 mag input-bg" placeholder="차량번호 또는 운전자명으로 검색해보세요"/>
        </div>



    
</div>
</>
    );
    
}
export default MobileTopLocation