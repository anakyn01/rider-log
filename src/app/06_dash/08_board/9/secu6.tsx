import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Secu6 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title fs-16 fw-700">
      비밀번호 변경하기
      </div>
<form className="was-validated">
<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">현재 비밀번호</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="비밀번호를 입력해주세요" required/>
  <div className="invalid-feedback fs-12">비밀번호를 입력해주세요.<br/>비밀번호가 일치하지 않습니다.</div>
</div>

<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">새로운 비밀번호</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="새로운 비밀번호를 입력해주세요." required/>
  <div className="invalid-feedback fs-12">새로운 비밀번호를 입력해주세요.</div>
<div className="fs-12 ColorC3c4c5">
  <span className="mr-2">
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.00004" cy="7.00065" r="6.66667" fill="#DB121A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.52864 4.52925C4.78899 4.2689 5.2111 4.2689 5.47145 4.52925L7.00004 6.05784L8.52864 4.52925C8.78899 4.2689 9.2111 4.2689 9.47145 4.52925C9.7318 4.7896 9.7318 5.21171 9.47145 5.47206L7.94285 7.00065L9.47145 8.52925C9.7318 8.7896 9.7318 9.21171 9.47145 9.47206C9.2111 9.73241 8.78899 9.73241 8.52864 9.47206L7.00004 7.94346L5.47145 9.47206C5.2111 9.73241 4.78899 9.73241 4.52864 9.47206C4.26829 9.21171 4.26829 8.7896 4.52864 8.52925L6.05723 7.00065L4.52864 5.47206C4.26829 5.21171 4.26829 4.7896 4.52864 4.52925Z" fill="white"/>
</svg>

  </span>
  영어 대문자, 소문자, 숫자, 특수문자 중 3종류 이상</div>
<div className="fs-12 ColorC3c4c5">
<span className="mr-2">
<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.00004" cy="7.00065" r="6.66667" fill="#DB121A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.52864 4.52925C4.78899 4.2689 5.2111 4.2689 5.47145 4.52925L7.00004 6.05784L8.52864 4.52925C8.78899 4.2689 9.2111 4.2689 9.47145 4.52925C9.7318 4.7896 9.7318 5.21171 9.47145 5.47206L7.94285 7.00065L9.47145 8.52925C9.7318 8.7896 9.7318 9.21171 9.47145 9.47206C9.2111 9.73241 8.78899 9.73241 8.52864 9.47206L7.00004 7.94346L5.47145 9.47206C5.2111 9.73241 4.78899 9.73241 4.52864 9.47206C4.26829 9.21171 4.26829 8.7896 4.52864 8.52925L6.05723 7.00065L4.52864 5.47206C4.26829 5.21171 4.26829 4.7896 4.52864 4.52925Z" fill="white"/>
</svg>

</span>
  8자리 이상의 비밀번호</div>
</div>

<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">새로운 비밀번호 확인</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="새로운 비밀번호를 한 번 더 입력해주세요" required/>
  <div className="invalid-feedback fs-12">새로운 비밀번호가 일치하지 않습니다.</div>
</div>

<div className="mt-60 mb-60">
  <button className="btn btn-light w-100 h-42">
  비밀번호 변경하기
  </button>
</div>
</form>
<MobileFooter/>
      </div>
</>
    );
}
export default Secu6