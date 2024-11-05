export default function Page() {
    return (
<>
<div className="d-flex justify-content-center align-items-center">

<div className="w-560 justify-content-center">

<div className="logo-top-margin">
    <div className="d-flex justify-content-center">
    <img src='/images/riderlog_logo.svg' className="login-logo"/>
    </div>
</div>

  <div className="sing-comp">

      <h1 className="sign-comp-title">회원가입 초대가 만료되었습니다.</h1>


      <div className="sign-comp-body">
      수신하신 초대 메일의 URL이 더 이상 유효하지 않습니다.<br/>
      상위 담당자에게 문의해주세요.
      </div>    

      <div className="sign-comp-btn-group">
        <a href="http://localhost:3000/01_login/" className="sign-comp-btn">로그인 화면으로</a>
      </div>
  </div>

 
        
        
      </div>
</div>
</>
    );
    
}