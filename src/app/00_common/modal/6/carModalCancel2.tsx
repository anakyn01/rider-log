const CarModalCancel2 = () => {
    return(
<>
<div className="modal" id="carModalCancel2">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content cancel">


      <div className="modal-body text-center">
       <p className="cancel-Head">선택된 운전자 삭제 확인</p>
       <p className="cancel-Body">
       선택하신 9명의 운전자를 정말 삭제하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between mt-30">
       <button type="button" className="btn btn-light mainBtn-gray w-190 h-52" data-bs-dismiss="modal">취소</button>
       <a type="button" className="btn btn-danger btn-danger-a w-190 h-52" href="http://localhost:3000/06_dash/05_driver/0_1">삭제</a>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModalCancel2;