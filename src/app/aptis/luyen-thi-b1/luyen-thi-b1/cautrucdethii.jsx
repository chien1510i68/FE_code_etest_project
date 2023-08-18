function Cautrucdethi(props) {
  const list = [
    {
      title: "Bài thi Nghe ",
      descipt: "(25 câu hỏi/55 phút):",
      content: [
        "Thi bằng hình thức lựa chọn đáp án trắc nghiệm A, B, C, D… Bạn có thể nghe lại lần 2. Bài thi phần Nghe sẽ có tổng cộng ba dạng câu hỏi chính và chúng có thể được sắp xếp theo thứ tự khác nhau.",
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
        "Đọc hiểu câu: Chọn từ hoàn chỉnh câu. Mỗi câu trong đoạn đưa ra riêng lẻ không liên quan đến nhau nên các bạn không cần hiểu rõ hay cố dịch hết nghĩa của cả đoạn.",
        "Gắn kết văn bản: Sắp xếp các câu lộn xộn thành một câu chuyện có nghĩa.",
        "Đọc hiểu văn bản ngắn: Thí sinh sẽ cần phải đọc hiểu một đoạn văn bản có độ dài khoảng 150 từ. Sau đó bạn hoàn thiện đoạn văn bằng cách lựa chọn từ đúng trong một danh sách các từ cho sẵn.",
        "Đọc hiểu văn bản dài: Thí sinh đọc đoạn văn 750 với danh sách các tiêu đề cho trước. Thí sinh gắn các tiêu đề có sẵn với từng đoạn văn bản có trong bài văn cho sẵn.",
      ],
    },
    {
      title: "Bài thi Viết ",
      descipt: " (4 phần/55 phút):",
      content: [
        "Viết từ: Thí sinh sẽ phải hoàn thành mẫu đơn bằng cách điền thông tin.",
        "Viết đoạn văn ngắn: Phần thi này một lần nữa sẽ ở dạng điền mẫu đơn, tuy nhiên thí sinh sẽ cần viết thành câu hoàn chỉnh với độ dài vào khoảng 20 đến 30 từ một câu.",
        "Viết ba phần của một đoạn hội thoại, tất cả các phần đều cần hoàn thành: Thời gian làm không quá 10 phút.",
        "Viết thư: Trong phần này, thí sinh sẽ viết một email thông thường cho một người bạn (khoảng 50 từ) và một email trang trọng gửi tới một người chưa quen biết (khoảng 120-150 từ).",
      ],
    },
    {
      title: "Bài thi Ngữ pháp Từ vựng ",
      content: [
        "Nối từ: tìm từ đồng nghĩa với từ ngữ đã cho trước.",
        "Định nghĩa từ: ghép định nghĩa với từ đã cho trước.",
        "Sử dụng từ: Hãy hoàn thành câu bằng cách chọn một từ chính xác nhất trong các từ đã cho trước.",
        "Tìm cặp từ hay tổ hợp từ: Đây thường là những câu hỏi gây khó khăn nhất bởi vì thí sinh cần biết từ nào (trong danh sách) hay thường đi với từ đã cho.",
      ],
    },
  ];
  return (
    <div>
      <h2 className="titleAptisB1">Cấu trúc đề thi Aptis B1</h2>
      <p>Bài thi gồm 4 kĩ năng và 1 phần thi ngữ pháp từ vựng</p>
      {list.map((item, ind) => (
        <div key={ind}>
          <div className="flex items-end my-[10px]">
            <h3>{item.title}</h3> <p>{item.descipt}</p>
          </div>

          <p>
            <ul className="list-disc ml-[5%]">
              {item.content.map((value, id) => (
                <li key={id}>{value}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cautrucdethi;
