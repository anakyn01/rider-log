import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Acd2 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="d-flex justify-content-between align-items-center acc">

        <div className="accHead">
            <p className="title">사고 상세</p>
        </div>

        <button className="w93h32mainBtn">
        사고조치 등록
        </button>
      </div>

<div className="fs-14 fw-500">사고 정보</div>
<div className="d-flex mt-10">
  <div className="w-25 fs-12 fw-400 Color77787b">사고발생일시</div>
  <div className="w-75 fs-14 fw-400">2024-06-04 16:00</div>
</div>
<div className="d-flex mt-10">
  <div className="w-25 fs-12 fw-400 Color77787b">사고발생위치</div>
  <div className="w-75 fs-14 fw-400">서울특별시 서초구 매헌로 16, 12층인데 주소가 2줄인 경우까지 그 이상인...</div>
</div>
<div className="d-flex mt-10">
  <div className="w-25 fs-12 fw-400 Color77787b">사고조치 완료 여부</div>
  <div className="w-75 fs-14 fw-400">사고조치 미완료</div>
</div>    

<div className="mt-10 mb-10">
  <button className="btn btn-outline-danger h-42 w-100">
  사고 위치 확인
  </button>
</div>

<div className="mt-10 mb-10">
    <p className="fs-14 fw-700">사고 조치 내역</p>
</div>

<div className="h-88 border rounded-3 p-3 d-flex justify-content-between mt-10">
  <div className="">
    <div className="fs-12 fw-700">조치 중 </div>
    <div className="fs-12 fw-400 Color77787b">강남구점</div>
    <div className="fs-12 fw-400">운전자에게 유선 연락</div>
  </div>
  <div className="text-right fs-12 fw-400">
  2024-05-07 11:08<br/>
  <span className="fs-12 fw-400 Color77787b">김별따</span>
  </div>
</div>

<div className="h-88 border rounded-3 p-3 d-flex justify-content-between mt-10">
  <div className="">
    <div className="fs-12 fw-700">조치 중 </div>
    <div className="fs-12 fw-400 Color77787b">강남구점</div>
    <div className="fs-12 fw-400">운전자에게 유선 연락</div>
  </div>
  <div className="text-right fs-12 fw-400">
  2024-05-07 11:08<br/>
  <span className="fs-12 fw-400 Color77787b">김별따</span>
  </div>
</div>

<div className="h-88 border rounded-3 p-3 d-flex justify-content-between mt-10">
  <div className="">
    <div className="fs-12 fw-700">조치 중 </div>
    <div className="fs-12 fw-400 Color77787b">강남구점</div>
    <div className="fs-12 fw-400">운전자에게 유선 연락</div>
  </div>
  <div className="text-right fs-12 fw-400">
  2024-05-07 11:08<br/>
  <span className="fs-12 fw-400 Color77787b">김별따</span>
  </div>
</div>

<div className="h-88 border rounded-3 p-3 d-flex justify-content-between mt-10">
  <div className="">
    <div className="fs-12 fw-700">조치 중 </div>
    <div className="fs-12 fw-400 Color77787b">강남구점</div>
    <div className="fs-12 fw-400">운전자에게 유선 연락</div>
  </div>
  <div className="text-right fs-12 fw-400">
  2024-05-07 11:08<br/>
  <span className="fs-12 fw-400 Color77787b">김별따</span>
  </div>
</div>

<div className="h-88 border rounded-3 p-3 d-flex justify-content-between mt-10">
  <div className="">
    <div className="fs-12 fw-700">조치 중 </div>
    <div className="fs-12 fw-400 Color77787b">강남구점</div>
    <div className="fs-12 fw-400">운전자에게 유선 연락</div>
  </div>
  <div className="text-right fs-12 fw-400">
  2024-05-07 11:08<br/>
  <span className="fs-12 fw-400 Color77787b">김별따</span>
  </div>
</div>
      </div>

      
      <MobileFooter/>
</>
    );
}
export default Acd2