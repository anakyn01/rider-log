import AccIcon from "../svg/AccIcon";
import AllIcon from "../svg/AllIcon";
import DashIcon from "../svg/DashIcon";
import LocationIcon from "../svg/LocationIcon";

const MobileFooter = () => {
    return(
<>
<div className="mobileFooter d-flex justify-content-between align-items-center ">
<a href="http://localhost:3000/06_dash/00_dash/1" className="w50h40">
<div className="d-flex justify-content-center align-items-center flex-column">
<div className="w24h24"><DashIcon/></div>
<span className="footer-icon-text">대시보드</span>
</div>
</a>
<a href="http://localhost:3000/06_dash/01_map" className="w50h40">
<div className="d-flex justify-content-center align-items-center flex-column">
<div className="w24h24"><LocationIcon/></div>
<span className="footer-icon-text">위치검색</span>
</div>
</a>
<a href="http://localhost:3000/06_dash/02_accident" className="w50h40">
<div className="d-flex justify-content-center align-items-center flex-column">
<div className="w24h24"><AccIcon/></div>
<span className="footer-icon-text">사고</span>
</div>
</a>
<a href="http://localhost:3000/06_dash/07_rate/" className="w50h40">
<div className="d-flex justify-content-center align-items-center flex-column">
<div className="w24h24"><AccIcon/></div>
<span className="footer-icon-text">주행통계</span>
</div>
</a>
<a href="" className="w50h40">
<div className="d-flex justify-content-center align-items-center flex-column">
<div className="w24h24"><AllIcon/></div>
<span className="footer-icon-text">전체메뉴</span>
</div>
</a>
</div>
</>
    );
}
export default MobileFooter;