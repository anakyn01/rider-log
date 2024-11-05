
import Excel from "../../button/Excel";
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CenterPagenation from "../../pagenation/centerPagenation";

const M2 = () => {
    return(
<>
<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <h6 className="fs-18 fw-700">담당자 관리</h6>
    <Excel/>
</div>

<div className="w-1144 h-24 d-flex justify-content-between my-4">
    <div className="w-564 border border-1 border-success p-3 rounded-3">
        <h6 className="text-success fs-16 fw-500">조직 유형이란?</h6>
        <table className="table table-borderless">
            <colgroup>
            <col style={{width:"100px"}}/>
            <col/>
            </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr className="fs-12">
                <th className="fs-14 fw-500">사업계약자</th><td className="fs-14 Color77787b">RIDERLOG와의 사업 계약을 체결한 회사입니다.</td>
            </tr>
            <tr className="fs-12">
                <th className="fs-14 fw-500">권역센터</th><td className="fs-14 Color77787b">사업계약자의 하위 조직 유형, 지역 및 권역별 센터 또는 HUB급 규모의 조직입니다.</td>
            </tr>
            <tr className="fs-12">
                <th className="fs-14 fw-500">지역지사</th><td className="fs-14 Color77787b">권역센터의 하위 조직 유형, 지역 지사 규모의 조직입니다.</td>
            </tr>
            <tr className="fs-12">
                <th className="fs-14 fw-500">대리점</th><td className="fs-14 Color77787b">지역지사의 하위 조직 유형, 대리점 규모의 조직입니다.</td>
            </tr>
        </tbody>
    </table>
    </div>

    <div className="w-564 border border-1 border-success p-3 rounded-3">
        <h6 className="text-success text-success fs-16 fw-500">담당자 권한이란?</h6>
        <table className="table table-borderless">
            <colgroup>
            <col style={{width:"110px"}}/>
            <col/>
            </colgroup>
        <thead>

        </thead>
        <tbody>
            <tr className="fs-12">
                <th className="fs-14 fw-500">조직담당자</th><td className="fs-14 Color77787b">하나의 조직에 한 명만 지정 가능합니다.<br/>담당 조직의 모든 정보를 확인하고 편집할 수 있습니다.</td>
            </tr>
            <tr className="fs-12">
                <th className="fs-14 fw-500">사고조치 담당자</th><td className="fs-14 Color77787b">하나의 조직에 여러 명 추가 가능합니다.<br/>담당 조직 내에서 발생한 사고 조치만 가능합니다.</td>
            </tr>
        </tbody>
    </table>
    </div>

</div>

<div className="w-1144 h-24 d-flex justify-content-between mb-4">


        <input type="text" className="form-control h-56 w-564 input-bg rounded-3" placeholder="조직명, 담당자명으로 검색해보세요"/>
      

            <button className="btn btn-outline-success w-178 h-56 mx-2">검색 초기화</button>



    {/*<div className="">
        <button className="btn btn-success w-178 h-56">조직 추가</button>
    </div>*/}

</div>
<h6 className="text-secondary fs-16 my-4 ColorC3c4c5">총 0건</h6>

<table className="table table-custom-40 w-1144">
    <colgroup>
    <col style={{width:"58x"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"150px"}}/>
    <col style={{width:"230px"}}/>
    <col style={{width:"116px"}}/>
    <col style={{width:"100px"}}/>
    <col style={{width:"190px"}}/>
    <col style={{width:"100px"}}/>
    </colgroup>
    <thead>
        <tr>
        <th>번호</th><th>차량번호</th><th>운전자명</th><th>조직명</th><th>보험가입여부</th><th>센서유형</th><th>센서번호</th><th>상세보기</th>
        </tr>
    </thead>
    <tbody>
       
        
    </tbody>
</table>
<CarModal1/>
<CarModal2/>
</>
    );
}
export default M2;