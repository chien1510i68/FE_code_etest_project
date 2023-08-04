import React from "react";

function Course(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "30px",
      }}
    >
      <div
        style={{
          height: "883px",
          width: "480px",
          backgroundColor: "white",
          boxShadow: "2px 4px #aaaaaa",
          //   border: "solid 2px #000000",
        }}
      >
        <div
          style={{
            height: "80px",
            backgroundColor: "#FB9400",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          KHÓA ÔN B1
        </div>
        <div style={{ margin: "30px", height: "690px" }}>Nội dung</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              height: " 38px",
              width: "112px",
              backgroundColor: "#FB9400",
              color: "white",
              borderRadius: "8px",
              boxShadow: "4px #aaaaaa",
            }}
          >
            {" "}
            ĐĂNG KÝ HỌC
          </button>
        </div>
      </div>
      <div
        style={{
          height: "883px",
          width: "480px",
          backgroundColor: "white",
          boxShadow: "2px 4px #aaaaaa",
        }}
      >
        <div
          style={{
            height: "80px",
            backgroundColor: "#FB9400",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          KHÓA ÔN B2
        </div>
        <div style={{ margin: "30px", height: "690px" }}>Nội dung</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              height: " 38px",
              width: "112px",
              backgroundColor: "#FB9400",
              color: "white",
              borderRadius: "8px",
              boxShadow: "4px #aaaaaa ",
            }}
          >
            {" "}
            ĐĂNG KÝ HỌC
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
