import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function index({ children }: any) {
  return (
    <div className='mx-auto max-w-4xl px-5 lg:px-0 '>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default index;
