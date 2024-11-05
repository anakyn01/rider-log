export default function AlertModalSearchSeoul() {
    return (
        <>
<div className="modal d-block show" id="myModal">

  <div className="modal-dialog modal-dialog-centered ">

    <div className="modal-content">
      <div className="modal-header">
          <h4 className="modal-title">조직 선택</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>

      <div className="modal-body">
        <input type="text" className="form-control bg-light" placeholder="조직명 또는 담당자명" value="서울"/>
        <div className="d-flex justify-content-between py-3">
        <p>총21건</p><a href="a-link">검색 초기화</a>
        </div>
        <table className="table table-borderless">
        <colgroup>
        <col style={{width:"30%"}}/>
        <col style={{width:"30%"}}/>
        <col style={{width:"20%"}}/>
        <col style={{width:"20%"}}/>
        </colgroup>
        <thead>
          <tr>
            <th>조직명</th><th>조직유형</th><th>담당자</th><th>등록차량</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            서울제1권역점
            </td>
            <td>사업지 계약</td>
            <td>김별따</td>
            <td>1,000대</td>
          </tr>
          <tr>
            <td>
            서울제2권역점
            </td>
            <td>사업지 계약</td>
            <td>김별따</td>
            <td>1,000대</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
        </>
    )
}

