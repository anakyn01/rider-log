import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Dm = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mt-50 d-flex justify-content-between align-items-center mb-30">

        <div className="">
            <p className="fs-16 fw-700">운전자 관리</p>
            <p>강남구점</p>
        </div>

        <button className="btn btn-success fs-12 text-white rounded-5 h-32">
        조직 선택
        </button>
      </div>

      <div className="mt-10">
        <input type="text" className="form-control h-50 rounded-3 input-bg mag" placeholder="운전자명, 차량번호, 연락처로 검색해보세요"/>
      </div>

<div className="d-flex w-100 justify-content-between align-items-center mt-10 mb-10">
    <div className="fs-12 Color77787b">총 21건</div>
    <input type="reset" value="검색 초기화" className="btn fs-12 Color77787b"/>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">김별따<br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">01012345678<br/><span className="fs-14 fw-400 Color77787b">시간제 보험 미가입</span></div>
    <div className="">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
    </div>
</div>







      </div>
<div className="mt-30 mb-30 d-flex justify-content-center">
<MobilePagenation/>
</div>
      
      <MobileFooter/>
</>
    );
}
export default Dm