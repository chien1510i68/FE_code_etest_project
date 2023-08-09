import React from "react";
import Image from "next/image";
import pic11 from "public/kh_11.jpg";
import pic12 from "public/kh_12.jpg";
import pic13 from "public/13.jpg";

function Advertisement(props) {
  const list = [
    {
      title: "MỤC TIÊU",
      content: "abc",
      pic: pic12,
    },
    {
      title: "PHÁT TRIỂN",
      content: "abcDEF",
      pic: pic11,
    },
    {
      title: "TRẢI NGHIỆM",
      content: "abcGHI",
      pic: pic13,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ul style={{ listStyleType: "none" }}>
          {list.map((value, ind) => (
            <li key={ind} style={{ padding: "50px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: ind === 1 ? "row-reverse" : "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "330px",
                  width: "1200px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "2px 3px #aaaaaa",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    // paddingLeft: "50px"
                  }}
                >
                  <div style={{ padding: "30px" }}>
                    <p style={{ fontSize: "22px", fontWeight: "500" }}>
                      {value.title}
                    </p>
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      {value.content}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    width: "600px",
                    height: "330px",
                    objectFit: "cover",
                  }}
                >
                  <Image
                    src={value.pic}
                    alt="pic"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Advertisement;
