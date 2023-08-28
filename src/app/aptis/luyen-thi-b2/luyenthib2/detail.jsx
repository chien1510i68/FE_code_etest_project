function Detail(props) {
  const names = [
    "Trình độ đầu vào",
    "Số buổi",
    "Lịch học",
    "Hình thức học",
    "Lộ trình đào tạo",
    "Mục tiêu đạt được",
    "Chi phí học",
  ];
  const ages = [
    "Học viên có điểm thi thử từ 400-500",
    "10 buổi, 120 phút/1 buổi.",
    "20-22h tối, tối 3-5-7, cả ngày cuối tuần.",
    " Học offline, học trực tuyến, học qua video.",
    [
      "Kỹ năng Nói Viết – 8 buổi",
      "Kỹ năng Nghe – 1 buổi",
      "Kỹ năng Đọc – 1 buổi",
    ],

    "Thi thử đầu ra được 650-800 điểm.",
    "15.000.000 VND",
  ];
  //   const combinedList = names.map((name, index) => ({
  //     name,
  //     age: ages[index],
  //   }));
  return (
    <div>
      {/* {combinedList.map((person, index) => (
        <div key={index} className="flex items-end my-[10px] gap-[5px] ">
          <h2>{person.name}</h2> : <p>{person.age}</p>
        </div>
      ))} */}
      {names.map((name, index) => (
        <div key={index} className="flex my-[10px] gap-[5px] ">
          <h2 className="name">{name}</h2> :
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
      ))}
    </div>
  );
}

export default Detail;
