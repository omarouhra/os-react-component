import React from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

function index({ children }: any) {
  return (
    <section className='transitions  min-h-screen bg-gray-50/95 dark:bg-gray-900'>
      <div className='mx-auto max-w-4xl px-5 lg:px-0'>
        <Header />
        {children}
        <Footer />
      </div>
    </section>
  );
}

export default index;
