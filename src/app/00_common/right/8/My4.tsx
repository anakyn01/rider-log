
import DashModal from "../../modal/8/DashModal";
import MyModal from "../../modal/8/MyModal";
const My4 = () => {
    return(
<>
<form className="was-validated">
<div className="d-flex justify-content-center w-1656">

  <div className="">
    <div className="w-560 text-center">
      <p className="myTitle">내정보</p>
      <p className="fs-16 fw-400 Color77787b">개인정보 및 계정 보호를 위해, 현재 사용 중인 비밀번호를 입력해주세요.</p>
    </div>

    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">이름</label>
      <input type="text" className="form-control h-56 input-bg rounded-3" id="" placeholder="최대 10자 입력 가능" name="" required/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback ColorDb121a fs-14">이름을 입력해주세요.</div>
    </div>

    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">휴대폰번호</label>
      <div className="d-flex justify-content-between">
      <input type="tel" className="form-control h-56 w-348 input-bg-2" id="" placeholder="01012345678" name=""/>
      <button className="btn btn-success w-160" data-bs-toggle="modal" data-bs-target="#myModal">변경</button>
      </div>
      
    </div>
    <div className="mt-50 w-560">
      <label htmlFor="" className="fs-18 fw-700">아이디</label>
      <input type="text" className="form-control h-56 input-bg-2" id="" placeholder="riderlog@star-pickers.com" name=""/>
    </div>

    <div className="mt-50">
        <a className="btn btn-success w-560 h-56 mainBtn" href="http://localhost:3000/06_dash/08_board/3_5">변경사항저장</a>
    </div>   

  </div>

</div>


  


<MyModal/>
</form>
</>
    );
}
export default My4;
