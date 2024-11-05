

import Cert from "@/app/00_common/modal/2/Cert";
import CertModal from "@/app/00_common/modal/2/CertModal";
import CertLast from "@/app/00_common/modal/2/CertLast";


export default function Page() {
    return (
      <>
<div className="d-flex w-100 h-100 justify-content-center align-items-center">
<div className="w-560">
      <div className="text-center w-560">
<div className="logo-top-margin">
      <div className="d-flex justify-content-center">
      <img src='/images/riderlog_logo.svg' className="login-logo"/>
      </div>
</div>
        <div className="cert-title">
        2단계 인증
        </div>
        <p className="cert-body">
        보안을 위해 2단계 인증이 필요합니다<br/>
        아래의 이메일 주소로 보내드린 인증코드를 제한시간 <span className="text-success fw-700">5분이내</span>에 입력해 주세요
        </p>


      </div>

      <div className="cert-message">
      riderlog@star-pickers.com
      </div>
  <form action="" className="was-validated">
    <div className="cert-input-top">
      <div className="d-flex justify-content-between">
      <div className="left">인증코드</div>
      <div className="right">05:00</div>
      </div>

      <input type="text" className="form-control cert-input" id="" placeholder="6자리 인증코드를 입력해 주세요" name="" required/>
      <div className="invalid-feedback cert-vali">인증코드를 입력해주세요.<br/>인증코드 재전송은 1일 5회까지 가능합니다</div>
    </div>

    <div className="cert-btn-group">

      <button className="cert-btn-left" data-bs-toggle="modal" data-bs-target="#cert3">인증코드 재전송(5/5)</button>


      <button className="cert-btn-right" data-bs-toggle="modal" data-bs-target="#cert2">2단계 인증</button>
   
    </div>


   <div className="d-flex align-items-center justify-content-center">
    <div className="text-center">
      <div className="cert-sms-group">
        <a href="" className="cert-sms">SMS문자 메세지로 인증</a>
      </div>
      <div className="d-flex align-items-center">
        <input className="form-check-input border-success mr-2" type="checkbox" name="remember"/><label className="form-check-label trust">이기기를 신뢰하는 기기로 등록</label>
      </div>
    </div>   
  </div>

  </form>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
<script src="../../js/custom.js"></script>
<CertLast/>
      </>


    );
    
}