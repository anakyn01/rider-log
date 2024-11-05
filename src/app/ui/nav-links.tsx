'use client' 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
   <>
<nav className="navbar navbar-expand-sm bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/01_login' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/01_login"
          >
            login
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/02_cert' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/02_cert"
          >
          cert
          </Link>  
        </li>
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/03_find' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/03_find"
          >
            find
          </Link> 
        </li>
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/04_pwfind/1' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/04_pwfind/1"
          >
            pwfind
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/05_signup' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/05_signup"
          >
            회원가입
          </Link>
        </li>
        <li className="nav-item">
        <Link
            className={`link ${pathname === '/06_dash' ? 'px-4 nav-link active' : 'px-4 nav-link'}`}
            href="/06_dash"
          >
             대시보드
          </Link>
        </li>

      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>

   </>
  );
}