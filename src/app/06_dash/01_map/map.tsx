import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";


const Map = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>



<div className="d-flex w-100 justify-content-between align-items-center mt-160 mb-10">
    <div className="fs-12 Color77787b">총 21건</div>
    <input type="reset" value="검색 초기화" className="btn fs-12 Color77787b"/>
</div>
<div className="p-2">
<table className="table table-borderless text-center fs-12 fw-400 Color77787b table-hover">
    <thead>
<tr>
    <th>지점명</th><th>차량번호</th><th>운전자명</th>
</tr>
    </thead>
    <tbody>
<tr>
    <td>별따러가자</td>
    <td>서울가1234</td>
    <td>김별따</td>
</tr>
<tr>
    <td>별따러가자</td>
    <td>서울가1234</td>
    <td>김별따</td>
</tr>
<tr>
    <td>별따러가자</td>
    <td>서울가1234</td>
    <td>김별따</td>
</tr>
<tr>
    <td>별따러가자</td>
    <td>서울가1234</td>
    <td>김별따</td>
</tr>
    </tbody>
</table>
      </div>
      </div>
      
      <MobileFooter/>
</>
    );
}
export default Map