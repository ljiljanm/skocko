import React from "react";

const ArrayEx = () => {
  let ar = []; // generates array [ [1, 2, 3, 4, 5], [2, 4, 6, 8, 10]....[9, 18, 27, 36, 45]]
  for (let i = 0; i < 9; i++) {
    let innar = [];
    for (let j = 0; j < 5; j++) {
      innar[j] = (i + 1) * (j + 1);
    }
    ar.push(innar);
  }
  let outD = ar.map((innerAr) => {
    return (
      <div key={innerAr[0]}>
        {innerAr.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  });
  return (
    <div>
      <div>{outD}</div>
    </div>
  );
};

export default ArrayEx;
