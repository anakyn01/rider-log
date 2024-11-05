
import DashModal from "../../modal/8/DashModal";
import MyModal from "../../modal/8/MyModal";
import Ok from "../../svg/8/Ok";


const Sec7 = () => {
    return(
<>
<form className="">
<div className="d-flex justify-content-center w-1656">
      <div className="">

      <div className="w-560 d-flex justify-content-center">
<p className="fs-18 fw-700  mt-20 mb-42">비밀번호 변경</p>
</div>

<div className="w-560 mb-5">
      <p className="fs-18 fw-700">현재 비밀번호 변경</p>
      <input type="password" placeholder="현재 비밀번호를 입력해주세요" className="form-control w-560 h-56 input-bg rounded-3" value="12345678"/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback fs-14 fw-400 ColorDb121a">비밀번호를 입력해주세요.</div>

</div>
<div className="w-560 mb-5">
      <p className="fs-18 fw-700">새로운 비밀번호</p>
      <input type="password" placeholder="비밀번호를 입력해주세요" className="form-control w-560 h-56 input-bg rounded-3" value="123456789"/>
      <p className="fs-14 fw-400 ColorC3c4c5 mt-1"><Ok/>영어 대문자, 소문자, 숫자, 특수문자 중 3종류 이상<br/><Ok/>8자리 이상의 비밀번호</p>
</div>
<div className="w-560 mb-5">
      <p className="fs-18 fw-700">새로운 비밀번호 확인</p>
      <input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" className="form-control w-560 h-56 input-bg rounded-3" value="123456789"/>
</div>
<div className="w-560 mb-5">
<a className="w-560 h-56 btn btn-success mainBtn" href="http://localhost:3000/06_dash/08_board/4">비밀번호 변경하기</a>

</div>
<MyModal/>
</div>
</div>
</form>

</>
    );
}
export default Sec7;