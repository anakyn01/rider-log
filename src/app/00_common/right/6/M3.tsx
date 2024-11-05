
import CarModal1 from "../../modal/4/carModal1";
import CarModal2 from "../../modal/4/carModal2";
import CenterPagenation from "../../pagenation/centerPagenation";

const M3 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
    <div className="content">
    <div className="w-1512 h-24 d-flex justify-content-between my-4">
    <h6 className="fs-18 fw-700">담당자 상세</h6>
    <button className="btn btn-outline-success w-179 h-42">담당자 삭제</button>
</div>
<div className="w-1512 h-24 d-flex justify-content-between mb-4">
    <h6 className="w-67 fw-bold">담당자 정보</h6>
</div>

<table className="table table-bordered">
    <colgroup>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/>
    </colgroup>
  <thead>
  </thead>
  <tbody>
<tr>
    <th className="bg-light text-secondary">담당자명</th><td className="text-secondary">김별따</td><th className="bg-light text-secondary">가입일</th><td className="text-secondary">2024-05-10</td>
</tr>
<tr>
    <th className="bg-light text-secondary">조직명</th><td className="text-secondary">강남구청</td><th className="bg-light text-secondary">담당자 지정일</th><td className="text-secondary">2024-05-13</td>
</tr>
<tr>
    <th className="bg-light text-secondary">조직유형</th><td className="text-secondary">지역지사</td><th className="bg-light text-secondary">담당자 권한</th><td className="text-secondary">조직 담당자</td>
</tr>
<tr>
    <th className="bg-light text-secondary">이메일</th><td className="text-secondary">user@domain.com</td><th className="bg-light text-secondary">담당자 연락처</th><td className="text-secondary">01012345678</td>
</tr>
  </tbody>
 </table>

<CarModal1/>
<CarModal2/>
    </div>
</div>
</>
    );
}
export default M3;