import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavLinks } from '@/app/ui/nav-links';
import 'bootstrap/dist/css/bootstrap.css';
import AddBootstrap from './components/AddBootstrap';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
      <title>Rider-log</title>
      <link href="http://localhost:3000/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
      <link href="http://localhost:3000/css/lider-log-css/liderCustom.css" rel="stylesheet" type="text/css"/>
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>  
      <link href="http://localhost:3000/css/sb-admin-2.min.css" rel="stylesheet"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"/>
      
      <script src="http://localhost:3000/vendor/jquery/jquery.min.js"/>
      <script src="http://localhost:3000/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
      <script src="http://localhost:3000/vendor/jquery-easing/jquery.easing.min.js"/>
      <script src="http://localhost:3000/js/sb-admin-2.min.js"/>
      <script type='text/javascript' src='//dapi.kakao.com/v2/maps/sdk.js?appkey=a0bf46b6f85adb1c911c864cba503e22&autoload=false'/>
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
<script src="https://unpkg.com/recharts/umd/Recharts.js"></script>
      </head>
      <body>

      <AddBootstrap/>
      {/*<NavLinks/>*/}

            {children}

          
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
          </body>
    </html>
  );
}