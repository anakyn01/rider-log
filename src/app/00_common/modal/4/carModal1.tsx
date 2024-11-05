const CarModal1 = () => {
    return(
<>
<div className="modal" id="carModal1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-240 rounded-3">


      <div className="modal-body text-center">
       <p className="fs-18 fw-700 mb-10 mt-10">선택된 차량 소속 변경 확인</p>
       <p className="fs-18 fw-400 mb-10">
       차량에 배정되어 있는 운전자가 있는 경우,<br/>
운전자 배정이 취소되며, 차량의 소속만 변경됩니다.<br/>
선택하신 차량 9대의 소속 변경을 계속하시겠습니까?<br/>
       </p>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-light w-190 h-52 mainBtn-gray" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-success w-190 h-52" data-bs-dismiss="modal">소속변경</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModal1;