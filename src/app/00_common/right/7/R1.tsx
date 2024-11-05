
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CenterPagenation from "../../pagenation/centerPagenation";
import TabContent1 from "../../tabcontent/7/tabContent1";
import TabContent2 from "../../tabcontent/7/tabContent2";
import TabContent3 from "../../tabcontent/7/tabContent3";
import TabContent4 from "../../tabcontent/7/tabContent4";
import TabContent5 from "../../tabcontent/7/tabContent5";
import TabContent6 from "../../tabcontent/7/tabContent6";
const R1 = () => {
    return(
<>
<div className="w-1656 p-4">
    
    <div className="d-flex">
        <div className="fs-32 fw-700">서울제1권역점</div>
        <button className="btn btn-outline-success mainBtn-w84-h36 mx-3">조직선택</button>
    </div>



<ul className="nav nav-tabs my-4 nav-justified" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active fs-18 fw-700 tabs" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">운행가동률</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link fs-18 fw-700 tabs" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">운행가동률순위</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link fs-18 fw-700 tabs" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">안전점수</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link fs-18 fw-700 tabs" id="score-tab" data-bs-toggle="tab" data-bs-target="#score" type="button" role="tab" aria-controls="score" aria-selected="false">안전점수순위</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link fs-18 fw-700 tabs" id="rate-tab" data-bs-toggle="tab" data-bs-target="#rate" type="button" role="tab" aria-controls="rate" aria-selected="false">주행거리</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link fs-18 fw-700 tabs" id="time-tab" data-bs-toggle="tab" data-bs-target="#time" type="button" role="tab" aria-controls="time" aria-selected="false">주행시간</button>
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
  <div className="tab-pane fade" id="score" role="tabpanel" aria-labelledby="score-tab">
<TabContent4/>
  </div>
  <div className="tab-pane fade" id="rate" role="tabpanel" aria-labelledby="rate-tab">
<TabContent5/>
  </div>
  <div className="tab-pane fade" id="time" role="tabpanel" aria-labelledby="time-tab">
<TabContent6/>
  </div>
</div>
    
</div>
</>
    );
}
export default R1;