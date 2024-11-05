
import Ask from "../../modal/9/Ask";
import Ask2 from "../../modal/9/Ask2";
const Cus6 = () => {
    return(
<>
<div className="d-flex justify-content-center w-1656">
  <div className="">
  <div className="w-1512 ">
  <p className="fs-18 fw-700 my-4">문의 하기</p>
  <div className="fs-16 fw-500 Color77787b">
  입력하신 문의 내용을 확인 후, 메일을 통해 답변드립니다.
  </div>
  <div className="mt-3 fs-16 fw-400 Color77787b">
  상담 시간: 월 ~ 금요일 오전 9시 ~ 오후 5시<br/>
  점심 시간: 월 ~ 금요일 오전 11시 30분 ~ 오후 12시 30분
  </div>
 
  <div className="mt-3 fs-16 ColorDb121a">
  ※ 주말 및 공휴일은 휴무입니다.
  </div>

<form className="was-validated">
  <div className="my-5">
    <input type="text" name="" id="" className="h-56 form-control" placeholder="문의 제목을 입력해주세요" required/>
    <div className="invalid-feedback">제목을 입력해주세요.</div>
  </div>
  <div className="">
    <textarea className="form-control h-560" placeholder="문의 내용을 입력해주세요" required></textarea>
    <div className="invalid-feedback">내용을 입력해주세요.</div>
  </div>

  </form>
  <div className="d-flex justify-content-end my-5">
<button className="w-378 h-56 btn btn-success" data-bs-toggle="modal" data-bs-target="#ask">문의하기</button>
  </div>
</div>
<Ask/>
<Ask2/>
  </div>
</div>
</>
    );
}
export default Cus6;