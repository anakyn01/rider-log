const CarModal2 = () => {
    return(
<>
<div className="modal" id="carModal2">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440">


      <div className="modal-body text-center  h-192">
       <div className="fs-18 fw-700">선택된 차량 삭제 확인</div>
       <div className="fs-18 fw-400 mt-10 mb-10">
       선택하신 9대의 차량을 정말 삭제하시곘습니까?
       </div>
       <div className="w-400 d-flex justify-content-between mt-40">
       <button type="button" className="btn btn-light w-190 h-52 mainBtn-gray" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-danger w-190 h-52" data-bs-dismiss="modal">삭제</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModal2;