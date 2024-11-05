import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";
import MobilePagenation from "@/app/00_common/pagenation/MobilePagenation";

const Mc11 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title">
      공지사항
      </div>
      <div className="input-group mt-20 mb-20">
        <input type="text" className="form-control mag h-42" placeholder="검색어를 입력해주세요"/>
      </div>

        <div className="">
          <div className="hash d-flex">
              <button className="btn bg-success text-white rounded-4 mr-2">전체</button>
              <button className="btn text-success rounded-4 border-success mr-2">공지</button>
              <button className="btn text-success rounded-4 border-success mr-2">이벤트</button>
          </div>
        </div>

<div className="count mt-15 mb-10">
총 0건
</div>

<div className="d-flex justify-content-center align-items-center h-322">
<div className="ColorC3c4c5">
표시할 내용이 없습니다.
</div>
</div>



<MobileFooter/>
      </div>
</>
    );
}
export default Mc11