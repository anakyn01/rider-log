const Footer = () => {
    return(
<>
<div className="d-flex justify-content-center">
      <div className="forgotText">
        <div className="forgot-title">아이디 혹은 비밀번호를 잊으셨나요?</div>
        <div className="mt-2 mb-3 d-flex justify-content-center">
          <div className="w-256 d-flex justify-content-between mt-20">  
            <a className="idFind" href="http://localhost:3000/03_find/1">아이디 찾기</a>
            <a className="pwFind" href="http://localhost:3000/04_pwfind/1">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
</>
    );
}
export default Footer;