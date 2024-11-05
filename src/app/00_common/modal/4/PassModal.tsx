const PassModal = () => {
    return(
<>
<div className="modal" id="password">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content w-440 h-192 p-3 rounded-3">

<div className="text-center w-440">
      <div className="my-2">
        <h4 className="modal-title fs-18 fw-700 mb-30">비밀번호 찾기 실패</h4>
        <div className="my-2 fs-18 text-center mb-20">
        입력하신 아이디로 가입된 계정이 없습니다.
        </div>
      </div>

      <div className="mt-4 mb-3">
        <button type="button" className="btn btn-success w-100 h-52" data-bs-dismiss="modal">Close</button>
      </div>
</div>

    </div>
  </div>
</div>

</>
    );
}
export default PassModal;