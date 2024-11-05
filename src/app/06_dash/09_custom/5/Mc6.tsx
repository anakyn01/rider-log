import MobileTop from "@/app/00_common/top/MobileTop";
import MobileFooter from "@/app/00_common/top/MobileFooter";


const Mc6 = () => {
    return(
<>
<div className="mobile-content">
      <MobileTop/>
      <div className="mobile-title fs-16 fw-700">
      문의하기
      </div>
      <div className="fs-14 fw-400 Color77787b">
      입력하신 문의 내용을 확인 후, 메일을 통해 답변드립니다.   
      </div>
     <form className="was-validated">
      <div className="mt-40">
      <input type="text" className="h-42 form-control rounded-3" placeholder="문의 제목을 입력해주세요" required/>
        <div className="invalid-feedback">제목을 입력해주세요.</div>
      </div>
      <div className="mt-10">
      <textarea name="" id="" className="form-control h-380 rounded-3" required placeholder="내용을 입력해주세요">
      
      </textarea>
      <div className="invalid-feedback mb-10 ">내용을 입력해주세요.</div>
      </div>

      <div className="mt-30 mb-30">
        <button className="btn btn-light h-42 w-100">문의하기</button>
      </div>
      
     </form>

<MobileFooter/>
      </div>
</>
    );
}
export default Mc6