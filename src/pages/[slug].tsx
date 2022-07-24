import AnimatedHeroTitle from "@/components/AnimatedHeroTitle";
import ComponentPreview from "@/components/ComponentPreview";
import { useRouter } from "next/router";
import React from "react";

function Pereview() {
  return (
    <div>
      <section className='py-12'>
        <AnimatedHeroTitle />
      </section>
      <section className='py-12 space-y-12'>
        <ComponentPreview />
        <ComponentPreview />
        <ComponentPreview />
      </section>
    </div>
  );
}

export default Pereview;
