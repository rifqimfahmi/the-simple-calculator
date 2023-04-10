import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../../components/Header";
import Calculator from "../../components/calculator/Calculator";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex-auto flex">
        <div className="flex-none w-4"></div>
        <div className="grow bg-orange-950">
          <Calculator />
        </div>
        <div className="flex-none w-4"></div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
