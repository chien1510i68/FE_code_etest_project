import React from "react";

import { getNewsById, getAllNews } from "@/api/apiNews";

async function PageDetailNews({ params }) {
  const { id } = params;
  let itemNew = null;
  const resDetailNew = await getNewsById(params.id);
  itemNew = resDetailNew?.data;

  const listNew = await getAllNews();
  let news = null;
  if (listNew) {
    // console.log("thành công  ",listNew?.data?.items);

    news = listNew?.data?.items;
  }

  // console.log(params.id);

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="grid grid-cols-4 gap-48 my-[5%]">
        <div className="col-span-3">
          <div dangerouslySetInnerHTML={{ __html: itemNew?.content }}></div>
        </div>
        <div className="col-span-1">
          <div dangerouslySetInnerHTML={{ __html: itemNew?.image }}></div>
          {news.map((item, index) => (
            <div key={index}>
              <h3 dangerouslySetInnerHTML={{ __html: item?.name }}></h3>
              <div dangerouslySetInnerHTML={{ __html: item?.image }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageDetailNews;
