import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const My1 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>

<div className="mt-40">
    <div className="mobile-title fs-16 fw-700">
      내 정보
      </div>
      <div className="fs-10 Color77787b">
      개인정보 및 계정 보호를 위해, 현재 사용 중인 비밀번호를 입력해주세요.
      </div>
</div>

<form className="was-validated">


<div className="mt-20">
<input type="text" className="form-control h-42" placeholder="비밀번호를 입력해주세요" required/>
<div className="invalid-feedback fs-12">비밀번호를 입력해주세요.<br/>
비밀번호가 일치하지 않습니다</div>
</div>

<div className="mt-60 mb-60">
  <button className="btn btn-light w-100 h-42">
  확인
  </button>
</div>
</form>
<MobileFooter/>
      </div>
</>
    );
}
export default My1