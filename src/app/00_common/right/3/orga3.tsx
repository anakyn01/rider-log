import OrgarToast1 from "../../toast/3/orgarToast1";

const Orgar3 =() => {
    return(
<>

<div className="d-flex justify-content-center w-1656">
<div className="">
<div className="w-1512 p-3">
    <div className=" my-4 d-flex">
    <h6 className="fs-18 fw-700">조직추가<small><span className="fs-12 ColorDb121a ml-3">*</span>필수입력 항목</small><br/><span className="fs-14 fw-400 Color77787b">접속 하위조직을 추가 할수 있습니다</span></h6>
    <OrgarToast1/>
    </div>


<h6 className="fs-18 fw-700 mb-4">조직정보</h6>
<table className="table table-custom-40-left">
    <colgroup>
<col style={{width:"378px"}}/>
<col style={{width:"378px"}}/> 
<col style={{width:"378px"}}/> 
<col style={{width:"378px"}}/>  
    </colgroup>
    <thead></thead>
    <tbody>
<tr>
    <th>조직명</th><td colSpan={3}><input type="text" className="form-control" placeholder="공백 포함 최대 15자"/></td>
</tr>      
<tr>
    <th>조직유형</th>
    <td>
        <input type="text" className="form-control" placeholder="공백 포함 최대 15자"/>

    </td>
    <th>소속조직</th>
    <td>
       <div className="d-flex justify-content-between align-items-center">
       <div>별따러 가자</div>
        <button className="btn w100 h-42 border-success text-success">
            소속조직변경
        </button>
       </div>

    </td>
</tr>  
<tr>
    <th>조직연락처</th><td><input type="text" className="form-control" placeholder="하이픈(-) 없이 숫자만 입력"/></td>
    <th>사업자등록번호</th><td><input type="text" className="form-control" placeholder="하이픈(-) 없이 숫자 10자리"/></td>
</tr>
<tr>
    <th>조직주소</th>
    <td colSpan={3} className="p-2">
        <div className="d-flex align-items-center">
        <input type="text" className="form-control w-254" placeholder="우편번호"/>
        <button className="btn w100 h-42 border-success text-success mx-2">소속조직변경</button>
        </div>       
        <input type="text" className="form-control my-2" placeholder="기본 주소"/>
        <input type="text" className="form-control mb-1" placeholder="상세 주소"/>
    </td>
</tr>  
    </tbody>
</table>



<h6 className="fs-18 fw-700">담당자 정보</h6>
<p className="fs-14 fw-400 Color77787b mb-4">조직담당자</p>
<table className="table table-custom-40-left">
    <colgroup>
        <col style={{width:"378px"}}/>
        <col style={{width:"378px"}}/> 
        <col style={{width:"378px"}}/> 
        <col style={{width:"378px"}}/>  
    </colgroup>
    <thead></thead>
    <tbody>
        <tr>
            <th>담당자명</th>
            <td>
                <div className="d-flex justify-content-between w-378">
                <div className="d-flex justify-content-between w-378">
                    <div>김별따</div>
                    <div className="d-flex w-208 justify-content-between">
                    <a className="btn border-success text-success w100 h42" href="http://localhost:3000/06_dash/03_orgar/4">삭제</a>
                    <a className="btn btn-success btn-success-w100-h42" href="http://localhost:3000/06_dash/03_orgar/5">변경</a>
                    </div>                    
                </div>
                </div>
                
            </td>
            <th>담당자 권한</th>
            <td>-</td>
        </tr>
        <tr>
            <th>담당자 연락처</th>
            <td>-</td>
            <th>이메일</th>
            <td>-</td>
        </tr>
    </tbody>
</table>

<div className="w-1512 d-flex justify-content-between my-4">
<h6 className="fs-18 fw-700">사고조치 담당자</h6>
<button className="btn border-success text-success w378 h42">사고조치 담당자 추가</button>
</div>

<table className="table table-custom-40">
<colgroup>
        <col style={{width:"192px"}}/>
        <col style={{width:"300px"}}/> 
        <col style={{width:"300px"}}/> 
        <col style={{width:"200px"}}/> 
        <col style={{width:"344px"}}/> 
        <col style={{width:"176px"}}/>   
    </colgroup>
    <thead>
    <tr>
            <th>담당자명</th><th>담당자연락처</th><th>이메일</th><th>권한</th><th>비고</th><th>관리</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>

</div>
    
</div>
</div>
</>
    );
}
export default Orgar3;