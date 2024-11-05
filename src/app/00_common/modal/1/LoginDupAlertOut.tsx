const LoginDupAlertOut = () => {
    return(
<>
<div className="modal" id="loginDupOut">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content dupout">

<div className="text-center ">
      <div className="my-2 w-400 h-72">
        <h4 className="dup-title">중복 로그인 안내</h4>
        <div className="dup-body">
        다른 기기 및 브라우저에 접속되어<br/>
        현재 기기 및 브라우저에서 로그아웃 합니다
        </div>
      </div>
</div>

<div className="d-flex justify-content-between dupOutBtnGroup">
<button className="dupOutBtn">로그인</button>
</div>

    </div>
  </div>
</div>

</>
    );
}
export default LoginDupAlertOut;