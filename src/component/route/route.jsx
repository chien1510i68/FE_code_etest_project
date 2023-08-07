import React from "react";

function Route(props) {
  const list = [
    { step: "Bước 1", title: "Đăng ký thông tin", content: "học viên đăng ký" },
    { step: "Bước 2", title: "Nộp hồ sơ - Lệ phí", content: "học viên nộp" },
    { step: "Bước 3", title: "Hướng dẫn ôn thi", content: "bộ phận đào tạo" },
    { step: "Bước 4", title: "Trước ngày thi", content: "bộ phận đào tạo" },
    { step: "Bước 5", title: "Nhận kết quả", content: "học viên nhận" },
  ];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 className="title">Lộ trình học và thi</h2>
      <div>
        <ul>
          {list.map((value, ind) => (
            <li key={ind} style={{ padding: "10px" }}>
              <div
                style={{
                  height: "105px",
                  width: "994px",
                  display: "flex",
                  boxShadow: "1px 4px #aaaaaa",
                }}
              >
                <div
                  style={{
                    width: "142px",
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "white",
                    backgroundColor: "#FB9400",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {value.step}
                </div>
                <div
                  style={{
                    backgroundColor: "#FFF4E5",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "852px",
                  }}
                >
                  <div style={{ padding: "30px" }}>
                    <h3>{value.title}</h3>
                    <p>{value.content}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Route;
