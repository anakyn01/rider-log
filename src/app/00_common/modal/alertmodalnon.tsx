export default function AlertModalNon() {
    return (
        <>
<div className="modal d-block show  mt-5" id="myModal">
  <div className="modal-dialog mt-5">
    <div className="modal-content">

    <div className="modal-header">
        <h4 className="modal-title">알림센터</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

    <div className="modal-body">
        <div className="card">
            <div className="card-body">
            <div className="my-3">
            <p className="card-text">
            표시할내용이 없습니다
            </p>
           
        </div></div></div>
    </div>
    </div>
  </div>
</div>        
        </>
    )
}

