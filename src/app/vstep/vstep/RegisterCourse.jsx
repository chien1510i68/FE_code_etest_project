import React from "react";

function RegisterCourse(props) {
  const List = [
    "Họ và tên",
    "Số điện thoại",
    "Email",
    "Nội dung tư vấn",
    "ĐĂNG KÝ",
  ];
  return (
    <div
      style={{
        height: "193px",
        backgroundColor: "#FB9400",
        color: "white",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        padding: "0 100px",
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: "700" }}>ĐĂNG KÝ KHÓA HỌC</h2>
      <div>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {List.map((value, ind) => (
            <li key={ind}>
              <div
                style={{
                  height: "60px",
                  width: ind === List.length - 1 ? "100px" : "210px",
                  border: "solid 1px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "10px",
                  color: ind === List.length - 1 ? "#FB9400" : "white",
                  backgroundColor:
                    ind === List.length - 1 ? "white" : "#FB9400",
                  borderRadius: "4px",
                }}
              >
                {value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegisterCourse;
