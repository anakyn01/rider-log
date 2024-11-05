

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
          <div className="btn bgC3c4c5 rounded-circle w-40 h-40 d-flex justify-content-center align-items-center ml-2 fs-20 fw-700 text-white">
           2
          </div>
          <p className="ColorC3c4c5 fs-14 fw-500 mt-20">이름 입력</p>
  
        </div>
        
        <div className="w-92 justify-content-center z99">
        <div className="w-92 d-flex justify-content-center">
          <div className="btn bgC3c4c5 rounded-circle w-40 h-40 d-flex justify-content-center align-items-center fs-20 fw-700 text-white">
          3
          </div>
        </div>
        <div className="w-92 d-flex justify-content-center ">
        <p className="ColorC3c4c5 fs-14 fw-500 mt-20">휴대폰 번호 입력</p>
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
      <div className="d-flex justify-content-center align-items-center w-100 mb-60 mt-60">
      <span className="text-success fs-18 fw-500">RIDER LOG 차량 관제 시스템 이용을 위한 필수 약관에 동의해주세요.</span>
      </div>
  <form action="">

  <div className="form-check mt-30 mb-30  d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="fs-14 fw-700">모두동의</div>
  </div>

<div className="d-flex justify-content-between align-items-center mb-30">
  <div className="form-check  d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="fs-14 fw-700">모두동의</div>
  </div>

  <div className="col-md-2 d-flex justify-content-end">
    <a href="#" className="fs-14 fw-500 ColorC3c4c5">자세히</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center mb-30">
  <div className="form-check  d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="fs-14 fw-700">모두동의</div>
  </div>

  <div className="col-md-2 d-flex justify-content-end">
    <a href="#" className="fs-14 fw-500 ColorC3c4c5">자세히</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center mb-30">
  <div className="form-check  d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="fs-14 fw-700">모두동의</div>
  </div>

  <div className="col-md-2 d-flex justify-content-end">
    <a href="#" className="fs-14 fw-500 ColorC3c4c5">자세히</a>
  </div>
</div>

<div className="d-flex justify-content-between align-items-center">
  <div className="form-check d-flex align-items-center">
      <input className="form-check-input border-success" type="checkbox" name="remember"/><div className="fs-14 fw-700">모두동의</div>
  </div>

  <div className="col-md-2 d-flex justify-content-end">
    <a href="#" className="fs-14 fw-500 ColorC3c4c5">자세히</a>
  </div>
</div>

<p className="text-danger fs-14 fw-400">필수 동의 약관에 동의해주세요.</p>




    <div className="row mt-5">
      <div className="col-md-12">
        <a className="btn btn-light w-560 h-56 rounded-3" href="http://localhost:3000/05_signup/1">다음 단계</a>
      </div> 
    </div>
   
  </form>
    </div>
</div>
</>
);
}