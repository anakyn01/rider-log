const CarModalCancel = () => {
    return(
<>
<div className="modal" id="carModalCancel">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-18 fw-700">운전자 배정 취소 확인</p>
       <p className="fs-18 fw-400">
       차량에 배정된 운전자를 배정 취소하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between mt-30">
       <button type="button" className="btn btn-light mainBtn-gray w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-danger w-190 h-52" data-bs-dismiss="modal">배정취소</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModalCancel;