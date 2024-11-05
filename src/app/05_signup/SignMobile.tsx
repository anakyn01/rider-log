const SignMobile = () => {
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
            <div className="bar-text py-3">
            약관 동의   
            </div>
        </div>

        <div className="">
            <div className="bar"></div>
            <div className="bar-text py-3">
            이름 입력   
            </div>
        </div>

        <div className="">
            <div className="bar"></div>
            <div className="bar-text py-1">
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
    RIDER LOG 차량 관제 시스템 이용을 위한<br/>
    필수 약관에 동의해주세요
    </div>

    <div className="d-flex justify-content-between align-items-center mt-30">
  <div className="form-check d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="agree">모두동의</div>
  </div>

  <div className="d-flex justify-content-end">
    <a href="#" className="more">자세희</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center mt-30">
  <div className="form-check d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="agree">모두동의</div>
  </div>

  <div className="d-flex justify-content-end">
    <a href="#" className="more">자세희</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center mt-30">
  <div className="form-check d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="agree">모두동의</div>
  </div>

  <div className="d-flex justify-content-end">
    <a href="#" className="more">자세희</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center mt-30">
  <div className="form-check d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="agree">모두동의</div>
  </div>

  <div className="d-flex justify-content-end">
    <a href="#" className="more">자세희</a>
  </div>
</div>

<p className="text-danger fs-14 fw-400">필수 동의 약관에 동의해주세요.</p>




    <div className="row mt-5">
      <div className="col-md-12">
        <a className="btn btn-light w-560 h-42 rounded-3" href="http://localhost:3000/05_signup/1">다음 단계</a>
      </div> 
    </div>

</div>
</>
    );
}
export default SignMobile