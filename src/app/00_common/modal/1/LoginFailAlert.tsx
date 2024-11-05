const LoginFailAlert = () => {
    return(
<>
<div className="modal" id="loginfail">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content fail p-3">

      <div className="text-center">

              <h4 className="fail-title">로그인 실패</h4>
              <div className="fail-body">
              아이디 또는 비밀번호를 확인해주세요
              </div>
 

            <div className="">
              <button type="button" className="btn btn-success w-100 failBtn" data-bs-dismiss="modal">확인</button>
            </div>
      </div>

    </div>
  </div>
</div>

</>
    );
}
export default LoginFailAlert;