import { Col, Row } from "antd";
import React from "react";

function Route({item}) {
 
  return (
    // <div
    //   style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    // >
    //   <h2 className="title">Lộ trình học và thi</h2>
    //   <div>
    //     <ul>
    //       {list.map((value, ind) => (
    //         <li key={ind} style={{ padding: "10px" }}>
    //           <div
    //             style={{
    //               height: "105px",
    //               width: "994px",
    //               display: "flex",
    //               boxShadow: "1px 4px #aaaaaa",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: "142px",
    //                 fontSize: "22px",
    //                 fontWeight: "700",
    //                 color: "white",
    //                 backgroundColor: "#FB9400",
    //                 display: "flex",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //               }}
    //             >
    //               {value.step}
    //             </div>
    //             <div
    //               style={{
    //                 backgroundColor: "#FFF4E5",
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 justifyContent: "center",
    //                 width: "852px",
    //               }}
    //             >
    //               <div style={{ padding: "30px" }}>
    //                 <h3>{value.title}</h3>
    //                 <p>{value.content}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <Row className="mx-auto h-[25rem] my-[5rem] shadow-md hover:opacity-90 cursor-pointer">
      <Col span={4} className="bg-primaryColor relative pl-[100px] block">
        <h2 className="text-[#fff] font-[600] text-[5.5rem] block-center ">
          {item.step}
        </h2>
      </Col>
      <Col span={20} className="bg-[#FFF4E5] pl-[5rem] block relative">
        <div className="absolute top-[50%] translate-y-[-50%] ">
          <h3 className="text-[4.5rem]  font-[500]">{item.title}</h3>
          <p className="text-[4rem] fontt-[400]">
          {item.content}
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Route;
