import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Secu7 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title fs-16 fw-700">
      비밀번호 변경하기
      </div>

<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">현재 비밀번호</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="비밀번호를 입력해주세요"/>
</div>

<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">새로운 비밀번호</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="새로운 비밀번호를 입력해주세요."/>
<div className="fs-12 ColorC3c4c5">
  <span className="mr-2">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.99992" cy="8.00065" r="6.66667" fill="#019868"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1382 6.19526C11.3985 6.45561 11.3985 6.87772 11.1382 7.13807L7.47149 10.8047C7.21114 11.0651 6.78903 11.0651 6.52868 10.8047L4.86201 9.13807C4.60166 8.87772 4.60166 8.45561 4.86201 8.19526C5.12236 7.93491 5.54447 7.93491 5.80482 8.19526L7.00008 9.39052L10.1953 6.19526C10.4557 5.93491 10.8778 5.93491 11.1382 6.19526Z" fill="white"/>
</svg>

  </span>
  영어 대문자, 소문자, 숫자, 특수문자 중 3종류 이상</div>
<div className="fs-12 ColorC3c4c5">
<span className="mr-2">
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.99992" cy="8.00065" r="6.66667" fill="#019868"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1382 6.19526C11.3985 6.45561 11.3985 6.87772 11.1382 7.13807L7.47149 10.8047C7.21114 11.0651 6.78903 11.0651 6.52868 10.8047L4.86201 9.13807C4.60166 8.87772 4.60166 8.45561 4.86201 8.19526C5.12236 7.93491 5.54447 7.93491 5.80482 8.19526L7.00008 9.39052L10.1953 6.19526C10.4557 5.93491 10.8778 5.93491 11.1382 6.19526Z" fill="white"/>
</svg>


</span>
  8자리 이상의 비밀번호</div>
</div>

<div className="mt-20 mb-30">
  <div className="fs-12 fw-700">새로운 비밀번호 확인</div>
  <input type="text" className="h-42 form-control rounded-3" placeholder="새로운 비밀번호를 한 번 더 입력해주세요"/>
</div>

<div className="mt-60 mb-60">
  <button className="btn btn-success w-100 h-42">
  비밀번호 변경하기
  </button>
</div>

<MobileFooter/>
      </div>
</>
    );
}
export default Secu7