

import MyModal from "../../modal/8/MyModal";
const Sec1 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
  <div className="content">
  <div className="w-560 h-360 d-flex justify-content-center">
      <p className="fs-18 fw-700 mt-20 mb-63">보안센터</p>
  </div>

  <div className="w-560 h-42 d-flex justify-content-between mt-10 mb-10">

        <div className="fs-16 fw-500">비밀번호 변경<br/><span className="fs-14 fw-400 Color77787b">보안을 위해 주기적인 비밀번호 변경을 권장합니다.</span></div>

        <a className="btn btn-success mainBtn-w57-h34 rounded-5" href="http://localhost:3000/06_dash/08_board/5">관리</a>    
  </div>
  <hr className="mb-10"/>

<div className="w-560 h-360 d-flex justify-content-between mt-10 mb-10">

    <div className="fs-16 fw-500">2단계 인증 기본 수단<br/><span className="fs-14 fw-400 Color77787b">2단계 인증에 필요한 인증코드 수신 방법을 선택할 수 있습니다.</span></div>
  

    <div className="d-flex align-items-center">
      <div className="form-check d-flex align-items-center">
        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
        <label className="form-check-label fs-16 fw-400" htmlFor="radio1">이메일</label>
      </div>
      <div className="form-check d-flex align-items-center ml-3">
        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>
        <label className="form-check-label fs-16 fw-400" htmlFor="radio2">SMS 문자</label>
      </div>
    </div>   
</div>
<hr className="mb-10"/>

<div className="w-560 h-360 d-flex justify-content-between mt-10 mb-10">

    <div className="fs-16 fw-500">등록된 기기 관리<br/><span className="fs-14 fw-400 Color77787b">로그인 시, 2단계 인증을 건너뛸 수 있습니다.</span></div>


    <a className="btn btn-success mainBtn-w57-h34 rounded-5" href="http://localhost:3000/06_dash/08_board/6">관리</a>    
</div>
<hr className="mb-10"/>

<div className="w-560 h-360 d-flex justify-content-between mt-10 mb-10">

    <p className="fs-16 fw-500">로그인 이력 관리<br/><span className="fs-14 fw-400 Color77787b">로그인 이력을 확인할 수 있습니다.</span></p>
  
   <a className="btn btn-success mainBtn-w57-h34 rounded-5" href="http://localhost:3000/06_dash/08_board/7">관리</a>    
</div>
<hr/>



<MyModal/>
  </div>
</div>

  

</>
    );
}
export default Sec1;