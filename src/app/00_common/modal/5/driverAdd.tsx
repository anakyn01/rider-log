const DriverAdd = () => {
    return(
<>
<div className="modal" id="driverAdd">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable w-1132 h-710">
    <div className="modal-content ">
      <div className="modal-body">
<div className="d-flex justify-content-between align-items-center">
  <p className="fs-18 fw-700">새로운 차량 추가하기</p>
  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
</div>
<p className="w-331 fs-14 fw-400 Color77787b">입력하신 운전자 정보로 새로운 운전자가 추가 및 배정됩니다.</p>
<div className="d-flex justify-content-between align-items-center">
 <p className="fs-14 Color77787b"><span className="ColorDb121a mr-2">*</span>필수 입력 항목</p>

  <div className="d-flex align-items-center">
    <input type="checkbox" className="form-check-input"/>
    <div className="fs-14 fw-400">보험에 가입된 차량</div>
  </div>
</div>

<table className="table table-custom-40-left">
  <colgroup>
  <col style={{width:"210px"}}/>
  <col style={{width:"336px"}}/>
  <col style={{width:"210px"}}/>
  <col style={{width:"336px"}}/>
  </colgroup>
  <thead>

  </thead>
  <tbody>
<tr>
  <th className="bg-light">차량번호</th>
  <td><input type="text" className="form-control" placeholder="한글, 숫자 최대 12자 입력 가능"/></td>
  <th className="bg-light">차대번호</th>
  <td><input type="text" className="form-control" placeholder="영어, 숫자 최대 17자 입력 가능"/></td>
</tr>
<tr>
  <th className="bg-light">모델명</th>
  <td><input type="date" className="form-control" placeholder="최대 20자 입력 가능"/></td>
  <th className="bg-light">연식</th>
  <td>
  <input type="text" className="form-control" placeholder="숫자만 최대 4자 입력 가능"/>
  </td>
</tr>
<tr>
  <th className="bg-light">배기량</th>
  <td>
  <input type="text" className="form-control" placeholder="숫자만 최대 3자 입력 가능"/>
  </td>
  <th className="bg-light">차량 소유 구분</th>
  <td>
  <div className="d-flex align-items-center ml-2">
    <div className="d-flex align-items-center mx-3">
      <input className="form-check-input" type="radio" id="check1" name="option1" value="something" checked/>
      <label className="form-check-label">개인</label>
    </div>
    <div className="d-flex align-items-center mx-3">
      <input className="form-check-input" type="radio" id="check1" name="option1" value="something" checked/>
      <label className="form-check-label">법인</label>
    </div>
  </div>
  </td>
</tr>
<tr>
  <th className="bg-light">센서유형</th>
  <td>
  -
  </td>
  <th className="bg-light">센서번호</th>
  <td>
    <div className="d-flex justify-content-between align-items-center">
    <input type="text" className="form-control w-202 h-42" placeholder="센서번호를 입력해주세요."/>
    <button className="btn btn-outline-success mainBtn-outline-w110-h42 ml-2">센서 번호 확인</button>
    </div>
  
  </td>
</tr>

  </tbody>
 </table>

 <table className="table table-custom-40-left">
 <colgroup>
  <col style={{width:"210px"}}/>
  <col style={{width:"336px"}}/>
  <col style={{width:"210px"}}/>
  <col style={{width:"336px"}}/>
  </colgroup>
  <thead>

  </thead>
  <tbody>
  <tr>
  <th className="bg-light">보험 종류</th>
  <td>
   <select name="" id="" className="h-42 form-control">
    <option value="">선택</option>
   </select>

  </td>
  <th className="bg-light">보험사</th>
  <td>
  <select name="" id="" className="h-42 form-control">
    <option value="">선택</option>
   </select>
  </td>
</tr>
<tr>
  <th className="bg-light">보험 가입일</th>
  <td>
<input type="date" className="form-control"/>
  </td>
  <th className="bg-light">보험 만기일</th>
  <td>
<input type="date" className="form-control"/>
  </td>
</tr>
  </tbody>
 </table>
 <div className="my-4">
  <button className="btn btn-light form-control h-52">
차량 추가 완료
  </button>
 </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default DriverAdd;