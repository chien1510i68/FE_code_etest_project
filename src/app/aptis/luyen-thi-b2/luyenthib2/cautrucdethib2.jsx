function CautrucdethiB2(props) {
  const list = [
    {
      title: "Bài thi Nghe ",
      descipt: "(25 câu hỏi/55 phút):",
      content: [
        "Phần 1: Nghe nhận biết thông tin chi tiết và chọn đáp án đúng.",
        "Phần 2:  Nghe 4 đoạn độc thoại về cùng một chủ đề và xác định xem nhận định đã cho do người nào A, B, C, D nói.",
        "Phần 3:  Nghe và quyết định xem nhận định do người phụ nữ, nam giới hay cả hai cùng nói.",
        "Phần 4:  Nghe và chọn đáp án đúng để xác định thái độ, quan điểm, mục đích của người nói.",
      ],
    },
    {
      title: "Bài thi Nói ",
      descipt: "(4 phần/12 phút):",
      content: [
        "Phần 1: Thông tin cá nhân",
        "Phần 2: Mô tả, trình bày quan điểm, nguyên nhân và lý giải bằng việc quan sát bức tranh…",
        "Phần 3: Đưa ra sự so sánh giữa 2 bức tranh, trả lời các câu hỏi liên quan đến chủ đề.",
        "Phần 4: Thảo luận kinh nghiệm cá nhân và quan điểm về một chủ đề trừu tượng: Thí sinh sẽ tiếp tục được xem một bức ảnh, sau đó sẽ trả lời 3 câu hỏi về một chủ đề trừu tượng có liên quan đến bức ảnh đó.",
      ],
    },
    {
      title: "Bài thi Đọc ",
      descipt: " (4 phần/30 phút):",
      content: [
        "Phần 1: Chọn từ để hoàn thành câu trong một đoạn văn.",
        "Phần 2: Sắp xếp các câu theo đúng trật tự để tạo thành một đoạn văn.",
        "Phần 3: Đọc hiểu 4 đoạn văn tương ứng với 4 nhân vật. Lựa chọn nhận định đúng với từng nhân vật.",
        "Phần 4: Nối tiêu đề phù hợp với từng đoạn văn.",
      ],
    },
    {
      title: "Bài thi Viết ",
      descipt: " (4 phần/55 phút):",
      content: [
        "Phần 1:  Thí sinh sẽ phải hoàn thành mẫu đơn bằng cách điền thông tin.",
        "Phần 2:  Phần thi này một lần nữa sẽ ở dạng điền mẫu đơn, tuy nhiên thí sinh sẽ cần viết thành câu hoàn chỉnh với độ dài vào khoảng 20 đến 30 từ một câu.",
        "Phần 3:   Viết ba phần của một đoạn hội thoại, tất cả các phần đều cần hoàn thành: Thời gian làm không quá 10 phút.",
        "Phần 4:  Trong phần này, thí sinh sẽ viết một email thông thường cho một người bạn (khoảng 50 từ) và một email trang trọng gửi tới một người chưa quen biết (khoảng 120-150 từ).",
      ],
    },
    {
      title: "Bài thi Ngữ pháp Từ vựng ",
      descipt: " (50 câu/25 phút):",
      content: [
        "Trong phần Ngữ pháp có 25 câu hỏi, mỗi câu hỏi tập trung vào một khía cạnh cụ thể của ngữ pháp tiếng Anh. Trong khi phần lớn các câu hỏi sẽ kiểm tra tiếng Anh viết chính thống, thì có một số ít câu hỏi lại tập trung vào các khía cạnh của tiếng Anh nói, ví dụ như biếu mẫu ngữ pháp thích hợp để sử dụng trong một hoàn cảnh đặc biệt (trang trọng hoặc không trang trọng). Toàn bộ 25 câu hỏi đều dưới dạng trắc nghiệm với 3 phương án trả lời.",
        "Phần từ vựng của bài thi cũng có 25 câu hỏi. Các câu hỏi này được thể hiện dưới dạng các bộ gồm 5 từ mục tiêu (từ đang được kiểm tra) với 10 phương án trong đó để thí sinh lựa chọn.",
      ],
    },
  ];
  return (
    <div>
      <ul>
        {list.map((item, ind) => (
          <li key={ind}>
            <div className="flex items-end my-[10px]">
              <h3>{item.title}</h3> <p>{item.descipt}</p>
            </div>

            <p>
              <ul className="list-disc ml-[3%]">
                {item.content.map((value, id) => (
                  <li key={id}>{value}</li>
                ))}
              </ul>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CautrucdethiB2;
