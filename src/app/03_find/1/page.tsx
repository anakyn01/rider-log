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
      <h1 className="find-title">아이디 찾기</h1>
      <p className="find-body">회원가입 시, 입력하신 휴대폰 번호로 인증이 필요합니다</p>
    </div>

  <div className="phone">
    <label htmlFor=""className="phone-title">휴대폰 번호</label>
    <input type="text" className="form-control phone-input" id="" placeholder="숫자만 최대 11자 입력 가능" name=""/>
    <div className="invalid-feedback phone-vali">올바른 휴대폰 번호를 입력해주세요.</div>
  </div>

  <form action="" className="was-validated">
  <div className="phone">
    <div className="d-flex justify-content-between">
    <label htmlFor=""className="phone-title">인증코드</label>
    <label htmlFor=""className="phone-title text-danger">05:00</label>
    </div>
    <input type="text" className="form-control phone-input" id="" placeholder="6자리 인증코드를 입력해주세요." name="" required/>
    <div className="invalid-feedback phone-vali">올바른 휴대폰 번호를 입력해주세요.<br/>인증코드 재전송은 1일 5회까지 가능합니다.</div>
  </div>

  <div className="phone-btn-group">
    
      <a className="phone-left-btn" href="http://localhost:3000/01_login">로그인 화면으로</a>

      <a className="phone-right-btn" href="http://localhost:3000/03_find/1">인증코드 전송</a> 
  </div>

  <div className="phone-cert">
      <div className="ques">
      인증코드를 받지 못하셨나요?
      </div>
      <a href="#" className="ques-btn">인증코드 재전송(0/5)</a>
  </div>
 
</form>
  </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
<script src="../../js/custom.js"></script>
</>
  );
  
}