
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CenterPagenation from "../../pagenation/centerPagenation";
import TabContent1 from "../../tabcontent/7/tabContent1";
import TabContent2 from "../../tabcontent/7/tabContent2";
import TabContent3 from "../../tabcontent/7/tabContent3";
import TabContent4 from "../../tabcontent/7/tabContent4";
import TabContent5 from "../../tabcontent/7/tabContent5";
import TabContent6 from "../../tabcontent/7/tabContent6";
const R2 = () => {
    return(
<>
<div className="w-1656 p-4">
    
    <div className="d-flex">
        <div className="fs-36 fw-bold">서울제1권역점</div>
        <button className="btn btn-outline-success w-84 h-36 mx-3">조직선택</button>
    </div>



<ul className="nav nav-tabs my-4" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">운행가동률</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">운행가동률순위</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">안전점수</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#score" type="button" role="tab" aria-controls="profile" aria-selected="false">운행가동률순위</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#rate" type="button" role="tab" aria-controls="contact" aria-selected="false">안전점수</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#time" type="button" role="tab" aria-controls="contact" aria-selected="false">주행시간</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<TabContent1/> 
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<TabContent2/> 
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<TabContent3/> 
  </div>
  <div className="tab-pane fade" id="score" role="tabpanel" aria-labelledby="profile-tab">
<TabContent4/>
  </div>
  <div className="tab-pane fade" id="rate" role="tabpanel" aria-labelledby="contact-tab">
<TabContent5/>
  </div>
  <div className="tab-pane fade" id="time" role="tabpanel" aria-labelledby="contact-tab">
<TabContent6/>
  </div>
</div>
    
</div>
</>
    );
}
export default R2;