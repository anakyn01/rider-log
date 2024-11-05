

export default function BodyContent() {

  return (
  <>
  
<div className="d-flex justify-content-center align-items-center w-100">

<div className="mt-160 w-585">
      <div className="text-center">
        <h1 className="my-5 fs-24 fw-700">RIDER LOG 차량 관제 시스템 회원가입</h1>
      </div>
      
      <div className="">
      <div className="w560h4"></div>
      <div className="d-flex justify-content-between align-items-center z99">

        <div className="w-84 d-flex justify-content-center z99">
          <div className="w-84">
            <div className="numberLine rounded-circle w-40 h-40 fs-20 fw-700 ml-2">
              1
            </div>
            <div className="w-84 d-flex justify-content-center">
            <p className="text-success fs-14 mt-20 w-84">약관 동의</p>
            </div>

          </div>    
        </div>

 
        
        
        <div className="w-84 justify-content-center z99">
          <div className="numberLine rounded-circle w-40 h-40 d-flex justify-content-center align-items-center ml-2 fs-20 fw-700">
           2
          </div>
          <p className="text-success fs-14 fw-500 mt-20">이름 입력</p>
  
        </div>
        
        <div className="w-92 justify-content-center z99">
        <div className="w-92 d-flex justify-content-center">
          <div className="numberLineBorder rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700 bg-white">
          3
          </div>
        </div>
        <div className="w-92 d-flex justify-content-center ">
        <p className="text-success fs-14 fw-500 mt-20">휴대폰 번호 입력</p>
        </div>
          

        </div>
       
        <div className="w-92 justify-content-center z99">
          <div className="w-92 d-flex justify-content-center">
            <div className="btn bgC3c4c5 rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700 text-white">
            4
            </div>
          </div>
          <div className="w-92 d-flex justify-content-center">
          <p className="ColorC3c4c5 fs-14 fw-500 mt-20">휴대폰 번호인증</p>
          </div>
          
        
        </div>
        
        <div className="w-92 justify-content-center z99">
        <div className="w-92 d-flex justify-content-center">
         <div className="btn bgC3c4c5 rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700 text-white">
          5
          </div>
        </div>
 
          <div className="ColorC3c4c5 fs-14 fw-500 mt-20 text-center">비밀번호 입력</div> 
        </div>
        
      </div>
      </div>

      <div className="d-flex justify-content-center align-items-center w-100 mb-40 mt-60">
      <span className="text-success fs-18 fw-500">
      담당자님(user@domain.com)의 휴대폰 번호를 입력해주세요.
        </span>
      </div>
  <form action="" className="was-validated">
<div className="w-560">
<p className="fs-18 fw-500">휴대폰 번호</p>
<input type="text" className="form-control input-bg w-560 h-56 rounded-3" placeholder="숫자만 최대 11자 입력 가능" required/>
<div className="invalid-feedback fs-14">
올바른 휴대폰 번호를 입력해주세요.<br/>
이미 사용 중인 휴대폰 번호입니다.</div>
</div>
  
<div className="d-flex justify-content-between mt-60">
<a className="btn btn-outline-success w-270 h-56 rounded-3" href="http://localhost:3000/05_signup/1">이전 단계</a>
<a className="btn btn-light w-270 h-56 rounded-3" href="http://localhost:3000/05_signup/3">다음 단계</a>
</div>
        

  </form>
    </div>
</div>
  </>
  );
  }