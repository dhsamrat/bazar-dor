// import Image from "next/image";


// const Header = () => {


//     const date = new Date().toLocaleDateString("bn-BD",
//      {
//         dateStyle: "full",


//     });

//     return (
//         <div className="flex justify-between" >
//             <div className="flex items-center gap-2">

//              <Image
//              className="w-10 h-10" 
//              height={50} width={50} 
//              src={'/public/logo-icon.png'} 
//              alt=""/>

//              <div>
//                <h2> বাজার দর</h2>
//                <p>{date}</p>
//             </div>
//             </div>

//            <div className="flex gap-2">
//              <button className="btn">সাইন ইন</button>
//             <button className="btn bg-green-700 text-white">সাইন আপ</button>

//            </div>

//         </div>

//     );
// };

// export default Header;








"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-3 sm:px-5">
        <nav className="flex min-h-[56px] items-center justify-between gap-2 py-2">
          {/* Logo and Website Name */}
          <Link href="/" className="flex min-w-0 items-center gap-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-700 sm:h-10 sm:w-10">
              <Image
                src="/logo-icon.png"
                alt="বাজার দর"
                width={36}
                height={36}
                className="h-7 w-7 object-contain"
                priority
              />
            </div>

            <div className="min-w-0">
              <h2 className="text-base font-bold leading-tight text-gray-900 sm:text-lg">
                বাজার দর
              </h2>

              <p className="mt-1 whitespace-nowrap text-[10px] leading-tight text-gray-500">
                {date}
              </p>
            </div>
          </Link>

          {/* Authentication Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="whitespace-nowrap px-1 py-2 text-xs font-medium text-gray-800 transition hover:text-green-700 sm:px-2"
            >
              সাইন ইন
            </Link>

            <Link
              href="/register"
              className="whitespace-nowrap rounded-lg bg-green-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800 sm:px-4"
            >
              সাইন আপ
            </Link>
          </div>
        </nav>

        {/* Category Navigation */}
        <NavLinks />
      </div>
    </header>
  );
}



