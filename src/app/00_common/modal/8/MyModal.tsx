export default function MyModal() {
    return(
<>
<div className="modal" id="myModal">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content w-440 h-260">
      <div className="modal-body">

          <div className="d-flex justify-content-between">
            <p className="fs-18 fw-700">휴대폰 번호 변경</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <p>
            <form className="was-validated">
              <div className="mb-3 mt-3">
                <label htmlFor="" className="fs-16 fw-400">휴대폰 번호</label>
                <input type="tel" className="form-control h-56 input-bg rounded-3" id="" placeholder="숫자만 최대 11자 입력 가능" name="" required/>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback fs-14 ColorDb121a">올바른 휴대폰 번호를 입력해주세요.</div>
              </div>
            </form>
          </p>
          <div className="d-flex justify-content-between w-440 mt-40">
          <button className="btn btn-light w-190 h-52 mainBtn-gray">취소</button>
          <button className="btn btn-success w-190 h-52 mainBtn">인증코드 전송</button>
          </div>
          
      </div>

      

    </div>
  </div>
</div>
</>
    );
}