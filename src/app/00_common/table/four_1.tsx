const Head1 = () => {
    return(
        <>
        <div className=" border border-1 rounded-3 p-3 d-flex justify-content-around w-1144 h-114 align-items-center">
            <div className="text-center h-40">
                <h6 className="fs-16">발생 건수</h6>
                <h1 className="fs-24">21</h1>
            </div>
            <div className="border-right"></div>
            <div className="text-center h-40">
                <h6 className="fs-16">사고 미조치</h6>
                <h1 className="fs-24">2</h1>
            </div>
            <div className="border-right"></div>
            <div className="text-center h-40">
                <h6 className="fs-16">조치 중</h6>
                <h1 className="fs-24">19</h1>
            </div>
            <div className="border-right"></div>
            <div className="text-center h-40">
                <h6 className="fs-16">조치 완료</h6>
                <h1 className="fs-24">19</h1>
            </div>
        </div>
        </>
    );
}
export default Head1;