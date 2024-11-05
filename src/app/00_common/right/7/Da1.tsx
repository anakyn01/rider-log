import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T1 from "../../table/7/t1";
import CenterPagenation from "../../pagenation/centerPagenation";
import Excel from "../../button/Excel";
const Da1 = () => {
    return(
<>

<div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
            <h4 className="fs-18 fw-700">주행 이력</h4>
                <a href="#" className="a-link excel">                   
<Excel/>
                </a>
        </div>
</div>
<div className="d-flex justify-content-between">
    <div className="">
<input type="text" placeholder="차량번호, 운전자명으로 검색해보세요" className="w-564 form-control h-56 input-bg mag"/>
    </div>
    <div className="">
<button className="btn btn-outline-success w-178 h-56">
    검색초기화
</button>
    </div>
</div>

        <div className="d-flex justify-content-between align-items-center mt-40 mb-20">
            <h4 className="my-3 w-49 h-20 text-secondary fs-16 ColorC3c4c5 ">총 21건</h4>
        </div>
<T1/>
<CenterPagenation/>
</>
    );
}
export default Da1;
{/*
                  <div className="d-flex w-393 h-20 justify-content-between">
                    <label className="form-label text-secondary">사고조치 완료 여부</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1"/>
                        <label className="form-check-label" htmlFor="radio1">전체</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>
                        <label className="form-check-label" htmlFor="radio2">완료</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input"/>
                        <label className="form-check-label">미완료</label>
                    </div>
                </div>*/}