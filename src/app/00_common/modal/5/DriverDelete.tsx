const DriverDelete = () => {
    return(
<>
<div className="modal" id="driverdelete">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-18 fw-700 mt-10 mb-10">운전자 삭제 확인</p>
       <p className="fs-18 fw-400 mt-10 mb-10">
       정말 운전자를 삭제하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between mt-40">
       <button type="button" className="btn btn-light mainBtn-gray w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-danger w-190 h-52" data-bs-dismiss="modal">삭제</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default DriverDelete;