import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Acd1 = () => {
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
export default Acd1