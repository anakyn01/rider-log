import PassModal from "@/app/00_common/modal/4/PassModal";

export default function Page() {
  return (
    <>
<div className="d-flex justify-content-center align-items-center">
<div className="w-560">
<div className="logo-top-margin">
    <div className="d-flex justify-content-center">
    <img src='/images/riderlog_logo.svg' className="login-logo"/>
    </div>
</div>

    <div className="find">
      <h1 className="find-title">비밀번호 찾기</h1>
      <p className="find-body">아이디로 사용하시는 이메일 주소로 임시 비밀번호를 보내드립니다.<br/>
      임시 비밀번호로 로그인 후, 비밀번호 변경을 권장드립니다.</p>
    </div>
<form action="" className="was-validated">
  <div className="phone">
    <label htmlFor=""className="phone-title">아이디</label>
    <input type="text" className="form-control phone-input" id="" placeholder="user@domain.com" name="" required/>
    <div className="invalid-feedback phone-vali">아이디를 입력해주세요.<br/>올바른 이메일 형식으로 입력해 주세요</div>
  </div>

  <div className="phone-btn-group">
    
      <a className="phone-left-btn" href="http://localhost:3000/01_login">로그인 화면</a>

      <a className="phone-right-btn" href="http://localhost:3000/03_find/1" data-bs-toggle="modal" data-bs-target="#password">임시 비밀번호 받기</a> 
  </div>
 
</form>
  </div>
</div>
<PassModal/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
<script src="../../js/custom.js"></script>
</>
  );
  
}