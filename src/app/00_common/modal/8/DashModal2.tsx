const DashModal2 = () => {
    return(
<>
<div className="modal" id="dashModal">
  <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
    <div className="modal-content w-440 h-478 rounded-4">
      <div className="modal-body">

          <div className="d-flex justify-content-between mb-45">
            <p className="fs-18 fw-700">대시보드 콘텐츠 추가</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <p>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">이번달 사고 발생 건수</label>
          </div>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">올해 평균 안전 점수 순위</label>
          </div>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">조직별 평균 안전점수 순위</label>
          </div>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">이번달 사고 발생 건수</label>
          </div>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">올해 평균 안전 점수 순위</label>
          </div>
          <div className="form-check mb-26">
            <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"/>
            <label className="form-check-label fs-16 fw-500">조직별 평균 안전점수 순위</label>
          </div>
          </p>
          <a className="form-control btn btn-success mainBtn h-52" href="http://localhost:3000/06_dash/08_board/0">2개 콘텐츠 추가</a>
      </div>

      

    </div>
  </div>
</div>
</>
    );
}
export default DashModal2;