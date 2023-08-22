import React from "react";
import axios from "axios";
async function getNewsItem(id: any) {
  try {
    const response = await axios(
      `https://58ac-118-70-132-104.ngrok-free.app/news/${id}`
    );
    return response;
  } catch (error) {}
}

async function handleGetNews() {
  try {
    const res = await axios.get(
      "https://58ac-118-70-132-104.ngrok-free.app/news/all"
    );
    return res;
  } catch (error) {}
}

async function PageDetailNews({ params }: { params: { id: Number } }) {
  const { id } = params;
  const resDetailNew = await getNewsItem(params.id);
  // console.log("du lieu cua trang chi tiet tin tuc la : ", res?.data.data);
  // console.log("du lieu cua trang chi tiet tin tuc la : ", resDetailNew);
  const itemNew = resDetailNew?.data.data;
  const listNew = await handleGetNews();
  let news = null ; 
  if(listNew?.data.success == true){
    console.log("thành công  ");
    // console.log("Danh sach cac tin tuc la : " , listNew.data.data.items);
    news = listNew.data.data.items;

    
  }
  

  //   console.log(params.id);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3">
        <p>{itemNew.content}</p>
      </div>
      <div className="col-span-1">

        {
          news.map((item : any )=>(
            <div>
                <h2>{item.createdDate}</h2>
            </div>
          ))
        }
        <div>
          <img src="" alt="" />

        </div>

      </div>
    </div>
  );
}

export default PageDetailNews;
