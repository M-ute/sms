import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT*/}
       <div className="w-[15%] md:w-[10%] lg:w-[15%] xl:w-[15%] bg-gray-200 p-4 flex flex-col overflow-scroll" >
        <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block text-black font-extrabold"> Victory College</span>
        </Link>

        <Menu/>

       </div>
      {/*RIGHT*/}
      <div className="w-[85%] md:w-[90%] lg:w-[85%] xl:w-[85%] bg-gray-300 overflow-scroll flex flex-col">
        
        {/*NAVIGATION BAR*/}
        <Navbar/>
        {children}
      </div>

    </div>
     
); 
} 