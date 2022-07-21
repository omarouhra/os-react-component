import React from "react";
import Header from "../Header";

function index({ children }: any) {
  return (
    <div className='w-full mx-auto max-w-xl '>
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default index;
