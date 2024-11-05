export default function DeleteModal() {
    return (
        <>
<div className="modal" id="deleteModal">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-264 rounded-4 d-flex justify-content-center align-items-center">
        <div className="text-center w-400 h-136">
            <p className="fs-18 fw-700 mt-10 mb-10">신뢰하는 기기 삭제 확인</p>
            <p className="fs-18 fw-400">
            해당 기기 및 브라우저를 신뢰하는 기기에서 삭제하면,<br/>
            나중에 해당 기기 및 브라우저로 로그인 시,<br/>
            2단계 인증이 필요합니다.<br/>
            신뢰하는 기기에서 삭제하시겠습니까?<br/>
            </p>
            <div className="d-flex justify-content-between w-400 h-52 mt-30">
                <button className="btn btn-light w-190 h-52" data-bs-dismiss="modal">취소</button>
                <a className="btn btn-success w-190 h-52 mainBtn" href="http://localhost:3000/06_dash/08_board/8">삭제</a>
            </div>
        </div>
    </div>
  </div>
</div>      
        </>
    )
}

