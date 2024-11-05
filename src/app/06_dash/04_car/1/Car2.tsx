import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Car2 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mt-50 d-flex justify-content-between align-items-center mb-30">

        <div className="">
            <p className="fs-16 fw-700">차량 관리</p>
            <p>강남구점</p>
        </div>

        <button className="btn btn-success fs-12 text-white rounded-5 h-32">
        조직 선택
        </button>
      </div>

      <div className="mt-10">
        <input type="text" className="form-control h-50 rounded-3 input-bg mag" placeholder="차량번호, 운전자명, 차대번호로 검색해보세요"/>
      </div>

<div className="d-flex w-100 justify-content-between align-items-center mt-10 mb-10">
    <div className="fs-12 Color77787b">총 21건</div>
    <input type="reset" value="검색 초기화" className="btn fs-12 Color77787b"/>
</div>

<div className="w-100 h-300 d-flex justify-content-center align-items-center">
    <div className="ColorC3c4c5">
    표시할 내용이 없습니다.
    </div>
</div>






      </div>

      
      <MobileFooter/>
</>
    );
}
export default Car2