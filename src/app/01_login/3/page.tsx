export default function Page() {
    return (
<>
<div className="w-100 h-100 d-flex justify-content-center align-items-center">
<div className="mt-160 text-center w-560">
      <div className="d-flex justify-content-center">
      <img src='/images/riderlog_logo.svg' className="login-logo"/>
      </div>
     <h3 className="end">담당 조직이 없습니다</h3>
     <div className="end-body">
     담당 조직이 없는 경우, RIDERLOG 차량 관제 시스템을 이용하실 수 없습니다.
     상위 담당자에게 문의해주세요.
     </div>
<div className="mt-60">
<a className="end-btn" href="http://localhost:3000/01_login">
     로그인 화면으로
     </a>
</div>
</div>
</div>
</>

    );
    
}