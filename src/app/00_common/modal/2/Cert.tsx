const Cert = () => {
    return(
<>
<div className="modal" id="cert2">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-240">

<div className="d-flex justify-content-center w-440 p-2">
    <div className="text-center">
    <h4 className="modal-title fs-18 fw-700 mt-30 mb-20">인증 코드 만료</h4>
          <div className="my-2 fs-18 text-center">
          제한시간이 만료된 인증코드입니다.<br/>
          인증코드를 재전송하여,<br/>
          새로운 인증코드로 시도해주세요.
          </div>
    </div>
  </div>

<div className="d-flex justify-content-center w-440">
    <div className="mt-4 mb-3 w-400">
        <button type="button" className="btn btn-success w-100 h-52" data-bs-dismiss="modal">확인</button>
    </div>
</div>



    </div>
  </div>
</div>

</>
    );
}
export default Cert;