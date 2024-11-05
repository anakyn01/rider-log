import LoginDupAlertOut from "@/app/00_common/modal/1/LoginDupAlertOut";
import Footer from "../footer";
export default function Page() {
    return (
      <>
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="w-560 mt-160">
      <div className="d-flex justify-content-center">
      <img src='/images/riderlog_logo.svg' className="text-center logo"/>
      </div>
  <form className="was-validated">
    <div className="id-top">
      <label htmlFor=""className="idText">아이디</label>
      <input type="text" className="form-control w-100 id input-bg rounded-3" placeholder="아이디를 입력해 주세요" name="" required/>
      <div className="invalid-feedback">아이디를 입력해주세요.<br/>올바른 이메일 형식으로 입력해 주세요</div>
    </div>
    <div className="pw-top">
      <label htmlFor="pwd" className="pwText">비밀번호</label>
      <input type="password" className="form-control w-100 pw input-bg rounded-3" placeholder="비밀번호를 입력해 주세요" name="" required/>
      <div className="invalid-feedback">비밀번호를 입력해 주세요</div>
    </div>
    <div className="mt-60">
    <button className="loginLight"  data-bs-toggle="modal" data-bs-target="#loginDupOut">로그인</button>
    <Footer/>
    </div>
    </form>

    </div>
      </div>
      <LoginDupAlertOut/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
<script src="../../js/custom.js"></script>
    </>
    );
    
}