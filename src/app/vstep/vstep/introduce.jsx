import React from "react";
import Image from "next/image";
import pic from "public/ctr_3 1.png";
function Introduce(props) {
  return (
    <div
      style={{
        height: "445px",
        top: "138px",
      }}
    >
      {/* <div> 123</div> */}

      <div
        style={{
          height: "374px",
          backgroundColor: "#FFF4E5",
          display: "flex",
          alignItems: "center",
          gap: "100px",
        }}
      >
        {" "}
        <div
        // style={{
        //   flex: "1",
        //   position: "relative",
        //   paddingLeft: "123px",
        // }}
        >
          <Image
            src={pic}
            alt="pic"
            width={600}
            height={410}
            // layout="fill"
            // objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div
        // style={{ flex: "1", marginRight: "123px" }}
        >
          <h2
          //  style={{ fontSize: "32px", fontWeight: "500" }}
          >
            LUYỆN THI VSTEP
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "400" }}>
            VSTEP (Vietnamese Standardized Test of English Proficiency) là kỳ
            thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN)
            6 bậc dùng cho Việt Nam (tương đương với trình độ A1, A2, B1, B2,
            C1,C2) do các trường ủy quyền của Bộ Giáo dục và Đào tạo cấp.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
