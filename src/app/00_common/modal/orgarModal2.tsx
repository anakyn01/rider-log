const OrgarModal2 = () => {
    return(
<>
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-22">조직 삭제 확인</p>
       <p className="fs-22">
       정말 조직을 삭제하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-light w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-danger w-190 h-52" data-bs-dismiss="modal">삭제</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default OrgarModal2;