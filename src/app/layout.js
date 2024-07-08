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
console.log(montserrat);
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}min-h-screen w-full` } >
        <div className="max-w-[1920px] mx-auto min-h-screen   px-[15rem] bg-white">
          <NavBar/>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  );
}
