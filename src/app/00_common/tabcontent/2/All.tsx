const All = () => {
    return(
<>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="tone" role="tabpanel" aria-labelledby="home-tab">
    <div className="d-flex justify-content-between align-items-center my-3">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-success rounded-5 w-68 h-32" data-bs-toggle="modal" data-bs-target="#driving">
        주행중
      </button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-3">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-danger rounded-5 w-68 h-32" data-bs-toggle="modal" data-bs-target="#danger">사고</button>
    </div> 

    <div className="d-flex justify-content-between align-items-center my-3">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 w-68 h-32" data-bs-toggle="modal" data-bs-target="#driving2">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-3">
      <p className="fs-14 text-center">별따러가자</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-warning rounded-5 w-68 h-32" data-bs-toggle="modal" data-bs-target="#driving2">미주행</button>
    </div>

    <div className="d-flex justify-content-between align-items-center my-3">
      <p className="fs-14 text-center">논현점</p>
      <p className="fs-14 text-center">서울가1234<br/>김별따</p>
      <button className="btn btn-outline-secondary rounded-5 w-68 h-32" data-bs-toggle="modal" data-bs-target="#driving3">운휴</button>
    </div>
  </div>
  </div>
</>
    );
}
export default All;