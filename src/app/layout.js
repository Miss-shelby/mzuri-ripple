import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/shared/NavBar/NavBar";
import Footer from "./_components/shared/Footer/Footer";
import AllProjects from "./_components/AllProjects/page";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mzuri Ripple",
  description: "Explore range of ideas and kickstart your project",
};

//font used
const montserrat = Montserrat({
  subsets: ['latin'],
  display:'swap', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} min-h-screen w-full bg-white` } >
        <div className="min-h-screen bg-white">
          <NavBar/>
        <div className="">
        {children}
        </div>
        </div>
        <Footer/>
        </body>
    </html>
  );
}
