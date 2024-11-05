const SignMobile3 = () => {
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
            <div className="bar-text-active py-1 text-success">
            휴대폰<br/>번호 입력   
            </div>
        </div>

        <div className="">
            <div className="bar"></div>
            <div className="bar-text py-1">
            휴대폰<br/>번호 인증   
            </div>
        </div>

        <div className="">
            <div className="bar"></div>
            <div className="bar-text py-1">
            비밀번호<br/>입력   
            </div>
        </div>
    
    </div>
    <div className="text-dec">
    담당자님(user@domain.com)의<br/>
    이름을 입력해주세요
    </div>

<div className="mt-20">
<div className="fs-12">휴대폰 번호</div>
<input type="text" className="form-control h-42" placeholder="숫자만 최대 11자 입력 가능"/>
</div>


<div className="phone-btn-group">

<a className="phone-right-btn mt-10" href="http://localhost:3000/05_signup/2" data-bs-toggle="modal" data-bs-target="#password">이전 단계</a> 
    
<a className="phone-left-btn" href="http://localhost:3000/05_signup/3">다음 단계</a>


</div>

</div>
</>
    );
}
export default SignMobile3