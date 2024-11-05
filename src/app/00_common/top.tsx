import AlertModal from "./modal/alertmodal";


export default function TopNav() {
    return (
<>
<nav className="top navbar navbar-expand navbar-light bg-white topbar static-top border-bottom d-flex align-items-center">

      
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>

<div className="d-flex align-items-center">
<a className="navbar-brand ml100" href="javascript:void(0)"><img src="../../images/riderlog_logo.svg" className="logoSmall"/>
</a>
                    <div className="logo-text">차량 관제 시스템</div>
      
</div>

  
          
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-search fa-fw"></i>
                            </a>
            
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                <form className="form-inline mr-auto w-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

 

                     
    

                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small fs-16">00점</span>
                            </a>
                         
        
                        </li>


                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small fs-16">조직담당자</span>
                            </a>
             
                        </li>


                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-bs-toggle="modal" data-bs-target="#alert">
                            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.9994 0.791016C5.90789 0.791016 2.59106 4.10784 2.59106 8.19935V8.85651C2.59106 9.47242 2.40875 10.0746 2.06711 10.587L0.995077 12.1951C-0.315403 14.1608 0.685039 16.8327 2.9643 17.4543C3.46582 17.5911 3.97033 17.713 4.47718 17.82C4.4463 17.9667 4.45277 18.1234 4.50359 18.2759C5.28927 20.6344 7.43067 22.3743 10.0004 22.3743C12.5701 22.3743 14.7115 20.6344 15.4972 18.2759C15.5481 18.1232 15.5545 17.9664 15.5235 17.8196C16.0297 17.7127 16.5336 17.5909 17.0345 17.4543C19.3138 16.8327 20.3142 14.1608 19.0037 12.1951L17.9317 10.587C17.59 10.0746 17.4077 9.47242 17.4077 8.85651V8.19935C17.4077 4.10784 14.0909 0.791016 9.9994 0.791016ZM13.6736 18.1428C11.2366 18.4809 8.76437 18.481 6.32737 18.1431C6.99356 19.6321 8.40678 20.6243 10.0004 20.6243C11.5941 20.6243 13.0074 19.632 13.6736 18.1428ZM4.34106 8.19935C4.34106 5.07434 6.87438 2.54102 9.9994 2.54102C13.1244 2.54102 15.6577 5.07434 15.6577 8.19935V8.85651C15.6577 9.81792 15.9423 10.7578 16.4756 11.5577L17.5476 13.1658C18.1955 14.1377 17.7009 15.4586 16.574 15.766C12.2696 16.9399 7.72924 16.9399 3.42475 15.766C2.29788 15.4586 1.80326 14.1376 2.45117 13.1658L3.5232 11.5577C4.05649 10.7578 4.34106 9.81792 4.34106 8.85651V8.19935Z" fill="#5D5E60"/>
</svg>

                              
                                <span className="badge badge-danger badge-counter rounded-5">1+</span>
                            </a>
                     
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">

                            </div>
                        </li>

                       
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mr-2 d-none d-lg-inline text-gray-600 small fs-16">김별따</span>
                            </a>
 
                        </li>

                        <li className="nav-item dropdown no-arrow">
<div className="logOutBtn-top mr100">
<button className="logOutBtn">
로그아웃
 </button>
</div>
                         
   
                        </li>

                    </ul>

</nav>
<AlertModal/>
</>
    );
}