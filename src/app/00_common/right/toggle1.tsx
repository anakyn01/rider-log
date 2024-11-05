

export default function Toggle1() {
    return (
      <>
<div className="p-5 toggle1">
  <div className="modal-dialog">
      <div className="modal-header">
        <h4 className="modal-title">별따러 가자</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

    <div className="modal-content">
    <p><small><span>현재속도</span>10km/h</small><br/>
    <small><span>현재위치</span>서울특별시 서초구 매헌로</small><br></br>
    <span  className="text-secondary">위도 37.46226 / 경도 127.036787</span>
    </p>

    <div className="my-4">
      
      <div className="d-flex justify-content-between">
        <div className="">
          서울가 1234<div className="small text-secondary">KMHDL41BP8A000001</div>
        </div>
        <button className="btn btn-outline-success">차량 정보 확인</button>
      </div>
      
      <div className="d-flex justify-content-between my-2">
        <div className="">
          서울가 1234<div className="small text-secondary">KMHDL41BP8A000001</div>
        </div>
        <button className="btn btn-outline-success">차량 정보 확인</button>
      </div>
    
    </div>

      <div className="my-2">
        <button type="button" className="btn btn-success w-100" data-bs-dismiss="modal">주행 이력 확인</button>
      </div>


    </div>
  </div>
</div>
      </>
    );
}