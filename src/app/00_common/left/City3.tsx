import Danger from "../modal/1/Danger";
import Driving from "../modal/1/Driving";
import Driving2 from "../modal/1/Driving2";
import Driving3 from "../modal/1/Driving3";


const CityPlace3 = () => {
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
        


          
    </div>
    <Driving/>
    <Driving2/>
    <Driving3/>
    <Danger/>
</>
    );
}
export default CityPlace3;