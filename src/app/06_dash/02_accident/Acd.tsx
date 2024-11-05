import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Acd = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="d-flex justify-content-between align-items-center acc">

        <div className="accHead">
            <p className="title">사고 현황</p>
            <p className="body">강남구점</p>
        </div>

        <button className="w69h32mainBtn">
        조직 선택
        </button>
      </div>

      <div className="mt-10">
        <input type="date" className="form-control h-50 rounded-3" />
      </div>

      <div className="mt-10 d-flex justify-content-between w-100 border rounded-3 p-3 align-items-center h-64">
        <div className="h-48 text-center fs-12 mt-10 Color77787b">
        전체<br/>
        (21)
        </div>
        <div className="h-48 text-center fs-12 mt-10 Color77787b">
        미조치<br/>
        (2)
        </div>
        <div className="h-48 text-center fs-12 mt-10 Color77787b">
        조치 중<br/>
        (18)
        </div>
        <div className="h-48 text-center fs-12 mt-10 Color77787b">
        조치 완료<br/>
        (1)
        </div>
      </div>

<div className="d-flex w-100 justify-content-between align-items-center mt-10 mb-10">
    <div className="fs-12 Color77787b">총 21건</div>
    <input type="reset" value="검색 초기화" className="btn fs-12 Color77787b"/>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
    </div>
</div>

<div className="h-72 border rounded-3 p-3 d-flex justify-content-between align-items-center mt-10">
    <div className="fs-14 fw-700">강남구점 <br/><span className="fs-14 fw-400 Color77787b">2024-05-03 09:00</span></div>
    <div className="fs-14 fw-400">김별따 <br/><span className="fs-14 fw-400 Color77787b">서울가1234</span></div>
    <div className="fs-14 fw-400">
    조치 완료
    <span className="ml-2">
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L5.35355 4.64645C5.54882 4.84171 5.54882 5.15829 5.35355 5.35355L1.35355 9.35355C1.15829 9.54882 0.841709 9.54882 0.646447 9.35355C0.451184 9.15829 0.451184 8.84171 0.646447 8.64645L4.29289 5L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#5D5E60"/>
        </svg>
        </span>
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
export default Acd