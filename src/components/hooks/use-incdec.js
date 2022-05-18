import { useState, useEffect } from "react";

const useIncdec = (isIncreamentHandler) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueNum = setInterval(() => {
      // isIncreament
      //   ? setValue((prevState) => prevState + 1)
      //   : setValue((prevState) => prevState - 1);
      setValue(isIncreamentHandler);
    }, 500);

    return () => clearInterval(valueNum);
  }, [isIncreamentHandler]);

  return value;
};

export default useIncdec;
