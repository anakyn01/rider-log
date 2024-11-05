export default function AlertModal() {
    return (
        <>
<div className="modal" id="alert">
  <div className="modal-dialog">
    <div className="modal-content alert-position">

    <div className="modal-header border-bottom-0">
        <h4 className="alert-head">알림센터</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

    <div className="px-3">
    <div className="allreadTop d-flex justify-content-end">
        <button className="allread">모두 읽음 처리하기</button>
    </div>
        <div className="border px-3 notice-block">

            <div className="notice-top">
            <span className="notice">공지사항</span>
            </div>
                <h4 className="notice-title">
                점검으로 인한 사비스 이용 불가 안내
                <br/>
                <span className="notice-body">점검으로 인해 다음 기간동안 서비스 이용이 블가능합니다<br/>
                2024년 5월21일(화)오후 4시 30분 ~ 2024년 5월 22일..
                </span>
                </h4>
 
                <p className="notice-number">2024-05-21 16:30</p>
 
        </div>

        <div className="border px-3 notice-block">

            <div className="notice-top">
            <span className="noticeYellow">차량관리</span>
            </div>
                <h4 className="notice-title">
                운휴 차량이 발생했습니다
                <br/>
                <span className="notice-body">[서울제1권역점]
                차량번호 : 서울가1234 / 운전자명 : 김별따
                </span>
                </h4>

                <p className="notice-number">2024-05-21 16:30</p>

        </div>

        <div className="border px-3 notice-block">

            <div className="notice-top">
            <span className="noticeDanger">사고</span>
            </div>
                <h4 className="notice-title">
                사고가 발생했습니다.
                <br/>
                <span className="notice-body">[서울제1권역점]
                차량번호 : 서울가1234 / 운전자명 : 김별따
                </span>
                </h4>

                <p className="notice-number">2024-05-21 16:30</p>
            </div>
        </div>
    </div>
    </div>
  </div>
<script src="../../js/custom.js"></script>       
        </>
    )
}

