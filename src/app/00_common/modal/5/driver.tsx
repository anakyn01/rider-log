const Driver = () => {
    return(
<>
<div className="modal" id="driver">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content w-680 h-618">


      <div className="modal-body">
<div className="d-flex justify-content-between align-items-center">
  <p className="fs-18 fw-700">차량 불러오기</p>
  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
</div>
<input type="text" className="form-control bg-light h-56" placeholder="차량번호, 차대번호로 검색해보세요"/>
<div className="d-flex justify-content-between align-items-center my-3">
  <p className="fs-16 fw-500">총21건</p>
  <input type="reset" className="btn Color77787b" value="검색초기화"/>
</div>
 <table className="table table-borderless table-hover popup-table">
  <thead>
<tr className="text-center">
<th>차량번호</th><th>차대번호</th><th>센서유형</th><th>운전자명</th>
</tr>
  </thead>
  <tbody>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
<tr>
  <td>서울가1234</td>
  <td>KMHDL41BP8A000001</td>
  <td>LTE</td>
  <td>김별따</td>
</tr>
  </tbody>
 </table>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default Driver;