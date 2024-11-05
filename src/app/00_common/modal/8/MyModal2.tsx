export default function MyModal2() {
    return(
<>
<div className="modal" id="myModal2">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content w-440 h-260">
      <div className="modal-body">

          <div className="d-flex justify-content-between">
            <p className="fs-18 fw-700">휴대폰 번호 변경</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
              <div className="mb-3 mt-3">
                <label htmlFor="" className="fs-16 fw-400">휴대폰 번호</label>
                <input type="tel" className="form-control h-56 input-bg rounded-3" id="" placeholder="숫자만 최대 11자 입력 가능" name="" required/>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-14 ColorDb121a">올바른 휴대폰 번호를 입력해주세요.</div>
              </div>

              <div className="mt-20 d-flex justify-content-between">
                <p className="fs-16 fw-400">인증코드</p>
                <p className="fs-16 fw-400 ColorDb121a">05:00</p>
              </div>
              <form className="was-validated">
              <div className="">
                <input type="tel" className="form-control h-56 input-bg rounded-3" id="" placeholder="숫자만 최대 11자 입력 가능" name="" required/>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-14 ColorDb121a">올바른 휴대폰 번호를 입력해주세요.<br/>인증코드 재전송은 1일 5회까지 가능합니다.</div>
              </div>
              </form>

              <div className="mt-20 d-flex justify-content-between">
                <p className="fs-16 Color77787b">인증코드를 받지 못하였나요?</p>
                <a href="#" className="a-link fs-16 Color77787b">인증코드 재전송 (5/5)</a>
              </div>

          <div className="d-flex justify-content-between w-440 mt-40">
          <button className="btn btn-light w-190 h-52 mainBtn-gray">취소</button>
          <a className="btn btn-success w-190 h-52 mainBtn" href="http://localhost:3000/06_dash/08_board/3_8">휴대폰 번호 변경 완료</a>
          </div>
          
      </div>

      

    </div>
  </div>
</div>
</>
    );
}