const CertModal = () => {
    return(
<>
<div className="modal" id="cert1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-216 p-3">

<div className="text-center w-400">
      <div className="my-2">
        <h4 className="modal-title fs-18 fw-700">인증 실패</h4>
        <div className="my-2 fs-18 fw-500 text-center">
        잘못된 인증코드입니다.<br/>
        인증코드를 다시 확인해주세요.
        </div>
      </div>

      <div className="mt-30">
        <button type="button" className="btn btn-success w-100 h-52" data-bs-dismiss="modal">확인</button>
      </div>
</div>

    </div>
  </div>
</div>

</>
    );
}
export default CertModal;