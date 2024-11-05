import OlgarTable from "./olgartable";

export default function Orgar() {
    return (
      <>
      <div className="p-3 border-1 w-25 orgar" id="myModal">
        
        <p>조직을 선택해 주세요</p>
        <input type="text"  value="조직명"  className="form-control p-4 rounded-4"/>
        <div className="d-flex justify-content-between my-3">
            <div className="">총21건</div>
            <input type="reset" value="검색 초기화"/>
        </div>

        <div className="dropdown">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                별따러 가자
            </button>
            <ul className="dropdown-menu border-0">
                <li><a className="dropdown-item" href="#">&nbsp;서울 제1권역점</a></li>
            </ul>
        </div>

    <div className="my-3">
        <div className="">차량 운전자 현황</div>

            <div className="rounded-4  o-hidden border-2 my-3">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th></th><th></th><th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">전체<h1>0</h1></td>
                            <td className="text-center">주행중<h1>0</h1></td>
                            <td className="text-center">윤휴<h1>0</h1></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <input type="text" className="form-control rounded-4 p-4" value="차량번호 또는 운전자 명"/>
    </div>
      
    <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">전체</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">주행중</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">미주행</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">운휴                </button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
<OlgarTable/>
  </div>
  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="1">
  <OlgarTable/>   
  </div>
  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="2">
  <OlgarTable/>   
  </div>
  <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="3">
  <OlgarTable/> 
  </div>
</div>

      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </>
      );
    }