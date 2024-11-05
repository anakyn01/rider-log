
import DashModal from "../../modal/8/DashModal";
import MyModal2 from "../../modal/8/MyModal2";
import Save from "../../toast/8/Save";
import Change from "../../toast/8/Change";
const My8 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">

  <div className="">
    <div className="w-560 text-center">
        <div className="ml-90">
          <Change/>
        </div>
    </div>

    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">이름</label>
      <input type="text" className="form-control h-56 input-bg rounded-3" id="" placeholder="최대 10자 입력 가능" name="" value="김별따"/>
      <div className="invalid-feedback ColorDb121a fs-14">이름을 입력해주세요.</div>
    </div>

    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">휴대폰번호</label>
      <div className="d-flex justify-content-between">
      <input type="tel" className="form-control h-56 w-348 input-bg-2" id="" placeholder="01012345678" name=""/>
      <button className="btn btn-success w-160" data-bs-toggle="modal" data-bs-target="#myModal2">변경</button>
      </div>
      
    </div>
    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">아이디</label>
      <input type="text" className="form-control h-56 input-bg-2" id="" placeholder="riderlog@star-pickers.com" name=""/>
    </div>

    <div className="mt-50">
        <a className="btn btn-success w-560 h-56 mainBtn" href="http://localhost:3000/06_dash/08_board/3_8src/app/00_common/right/8/My7.tsx">변경사항저장</a>
    </div>   

  </div>

</div>
<MyModal2/>
</>
    );
}
export default My8;
