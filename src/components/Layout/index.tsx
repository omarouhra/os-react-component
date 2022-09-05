import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='transitions min-h-screen overflow-hidden bg-gray-50/95 from-gray-900 via-gray-900 to-[#123089] dark:bg-gradient-to-r'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
