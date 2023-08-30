import React from "react";
import axios from "axios";
import {getNewsById, getAllNews} from "@/api/apiNews"
// async function getNewsItem(id: any) {
//   try {
//     const response = await axios(
//       `https://e751-118-70-132-104.ngrok-free.app/news/${id}`
//     );
//     return response;
//   } catch (error) {}
// }

// async function handleGetNews() {
//   try {
//     const res = await axios.get(
//       "https://e751-118-70-132-104.ngrok-free.app/news/all"
//     );
//     return res;
//   } catch (error) {}
// }

async function PageDetailNews({ params }: { params: { id: Number } }) {
  const { id } = params;
  let itemNew: any = null;
  try {
    const resDetailNew = await getNewsById(params.id);
    itemNew = resDetailNew?.data;
console.log("du lieu cua trang chi tiet tin tuc la : ", resDetailNew?.data);
  } catch (error) {}
  
  // console.log("du lieu cua trang chi tiet tin tuc la : ", resDetailNew);
  const listNew = await getAllNews();
  let news = null;
  if (listNew ) {
    console.log("thành công  ",listNew?.data?.items);
    // console.log("Danh sach cac tin tuc la : ",listNew?.data?.items);
    news = listNew?.data?.items;
    // .map((item: any) => ({
    //   id: item.id,
    //   content: item.content
    // }));
  }

    console.log(params.id);

  return (
    <div className="mx-auto max-w-[1440px]"><div className="grid grid-cols-4 gap-48 my-[5%]">
      <div className="col-span-3">
                <div dangerouslySetInnerHTML={{ __html: itemNew?.content }}></div>
      </div>
      <div className="col-span-1">
      <div dangerouslySetInnerHTML={{ __html: itemNew?.image }}></div>
        {news.map((item: any, index: number) => (
          <div key={index}>
            <h3 dangerouslySetInnerHTML={{ __html: item?.name }}></h3>
            <div dangerouslySetInnerHTML={{ __html: item?.image }}></div>
          </div>
        ))}
        
      </div>
    </div></div>
    
  );
}

export default PageDetailNews;
