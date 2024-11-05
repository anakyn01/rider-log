const AccAdd = () => {
    return(
<>
<div className="modal" id="accModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-216 rounded-3 ">


      <div className="modal-body text-center">
       <p className="fs-18 fw-700 mb-10 mt-20">사고 조치 등록</p>
       <p className="fs-18 fw-400">
       입력하신 내용으로<br/>
사고 조치를 등록하시겠습니까?
       </p>
       <div className="w-400 h-52 d-flex justify-content-between mt-30">
       <button type="button" className="btn btn-light w-190 h-52 mainBtn-gray" data-bs-dismiss="modal">취소</button>
       <a className="btn btn-success btn-success-w190-h52" data-bs-dismiss="modal" href="http://localhost:3000/06_dash/02_accident/3">삭제</a>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default AccAdd