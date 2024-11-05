
import CenterPagenation from "../../pagenation/centerPagenation";
const Cus3 = () => {
    return(
<>
<div className="d-flex w-1656 justify-content-center">
  <div className="content">
  <div className="w-1512">
  <p className="fs-18 fw-bold my-4">공지사항</p>

  <div className="d-flex justify-content-between w-1512 mb-5">
    <select name="" id="" className="form-select w-178 h-56 input-bg">
      <option value="">전체</option>
    </select>

    <input type="text" name="" id="" className="w-564 h-56 form-control rounded-3 input-bg mag" value="업데이트"/>
  </div>

  <p className="fs-16 text-secondary">총 100건</p>
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
<td className="text-secondary">공지</td><td className="fw-bold"><a href="http://localhost:3000/06_dash/09_custom/7" className="a-link text-dark text-decoration-none">업데이트 버전안내</a></td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary ">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary ">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
</tr>
<tr className="h-60 line60">
<td className="text-secondary">공지</td><td className="fw-bold">업데이트 버전안내</td><td className="text-secondary text-right">2024-05-16</td>
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
export default Cus3;