import Head1 from "../../table/four_1";
import InputCal from "../../input/InputCalender";
import T2 from "../../table/t2";
import CenterPagenation from "../../pagenation/centerPagenation";
import Excel from "../../button/Excel";
import OrlAddBtn from "../../button/OrlAddBtn";

const Ac8 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="w-67 fs-18 fw-bold">조직 관리</h6>
<Excel/>

</div>
<div className="w-1144 h-24 d-flex justify-content-between mb-4">
    <div className="w-758 h-56 d-flex">
        <div className="w-564">
        <input type="text" className="form-control h-56 input-bg" placeholder="조직명, 담당자명으로 검색해보세요"/>
        </div>        
        <div className="w-178 h-56">
            <button className="btn btn-outline-success btn-outline-success-w178-h56 mx-2">검색 초기화</button>
        </div>
    </div>

<OrlAddBtn/>

</div>
<h6 className="fs-16 mt-40 mb-20 Color77787b">총 0건</h6>
<table className="table table-custom-40">
    <colgroup>
    <col style={{width:"50px"}}/>
    <col style={{width:"200px"}}/>
    <col style={{width:"180px"}}/>
    <col style={{width:"110px"}}/>
    <col style={{width:"116px"}}/>
    <col style={{width:"100px"}}/>
    <col style={{width:"138px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"100px"}}/>
    </colgroup>
    <thead>
        <tr className="table-secondary text-center t-fs14-line-height-40">
            <th className="tableThColor">번호</th>
            <th className="tableThColor">조직명</th>
            <th className="tableThColor">소속 조직</th>
            <th className="tableThColor">조직 유형</th>
            <th className="tableThColor">등록 차량수</th>
            <th className="tableThColor">하위 조직수</th>
            <th className="tableThColor">담당자명</th>
            <th className="tableThColor">담당자 연락처</th>
            <th className="tableThColor">상세보기</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>
</>
    );
}
export default Ac8;