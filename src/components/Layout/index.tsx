import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='transitions min-h-screen bg-gray-50/95 dark:bg-gray-900'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
