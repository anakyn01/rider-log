export default function Ask2() {
    return (
        <>
<div className="modal" id="ask2">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-216 rounded-4">

    <div className="text-center p-3">
        <h4 className="modal-title fs-18 fw-700 mt-3">문의 접수 완료</h4>
       <p className="fs-18">입력하신 내용으로 문의 메일이 접수되었습니다.<br/>
       확인 후, 메일을 통해 답변드리겠습니다.</p> 

       <div className="d-flex justify-content-between mt-30">
        <button type="button" className="btn btn-success w-100 h-52" data-bs-dismiss="modal">확인</button>
      </div>
      </div>

        
    </div>
    </div>
  </div>
      
        </>
    );
}

