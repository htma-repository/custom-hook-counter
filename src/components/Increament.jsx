import React from "react";
import useIncdec from "./hooks/use-incdec";

const Increament = () => {
  const value = useIncdec((prevState) => prevState + 1);

  return (
    <section className="absolute top-1/3 m-0 max-w-md translate-y-1/4 rounded bg-slate-400 py-3 px-24 text-center">
      <h1>Increament</h1>
      <p>{value}</p>
    </section>
  );
};

export default Increament;
