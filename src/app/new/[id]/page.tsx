import React from "react";
import axios from "axios";
async function getNewsItem(id: any) {
  try {
    const response = await axios(
      `https://e751-118-70-132-104.ngrok-free.app/news/${id}`
    );
    return response;
  } catch (error) {}
}

async function handleGetNews() {
  try {
    const res = await axios.get(
      "https://e751-118-70-132-104.ngrok-free.app/news/all"
    );
    return res;
  } catch (error) {}
}

async function PageDetailNews({ params }: { params: { id: Number } }) {
  const { id } = params;
  let itemNew: any = null;
  try {
    const resDetailNew = await getNewsItem(params.id);
    itemNew = resDetailNew?.data.data;
  } catch (error) {}
  // console.log("du lieu cua trang chi tiet tin tuc la : ", res?.data.data);
  // console.log("du lieu cua trang chi tiet tin tuc la : ", resDetailNew);
  const listNew = await handleGetNews();
  let news = null;
  if (listNew && listNew?.data.success == true) {
    console.log("thành công  ");
    console.log("Danh sach cac tin tuc la : ", listNew.data.data.items);
    news = listNew.data.data.items;
    // .map((item: any) => ({
    //   id: item.id,
    //   content: item.content
    // }));
  }

  //   console.log(params.id);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <div dangerouslySetInnerHTML={{ __html: itemNew?.content }}></div>
      </div>
      <div className="col-span-1">
        {news.map((item: any, index: number) => (
          <div key={index}>
            <h2 dangerouslySetInnerHTML={{ __html: itemNew?.content }}></h2>
          </div>
        ))}
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default PageDetailNews;
