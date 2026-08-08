import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Khaijan",
    template: "%s | Yantun Khaijan",
  },
  description: "Best Fast Food Restaurant in Khulna",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`{poppins.className} h-full antialiased`}
    >
      
      <body className="">
        <header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-500">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" className="w-[120px]" width={120} height={30} />
          </Link>
          <div className="space-x-5">
            <Link  className="btn" href="/categories">Categories</Link>
            <Link  className="btn" href="/foods">Foods</Link>
            <Link className="btn" href="/reviews">Reviews</Link>
            <Link className="btn" href="/feedbacks">Feedbacks</Link>
          </div>
        </header>
        
        <main className="px-5 py-8">
          <CartProvider>
            {children}
          </CartProvider>
        </main> 
        
        
      </body>
    </html>
  );
}
