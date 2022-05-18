import React from "react";
import useIncdec from "./hooks/use-incdec";

const Decreament = () => {
  const value = useIncdec((prevState) => prevState - 1);

  return (
    <section className="absolute top-1/2 m-0 max-w-md translate-y-1/2 rounded bg-slate-400 py-3 px-24 text-center">
      <h1>Decreament</h1>
      <p>{value}</p>
    </section>
  );
};

export default Decreament;
