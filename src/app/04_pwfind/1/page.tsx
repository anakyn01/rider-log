export default function Page() {
    return (
<div className="d-flex justify-content-center align-items-center">
<div className="w-560">
<div className="logo-top-margin">
    <div className="d-flex justify-content-center">
        <img src='/images/riderlog_logo.svg' className="login-logo"/>
    </div>
</div>

      <div className="id-complete">
        <h1 className="com-title">임시 비밀번호 발송 완료</h1>
        <p className="com-body">아래 이메일 주소로 임시 비밀번호가 발송되었습니다.<br/>
        임시 비밀번호로 로그인 후, 비밀번호 변경을 권장드립니다.</p>
      </div>

<div className="id-box">
riderlog@star-pickers.com
</div>

<div className="phone-btn-group">
    <a className="phone-right-btn4" href="http://localhost:3000/01_login">로그인 화면으로</a> 
</div>


    </div>
</div>
    );
    
}