function Detail2({ service }) {
  const names = [
    "Mô tả:",
    "Nhận bộ tài liệu luyện thi chứng chỉ tiếng Anh B2 VSTEP khi đăng ký khóa học tại đây",
  ];
  const ages = [
    [
      "Học trực tiếp, trực tuyến linh hoạt. Lịch học linh động, hỗ trợ xếp lịch, xếp lớp và đăng ký online cho học viên ở xa.",
      "Cung cấp học liệu miễn phí, bám sát cấu trúc đề. Lộ trình học chi tiết, theo sát hỗ trợ học viên tới khi thi đạt chứng chỉ.",
      "Trung tâm có liên kết với các trường được Bộ GD&ĐT cho phép thi và cấp chứng chỉ. Cam kết chứng chỉ chuẩn, lưu hồ sơ gốc toàn quốc.",
    ],
  ];

  return (
    <div>
      <div className=" my-[10px] gap-[5px] ">
        <h3>Mô tả:</h3>
        <ul className="list-disc ml-[5%]">
          {service.detailDescription.map((item, subIndex) => (
            <li key={subIndex}>{item}</li>
          ))}
        </ul>
      </div>
      {/* {names.map((name, index) => (
        <div key={index} className="my-[10px] gap-[5px] ">
          <h2 className="name">{name}</h2>
          {Array.isArray(ages[index]) ? (
            <ul className="list-disc ml-[5%]">
              {ages[index].map((age, subIndex) => (
                <li key={subIndex}>{age}</li>
              ))}
            </ul>
          ) : (
            <p className="age">{ages[index]}</p>
          )}
        </div>
      ))} */}
    </div>
  );
}

export default Detail2;
