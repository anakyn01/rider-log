const OrgarModal3 = () => {
    return(
<>
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-22">조직 삭제 실패</p>
       <p className="fs-22">
       삭제할 조직에 소속된 차량/운전자가 있는 경우,<br/>
       조직을 삭제할 수 없습니다
       </p>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-success form-control h-52" data-bs-dismiss="modal">확인</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default OrgarModal3;