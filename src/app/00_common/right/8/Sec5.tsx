
import Delete from "../../toast/8/deviceToast";
const Sec5 = () => {
    return(
<>
<div className="w-1656 d-flex justify-content-center">
<div className="w-1512">
  <div className="d-flex">
  <p className="fs-18 fw-700">신뢰하는 기기</p>
  <div className="ml-525">
  <Delete/>
  </div>
</div>

<div className="w-438 h-40">
  <p className="fs-16 fw-400 Color77787b">
  기기 등록은 최대 3개까지 가능합니다.<br/>
  3개를 초과하는 경우, 최근 로그인 일시가 오래된 기기부터 삭제됩니다.
  </p>

</div>

<table className="table table-custom-40 w-1512 my-4">
    <colgroup>
        <col style={{width:"100px"}}/>
        <col style={{width:"380px"}}/>
        <col style={{width:"200px"}}/>
        <col style={{width:"350px"}}/>
        <col style={{width:"350px"}}/>
        <col style={{width:"132px"}}/>
    </colgroup>
  <thead>
    <tr>
      <th>번호</th><th>기기</th><th>운영체제</th><th>브라우저</th><th>최근 로그인 일시</th><th>관리</th>
    </tr>
  </thead>
  <tbody>
<tr>
  <td>1</td><td>Samung Galaxy S24</td><td>Android</td><td>Samsung Internet</td><td>2024-05-30 12:34</td>
  <td><a href="#" className="a-link text-dark" data-bs-toggle="modal" data-bs-target="#deleteModal">삭제</a></td>
</tr>
<tr>
  <td>2</td><td>Samung Galaxy S24</td><td>Android</td><td>Samsung Internet</td><td>2024-05-30 12:34</td><td><a href="#" className="a-link text-dark" data-bs-toggle="modal" data-bs-target="#deleteModal">삭제</a></td>
</tr>
  </tbody>
 </table>


</div>
</div>

</>
    );
}
export default Sec5;