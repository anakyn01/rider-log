import Danger from "../modal/1/Danger";
import Driving from "../modal/1/Driving";
import Driving2 from "../modal/1/Driving2";
import Driving3 from "../modal/1/Driving3";


const CityPlace = () => {
    return(
<>
<div className="pl-72 w-440">
        <h4 className="fs-18 fw-700 mb-37 mt-15">별따러 가자</h4>
        <input type="text" className="form-control w-352 h-56 input-bg rounded-3 mag" placeholder="조직명"/>
        <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="fs-16 fw-400">총16건</h6>
            <input type="reset" name="" id="" value="검색초기화" className="btn fs-16 fw-400 Color77787b"/>
        </div>
        <a href="#demo" className="btn" data-bs-toggle="collapse">별따러 가자</a>
        <div id="demo" className="collapse py-3">
        <a href="#demo2" className="btn" data-bs-toggle="collapse">&nbsp;&nbsp;&nbsp;&nbsp;서울제1권역점</a>
        <div id="demo2">
<div className="accordion accordion-flush" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#lone" aria-expanded="true" aria-controls="lone">
        강남구점
      </button>
    </h2>
    <div id="lone" className="accordion-collapse collapse show" aria-labelledby="lone" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>역삼점</p>
        <p>역삼점</p>
        <p>역삼점</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="ltwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#ltwo" aria-expanded="false" aria-controls="ltwo">
        서초구점
      </button>
    </h2>
    <div id="ltwo" className="accordion-collapse collapse show" aria-labelledby="ltwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>역삼점</p>
        <p>역삼점</p>
        <p>역삼점</p>        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="lthree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#lthree" aria-expanded="false" aria-controls="lthree">
       송파구점
      </button>
    </h2>
    <div id="lthree" className="accordion-collapse collapse show" aria-labelledby="lthree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>역삼점</p>
        <p>역삼점</p>
        <p>역삼점</p>  
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
        <p className="fs-16 fw-700">차량/운전자 현황</p>
          <div className="d-flex justify-content-around align-items-center w-352 h-82 rounded-3 border border-1 px-3">

              <div className="w-98 h-50 d-flex justify-content-center">
                <p className="fs-14 fw-400 text-center">전체<br/><span className="fs-20 fw-700">2,000</span></p>              
              </div>
              <hr className="b1"/>
              <div className="w-98 h-50 d-flex justify-content-center">
                <p className="fs-14 fw-400 text-center">주행중<br/><span className="fs-20 text-success fw-700">1,500</span></p>           
              </div>
              <hr className="b1"/>
              <div className="w-98 h-50 d-flex justify-content-center">
                <p className="fs-14 fw-400 text-center">운휴<br/><span className="fs-20 fw-700">0</span></p>              
              </div>
          </div>
        <div className="my-3">
          <input type="text" className="h-56 form-control rounded-3 input-bg mag" placeholder="차량번호 또는 운전자명"/>
          <div className="d-flex justify-content-between align-items-center mb-40">
            <div className="fs-16 fw-400">총 0건</div>
            <input type="reset" className="btn fs-16 Color77787b" value="검색 초기화"/>
          </div>
        </div>

<ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link tabs active" id="tone" data-bs-toggle="tab" data-bs-target="#tone" type="button" role="tab" aria-controls="tone" aria-selected="true">전체</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link tabs" id="ttwo" data-bs-toggle="tab" data-bs-target="#ttwo" type="button" role="tab" aria-controls="ttwo" aria-selected="false">주행중</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link tabs" id="tthree" data-bs-toggle="tab" data-bs-target="#tthree" type="button" role="tab" aria-controls="tthree" aria-selected="false">사고</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link tabs" id="ffour" data-bs-toggle="tab" data-bs-target="#ffour" type="button" role="tab" aria-controls="ffour" aria-selected="false">미주행</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="tone" role="tabpanel" aria-labelledby="tone">
    <div className="d-flex justify-content-between align-items-center py-2">
      <p className="fs-14 w80">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="tabBtnGreen">
        주행중
      </button>
    </div> 

    <div className="d-flex justify-content-between align-items-center py-2">
      <p className="fs-14 w80">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="tabBtnRed" >사고</button>
    </div> 

    <div className="d-flex justify-content-between align-items-center py-2">
      <p className="fs-14 w80">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="tabBtnOrange" >미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center py-2">
      <p className="fs-14 w80">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="tabBtnOrange" >미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center py-2">
      <p className="fs-14 w80">논현점</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="tabBtnGray" >운휴</button>
    </div>
  </div>

  
  <div className="tab-pane fade" id="ttwo" role="tabpanel" aria-labelledby="ttwo">
  <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-success  rounded-5 btn-outline-success-w68-h32" data-bs-toggle="modal" data-bs-target="#driving"></button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-danger rounded-5 btn-outline-success-w68-h32 " data-bs-toggle="modal" data-bs-target="#danger">사고</button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 ">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 ">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">논현점</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-secondary rounded-5 btn-outline-success-w68-h32 ">운휴</button>
    </div>
  </div>
  <div className="tab-pane fade" id="tthree" role="tabpanel" aria-labelledby="contact-tab">
  <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn rounded-5 btn-outline-success-w68-h32" id="drivingBtn">
        주행중
      </button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn rounded-5 btn-outline-success-w68-h32 " data-bs-toggle="modal" data-bs-target="#danger">사고</button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 "  data-bs-toggle="modal" data-bs-target="#driving2">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 ">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">논현점</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-secondary rounded-5 btn-outline-success-w68-h32 "  data-bs-toggle="modal" data-bs-target="#driving3">운휴</button>
    </div>
  </div>
  <div className="tab-pane fade" id="tfour" role="tabpanel" aria-labelledby="contact-tab">
  <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-success rounded-5 btn-outline-success-w68-h32 " data-bs-toggle="modal" data-bs-target="#driving">
        주행중
      </button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-danger rounded-5 btn-outline-success-w68-h32 " data-bs-toggle="modal" data-bs-target="#danger">사고</button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 ">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 btn-outline-success-w68-h32 ">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-1">
      <p className="fs-14">논현점</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-secondary rounded-5 btn-outline-success-w68-h32 ">운휴</button>
    </div>
  </div>
</div>
          
    </div>
    <Driving/>
    <Driving2/>
    <Driving3/>
    <Danger/>
    <script src="../../js/custom.js"></script>
</>
    );
}
export default CityPlace;