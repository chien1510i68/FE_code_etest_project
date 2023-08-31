import React from "react";
import ListQuestion from "./ListQuestion"

function PageMocktest(prop: any) {
  return (
    <div className="max-w-[1440px] desktop:mx-[10%] tablet:mx-[10%] phone:mx-[5%] mt-[100px]">
    <h2 className="text-center text-orange-300 my-80">this is the page mock test</h2>
      <ListQuestion/>
    </div>
  );
}

export default PageMocktest;
