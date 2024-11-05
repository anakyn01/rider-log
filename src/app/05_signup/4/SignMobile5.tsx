const SignMobile5 = () => {
    return(
<>
<div className="signup">
    <div className="logo-top-margin">
        <div className="d-flex justify-content-center">
            <img src='/images/riderlog_logo.svg' className="login-logo"/>
        </div>
    </div>   

    <h1 className="signup-title">RIDER LOG 차량 관제 시스템 회원가입</h1>

    <div className="d-flex justify-content-between bargroup">
        <div className="">
            <div className="bar-active"></div>
            <div className="bar-text py-3 text-dark">
            약관 동의   
            </div>
        </div>

        <div className="">
            <div className="bar-active"></div>
            <div className="bar-text py-3">
            이름 입력   
            </div>
        </div>

        <div className="">
            <div className="bar-active"></div>
            <div className="bar-text py-1 text-success">
            휴대폰<br/>번호 입력   
            </div>
        </div>

        <div className="">
            <div className="bar-active"></div>
            <div className="bar-text py-1">
            휴대폰<br/>번호 인증   
            </div>
        </div>

        <div className="">
            <div className="bar-active"></div>
            <div className="bar-text-active py-1">
            비밀번호<br/>입력   
            </div>
        </div>
    
    </div>
    <div className="text-dec">
    01012345678로 보내드린<br/>
    6자리 인증코드를 입력해주세요.
    </div>


<div className="d-flex justify-content-between mt-20">
  <p className="fs-12 fw-500">비밀번호 입력</p>
  </div>

<input type="text" className="form-control input-bg w-560 h-42 rounded-3" placeholder="비밀번호를 입력해주세요" required/>
<div className="ColorC3c4c5 fs-12">
<span className="mr-2">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.00008" cy="9.00033" r="8.33333" fill="#DB121A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91083 5.91107C6.23626 5.58563 6.7639 5.58563 7.08934 5.91107L9.00008 7.82181L10.9108 5.91107C11.2363 5.58563 11.7639 5.58563 12.0893 5.91107C12.4148 6.23651 12.4148 6.76414 12.0893 7.08958L10.1786 9.00033L12.0893 10.9111C12.4148 11.2365 12.4148 11.7641 12.0893 12.0896C11.7639 12.415 11.2363 12.415 10.9108 12.0896L9.00008 10.1788L7.08934 12.0896C6.7639 12.415 6.23626 12.415 5.91083 12.0896C5.58539 11.7641 5.58539 11.2365 5.91083 10.9111L7.82157 9.00033L5.91083 7.08958C5.58539 6.76414 5.58539 6.23651 5.91083 5.91107Z" fill="white"/>
</svg>
</span>
영어 대문자, 소문자, 숫자, 특수문자 중 3종류 이상<br/>
<span className="mr-2">
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.00008" cy="9.00033" r="8.33333" fill="#DB121A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.91083 5.91107C6.23626 5.58563 6.7639 5.58563 7.08934 5.91107L9.00008 7.82181L10.9108 5.91107C11.2363 5.58563 11.7639 5.58563 12.0893 5.91107C12.4148 6.23651 12.4148 6.76414 12.0893 7.08958L10.1786 9.00033L12.0893 10.9111C12.4148 11.2365 12.4148 11.7641 12.0893 12.0896C11.7639 12.415 11.2363 12.415 10.9108 12.0896L9.00008 10.1788L7.08934 12.0896C6.7639 12.415 6.23626 12.415 5.91083 12.0896C5.58539 11.7641 5.58539 11.2365 5.91083 10.9111L7.82157 9.00033L5.91083 7.08958C5.58539 6.76414 5.58539 6.23651 5.91083 5.91107Z" fill="white"/>
</svg>
</span>
8자리 이상의 비밀번호
</div>
</div>

<div className="d-flex justify-content-between mt-30">
  <p className="fs-12 fw-500">비밀번호 확인</p>
  </div>
  <input type="password" className="form-control input-bg w-560 h-42 rounded-3" placeholder="비밀번호를 입력해주세요" required/>



<div className="phone-btn-group">

<a className="phone-right-btn mt-10" href="http://localhost:3000/05_signup/4" data-bs-toggle="modal" data-bs-target="#password">이전 단계</a> 
    
<a className="phone-left-btn" href="http://localhost:3000/05_signup/5">다음 단계</a>


</div>
</>
    );
}
export default SignMobile5