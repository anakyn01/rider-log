const OrgarModal1 = () => {
    return(
<>
<div className="modal" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content w-440 h-192">


      <div className="modal-body text-center">
       <p className="fs-22">조직 추가 중단</p>
       <p className="fs-22">
       조직을 추가하지 않고, 페이지를 나가시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-light w-190 h-52" data-bs-dismiss="modal">취소</button>
       <button type="button" className="btn btn-success w-190 h-52" data-bs-dismiss="modal">조직 추가 중단</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default OrgarModal1;