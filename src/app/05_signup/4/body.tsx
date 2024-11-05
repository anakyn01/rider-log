

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
            <p className="fs-14 mt-20 w-84">약관 동의</p>
            </div>

          </div>    
        </div>

 
        
        
        <div className="w-84 justify-content-center z99">
          <div className="numberLine rounded-circle w-40 h-40 d-flex justify-content-center align-items-center ml-2 fs-20 fw-700">
           2
          </div>
          <p className="fs-14 fw-500 mt-20">이름 입력</p>
  
        </div>
        
        <div className="w-92 justify-content-center z99">
        <div className="w-92 d-flex justify-content-center">
          <div className="numberLine rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700">
          3
          </div>
        </div>
        <div className="w-92 d-flex justify-content-center ">
        <p className="fs-14 fw-500 mt-20">휴대폰 번호 입력</p>
        </div>
          

        </div>
       
        <div className="w-92 justify-content-center z99">
          <div className="w-92 d-flex justify-content-center">
            <div className="numberLine rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700">
            4
            </div>
          </div>
          <div className="w-92 d-flex justify-content-center">
          <p className="fs-14 fw-500 mt-20">휴대폰 번호인증</p>
          </div>
          
        
        </div>
        
        <div className="w-92 justify-content-center z99">
        <div className="w-92 d-flex justify-content-center">
         <div className="btn btn-outline-success rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700">
          5
          </div>
        </div>
 
          <div className="text-success fs-14 fw-500 mt-20 text-center">비밀번호 입력</div> 
        </div>
        
      </div>
      </div>
      <div className="d-flex justify-content-center align-items-center w-100 mb-40 mt-60">
      <span className="text-success fs-18 fw-500">
      사용하실 비밀번호를 입력해주세요.
        </span>
      </div>
  <form action="" className="was-validated">
<div className="w-560">
  <div className="d-flex justify-content-between">
  <p className="fs-18 fw-500">비밀번호 입력</p>
  </div>

<input type="text" className="form-control input-bg w-560 h-56 rounded-3" placeholder="비밀번호를 입력해주세요" required/>
<div className="ColorC3c4c5">
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
  <p className="fs-18 fw-500">비밀번호 확인</p>
  </div>
  <input type="password" className="form-control input-bg w-560 h-56 rounded-3" placeholder="비밀번호를 입력해주세요" required/>
  <div className="invalid-feedback">비밀번호를 입력해주세요.</div>
  
<div className="d-flex justify-content-between mt-60">
<a className="btn btn-outline-success w-270 h-56 rounded-3" href="http://localhost:3000/05_signup/3">이전 단계</a>
<a className="btn btn-light w-270 h-56 rounded-3" href="http://localhost:3000/05_signup/5">다음 단계</a>
</div>
        
{/*<div className="d-flex justify-content-center align-items-center">
  <div className="w-182 h-64 mt-40 text-center">
    <p className="fs-16 fw-400 Color77787b">인증코드를 받지 못하셨나요?</p>
    <p className="fs-18 fw-400 mt-15 Color77787b">인증코드 재전송 (0/5)</p>
  </div>
</div>*/}
  </form>
    </div>
</div>
  </>
  );
  }