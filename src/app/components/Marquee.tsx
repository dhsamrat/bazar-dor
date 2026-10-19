// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";
// import React from "react";

// interface Product {
//   id: number;
//   nameBn: string;
//   today: number;
//   unit: string;
//   categoryIcon: string;
//   change: {
//     dir: "up" | "down";
//     pct: number;
//   };
// }

// const Marquee = async () => {
//   const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");

//   const data: Product[] = await res.json();
  
//   return (
//     <div className="border-b border-base-300 bg-base-100 py-3">
//       <MarqueeText className="py-1" direction="right" duration={10}
//       pauseOnHover={true}>
//         {data.map((product) => (
//           <span
//             key={product.id}
//             className="mx-5 inline-flex items-center gap-2 whitespace-nowrap"
//           >
//             <span>{product.categoryIcon}</span>

//             <span className="font-semibold">
//               {product.nameBn}
//             </span>

//             <span>
//               {product.today} টাকা/{product.unit}
//             </span>

//             <span
//               className={
//                 product.change.dir === "up"
//                   ? "font-semibold text-error"
//                   : "font-semibold text-success"
//               }
//             >
//               {product.change.dir === "up" ? "▲" : "▼"}{" "}
//               {product.change.pct}%
//             </span>
//           </span>
//         ))}
//       </MarqueeText>
//     </div>
//   );
// };

// export default Marquee;






// interface Product {
//   id: number;
//   nameBn: string;
//   today: number;
//   unit: string;
//   categoryIcon: string;
//   change: {
//     dir: "up" | "down";
//     pct: number;
//   };
// }

// const Marquee = async () => {
//   const res = await fetch(
//     "https://api.abcz.workers.dev/api/bazardor/products",
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch product prices");
//   }

//   const data: Product[] = await res.json();

//   return (
//     <div className="w-full overflow-hidden border-b border-base-300 bg-base-100 py-3">
//       <div className="group flex w-full overflow-hidden">
//         <div className="flex w-max shrink-0 animate-marquee-right group-hover:[animation-play-state:paused]">
//           {[...data, ...data].map((product, index) => (
//             <span
//               key={`${product.id}-${index}`}
//               className="mx-5 inline-flex items-center gap-2 whitespace-nowrap py-1 text-sm"
//             >
//               <span>{product.categoryIcon}</span>

//               <span className="font-semibold">
//                 {product.nameBn}
//               </span>

//               <span>
//                 {product.today} টাকা/{product.unit}
//               </span>

//               <span
//                 className={
//                   product.change.dir === "up"
//                     ? "font-semibold text-error"
//                     : "font-semibold text-success"
//                 }
//               >
//                 {product.change.dir === "up" ? "▲" : "▼"}{" "}
//                 {product.change.pct}%
//               </span>

//               <span className="ml-2 text-base-300">|</span>
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;






import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Product {
  id: number;
  nameBn: string;
  today: number;
  unit: string;
  categoryIcon: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const data: Product[] = await res.json();

  return (
    <div className="border-b border-base-300 bg-base-100 py-3">
      <MarqueeText
  className="py-1"
  direction="left"
  duration={30}
  pauseOnHover={true}
>
      
        {data.map((product) => (
          <span
            key={product.id}
            className="mx-5 inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span>{product.categoryIcon}</span>

            <span className="font-semibold">
              {product.nameBn}
            </span>

            <span>
              {product.today} টাকা/{product.unit}
            </span>

            <span
              className={
                product.change.dir === "up"
                  ? "font-semibold text-error"
                  : "font-semibold text-success"
              }
            >
              {product.change.dir === "up" ? "▲" : "▼"}{" "}
              {product.change.pct}%
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;











