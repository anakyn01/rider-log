import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Secu1 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title fs-16 fw-700">
      공지사항
      </div>

<div className="d-flex justify-content-between">
  <div className="">
    <div className="fs-14 fw-400">비밀번호 변경하기</div>
    <div className="fs-12 fw-400 mt-10 Color77787b">보안을 위해 주기적인 비밀번호 변경을 권장합니다.</div>
  </div>

  <div className="">
    <button className="btn btn-success h-34 rounded-5">변경</button>
  </div>
  
</div>
<hr className="mt-10"/>

<div className="mt-20">
  <div className="">
    <div className="fs-14 fw-400">2단계 인증 기본 수단</div>
    <div className="fs-12 fw-400 mt-10 Color77787b">2단계 인증에 필요한 인증코드 수신방법을 선택할 수 있습니다.</div>
  </div>

  <div className="d-flex justify-content-between mt-20">

<div className="form-check d-flex align-items-center">
  <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
  <label className="form-check-label fs-14" >이메일</label>
</div>

<div className="form-check d-flex align-items-center">
  <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" />
  <label className="form-check-label fs-14" >SMS문자</label>
</div>
    
  </div>
  
</div>
<hr className="mt-10"/>

<div className="d-flex justify-content-between mt-20">
  <div className="">
    <div className="fs-14 fw-400">신뢰하는 기기 관리</div>
    <div className="fs-12 fw-400 mt-10 Color77787b">로그인 시, 2단계 인증을 건너뛸 수 있습니다.</div>
  </div>

  <div className="">
    <button className="btn btn-success h-34 rounded-5">관리</button>
  </div>
  
</div>
<hr className="mt-10"/>

<div className="d-flex justify-content-between mt-20">
  <div className="">
    <div className="fs-14 fw-400">로그인 이력 관리</div>
    <div className="fs-12 fw-400 mt-10 Color77787b">로그인 이력을 확인할 수 있습니다.</div>
  </div>

  <div className="">
    <button className="btn btn-success h-34 rounded-5">관리</button>
  </div>
  
</div>
<hr className="mt-10"/>



<MobileFooter/>
      </div>
</>
    );
}
export default Secu1