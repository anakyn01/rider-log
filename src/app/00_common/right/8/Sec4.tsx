
import DashModal from "../../modal/8/DashModal";
import MyModal from "../../modal/8/MyModal";
import CenterPagenation from "../../pagenation/centerPagenation";
const Sec4 = () => {
    return(
<>
<div className="w-1656 d-flex justify-content-center">
  <div className="w-1512">
  <p className="fs-18 fw-700">로그인 이력</p>


<table className="table table-bordered table-custom-40 w-1512 mt-2">
    <colgroup>
        <col style={{width:"60px"}}/>
        <col style={{width:"160px"}}/>
        <col style={{width:"220px"}}/>
        <col style={{width:"200px"}}/>
        <col style={{width:"200px"}}/>
        <col style={{width:"180px"}}/>
        <col style={{width:"312px"}}/>
        <col style={{width:"180px"}}/>
    </colgroup>
  <thead>
    <tr className="table-light text-center">
      <th>번호</th><th>기기</th><th>운영체제</th><th>브라우저</th><th>IP</th><th>로그인 지역</th><th>최근 로그인 일시</th><th>최초 로그인 일시</th>
    </tr>
  </thead>
  <tbody>
<tr className="text-center">
  <td>1</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>2</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>3</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>4</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>5</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>6</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>7</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>8</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>9</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
<tr className="text-center">
  <td>10</td><td>PC</td><td>Windows 10</td><td>Chrome</td><td>123.123.123.123</td><td>대한민국 서울특별시</td><td>2024-05-30 12:34</td><td>2024-05-30 12:34</td>
</tr>
  </tbody>
 </table>

<CenterPagenation/>
  </div>

</div>


</>
    );
}
export default Sec4;