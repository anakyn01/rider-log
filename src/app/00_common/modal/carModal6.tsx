const CarModal6 = () => {
    return(
<>
<div className="modal" id="carModal6">
  <div className="modal-dialog">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-22">차량 소속 변경 확인</p>
       <p className="fs-22">
       차량에 배정되어 있는 운전자가 있는 경우,<br/>
운전자 배정이 취소되며, 차량의 소속만 변경됩니다.<br/>
차량의 소속 변경을 계속하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-secondary w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-success w-190 h-52" data-bs-dismiss="modal">소속변경</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModal6;