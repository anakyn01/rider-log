const CarModal4 = () => {
    return(
<>
<div className="modal" id="carModal4">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content w-680 h-618">


      <div className="modal-body p-3">
        <div className="d-flex justify-content-between">
        <p className="fs-22">차량 불러오기</p><button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
       
      <input type="text" className="w-640 h-56 form-control rounded-2 bg-light" placeholder="차량번호, 차대번호로 검색해보세요"/>
      <div className="d-flex justify-content-between my-4">
        <p>총 21건</p>
        <input type="reset" className="btn"/>
      </div>
      <table className="table table-bordered w-626">
<thead>
  <tr className="table-light text-center">
    <th className="text-secondary">차량번호</th><th className="text-secondary">차대번호</th><th className="text-secondary">샌서유형</th><th className="text-secondary">운전자명</th>
  </tr>
  
</thead>
<tbody>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
  <tr>
    <td className="text-center">서울가1234</td>
    <td className="text-center">KMHDL41BP8A000001</td>
    <td className="text-center">LTE</td>
    <td className="text-center">김별따</td>
  </tr>
</tbody>
      </table>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-secondary w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-success w-190 h-52" data-bs-dismiss="modal">차량추가중단</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModal4;