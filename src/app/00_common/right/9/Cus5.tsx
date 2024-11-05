
import DashModal from "../../modal/8/DashModal";
import MyModal from "../../modal/8/MyModal";
import CenterPagenation from "../../pagenation/centerPagenation";
const Cus5 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
  <div className="content">
  <div className="w-1512">
  <p className="fs-18 fw-bold my-4">자주묻는 질문</p>

  <div className="d-flex justify-content-between w-1512 mb-5">
    <select name="" id="" className="form-select w-178 h-56 input-bg">
      <option value="">전체</option>
    </select>

    <input type="text" name="" id="" className="w-564 h-56 form-control rounded-3 input-bg mag" placeholder="검색어를 입력해주세요"/>
  </div>

  <p className="fs-14 text-secondary">총 100건</p>
  <table className="table">
    <colgroup>
        <col style={{width:"10%"}}/>
        <col style={{width:"80%"}}/>
        <col style={{width:"10%"}}/>
    </colgroup>
  <thead>
  </thead>
  <tbody>
<tr className="h-60 line60">
<td className="text-secondary">소속관리</td><td className="fw-bold"><a href="http://localhost:3000/06_dash/09_custom/9" className="a-link text-dark text-decoration-none">운전자의 정보를 변경하고 싶어요</a></td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">소속관리</td><td className="fw-bold">조직 담당자를 변경하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">주행분석</td><td className="fw-bold">운전자의 주행 경로를 확인하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">주행분석</td><td className="fw-bold">비밀번호를 변경하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">주행분석</td><td className="fw-bold">비밀번호를 변경하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">고객지원</td><td className="fw-bold">1:1 문의를 하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">고객지원</td><td className="fw-bold">1:1 문의를 하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">고객지원</td><td className="fw-bold">1:1 문의를 하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">고객지원</td><td className="fw-bold">1:1 문의를 하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">고객지원</td><td className="fw-bold">1:1 문의를 하고 싶어요</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
  </tbody>
 </table>

 <CenterPagenation/>
</div>
  </div>
</div>

</>
    );
}
export default Cus5;