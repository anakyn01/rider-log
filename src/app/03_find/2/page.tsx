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
        <h1 className="com-title">아이디 찾기</h1>
        <p className="com-body">회원가입의 정보로 가입되어 있는 아이디를 찾았습니다</p>
      </div>

<div className="id-box">
riderlog@star-pickers.com
</div>

<div className="phone-btn-group">
    
    <a className="phone-left-btn" href="http://localhost:3000/04_pwfind/1">비밀번호찾기</a>

    <a className="phone-right-btn3" href="http://localhost:3000/01_login">로그인 화면으로</a> 
</div>


    </div>
</div>
    );
    
}