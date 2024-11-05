export default function AlertModalDanger() {
    return (
        <>
<div className="modal d-block show" id="myModal">

<div className="my-2 text-center">
<span className="badge rounded-pill bg-secondary p-2">사고위치가 클립보드에 저장되었습니다</span>
</div>

  <div className="modal-dialog modal-dialog-centered ">

    <div className="modal-content">
      <div className="modal-header">
          <h4 className="modal-title">알림센터</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>

      <div className="modal-body">
    <table className="table">
      <colgroup>
      <col style={{width:"50%"}}/>
      <col style={{width:"50%"}}/>
      </colgroup>
      <thead>
        <tr>
          <th></th><th></th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <div className="text-secondary">
          운전자명  
          </div>
          <div>김별따</div>
        </td>
        <td>
          <div className="text-secondary">
          소속  
          </div>
          <div>별따러가자</div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="text-secondary">
          연락처  
          </div>
          <div>01012345678</div>
        </td>
        <td>
          <div className="text-secondary">
          차량번호  
          </div>
          <div>서울가1234</div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="text-secondary">
          사고발생일시  
          </div>
          <div>2024-05-07 11:00</div>
        </td>
        <td>
          <div className="text-secondary">
          사고발생위치  
          </div>
          <div>서울 특별시 서초구 매헌로 176, 12층 주소가 두줄인 경우까지만 표시<button className="btn btn-success">위치공유</button></div>








        </td>
      </tr>

      <tr>
        <td>
          <div className="text-secondary">
          나이 
          </div>
          <div>43세</div>
        </td>
        <td>
          <div className="text-secondary">
          혈액형 
          </div>
          <div>Rh+A</div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="text-secondary">
          보호자 연락처
          </div>
          <div>01098765432</div>
        </td>
        <td>
          <div className="text-secondary">
          보호자와의 관계 
          </div>
          <div>친구</div>
        </td>
      </tr>

      <tr>
        <td colSpan={2}>
          <div className="text-secondary">
          건강특이사항
          </div>
          <div>아스피린, 비스테로이드성 소염진통제(COX-2 억제제 포함)에 대하여, 알레르기를 반응을 보인적 있음</div>
        </td>
      </tr>
      </tbody>

    </table>
      </div>

      <div className="d-flex p-3">
      <button className="btn btn-outline-danger w-50">사고 위치 확인</button>
      <div className="mx-3"></div>
      <button className="btn btn-danger w-50">사고 정보 상세</button>
      </div>
    </div>
  </div>
</div>

<div className="modal-backdrop show"></div>
        </>
    )
}

