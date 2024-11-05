export default function Ask() {
    return (
        <>
<div className="modal" id="ask">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content w-440 h-192 rounded-4">

    <div className="text-center p-3">
        <h4 className="modal-title fs-18 mt-3 fw-700">문의 접수 확인</h4>
       <p className="fs-18 fw-400">입력하신 내용으로 문의를 접수하시겠습니까?</p> 

       <div className="d-flex justify-content-between mt-30">
        <button type="button" className="btn btn-light w-100 h-52" data-bs-dismiss="modal">취소</button>
        <button type="button" className="btn btn-success w-100 ml-3 h-52" data-bs-toggle="modal" data-bs-target="#ask2" >접수</button>
      </div>
      </div>

        
    </div>
    </div>
  </div>
      
        </>
    );
}

