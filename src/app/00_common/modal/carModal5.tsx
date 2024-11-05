const CarModal5 = () => {
    return(
<>
<div className="modal" id="carModal5">
<div className="modal-dialog modal-dialog-centered w-1132 h-648">
    <div className="modal-content ">


      <div className="modal-body  p-3">
        <div className="d-flex justify-content-between">
        <p className="fs-22">새로운 차량 추가하기<br/>입력하신 차량 정보로 새로운 차량이 추가 및 배정됩니다.</p>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>
       
      
      <div className="d-flex justify-content-between my-4 w-1144">
        <p>필수 입력 항목</p>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
        <label className="form-check-label">보험에 가입된 차량</label>
      </div>
        
      </div>
      <table className="table table-bordered w-1092 h-232">
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
    <th className="bg-light">운전자 명</th>
    <td><input type="text" placeholder="최대 10자 입력 가능" className="form-control"/></td>
    <th className="bg-light">운전자 연락처</th>
    <td><input type="text" placeholder="최대 11자 입력 가능" className="form-control"/></td>
  </tr>
  <tr>
    <th className="bg-light">생년월일</th>
    <td><input type="date" placeholder="최대 10자 입력 가능" className="form-control"/></td>
    <th className="bg-light">성별</th>
    <td>
      <div className="d-flex">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">남성</label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">여성</label>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <th className="bg-light">내외국인</th>
    <td>
    <div className="d-flex align-items-center h-158">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">내국인</label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">외국인</label>
        </div>
      </div>
    </td>
    <th className="bg-light">주소</th>
    <td>
      <div className="d-flex justify-content-between my-2">
      <input type="text" className="form-control w-156 h-42" placeholder="기본주소"/>
      <button className="btn btn-outline-success w-156 h-42">주소검색</button>
      </div>
      <input type="text" className="form-control mb-2" placeholder="기본주소"/>
      <input type="text" className="form-control" placeholder="상세주소"/>
    </td>
  </tr>
  <tr>
    <th className="bg-light">보호자연락처</th>
    <td><input type="text" placeholder="최대 11자 입력 가능" className="form-control"/></td>
    <th className="bg-light">보호자와의 관계</th>
    <td><input type="text" placeholder="최대 20자 입력 가능" className="form-control"/></td>
  </tr>
  <tr>
    <th className="bg-light">혈액형</th>
    <td>
      <div className="d-flex justify-content-between align-items-center">
        <select name="" id="" className="form-select w-150">
          <option value="">선택</option>
        </select>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">RH-</label>
        </div>
      </div>

    </td>
    <th className="bg-light">시간제 보험</th>
    <td>
    <div className="d-flex">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">미가입</label>
        </div>
        <div className="form-check mx-2">
          <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something" checked/>
          <label className="form-check-label">가입</label>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <th className="bg-light">건강특이사항</th>
    <td><textarea name="" id="" className="form-control"></textarea></td>
    <th className="bg-light">비고</th>
    <td><textarea name="" id="" className="form-control"></textarea></td>
  </tr>
 
</tbody>
      </table>
       <div className="w-400 h-52 d-flex justify-content-between">
       <button type="button" className="btn btn-light h-52 form-control" data-bs-dismiss="modal">운전자 추가완료</button>
       </div>
      </div>

    </div>
  </div>
</div>
</>
    );
}
export default CarModal5;