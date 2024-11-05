import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const My5 = () => {
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

<div className="mt-10 w-100">
      <label htmlFor="" className="fs-12 fw-700">이름</label>
      <input type="text" className="form-control h-56 input-bg rounded-3" id="" placeholder="최대 10자 입력 가능" name="" value="김별따"/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback ColorDb121a fs-14">이름을 입력해주세요.</div>
    </div>

    <div className="mt-10 w-100">
      <label htmlFor="" className="fs-12 fw-700">휴대폰번호</label>
      <div className="d-flex justify-content-between">
      <input type="tel" className="form-control h-56 w-348 input-bg-2" id="" placeholder="01012345678" name=""/>
      <button className="btn btn-success w-160" data-bs-toggle="modal" data-bs-target="#myModal">변경</button>
      </div>
      
    </div>
    <div className="mt-10 w-100">
      <label htmlFor="" className="fs-12 fw-700">아이디</label>
      <input type="text" className="form-control h-56 input-bg-2" id="" placeholder="riderlog@star-pickers.com" name=""/>
    </div>

    <div className="mt-50 mb-50">
        <a className="btn btn-success w-560 h-56 mainBtn" href="http://localhost:3000/06_dash/08_board/3_5">변경사항저장</a>
    </div>


<MobileFooter/>
      </div>
</>
    );
}
export default My5