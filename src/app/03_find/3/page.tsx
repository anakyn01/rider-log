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
        <h1 className="com-title">아이디 찾기 실패</h1>
        <p className="com-body">입력하신 휴대폰 번호로 가입된 아이디가 없습니다.</p>
      </div>

{/*<div className="id-box">
riderlog@star-pickers.com
</div>*/}

<div className="phone-btn-group">
    
    <a className="phone-left-btn" href="http://localhost:3000/03_find/">다시 시도하기</a>

    <a className="phone-right-btn3" href="http://localhost:3000/01_login">로그인 화면으로</a> 
</div>


    </div>
</div>
    );
    
}