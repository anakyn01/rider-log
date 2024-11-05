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

      <h1 className="sign-comp-title">회원가입 완료</h1>


      <div className="sign-comp-body">
      회원가입이 완료되었습니다. 가입하신 정보로 로그인 후,<br/>
      RIDER LOG의 차량 관제 시스템을 이용하실 수 있습니다.
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