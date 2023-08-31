"use client";
import { Button, Form, Radio } from "antd";
import React, { useEffect, useState } from "react";

function ListQuestion(props) {
  const data = [
    {
      id: 1,
      content: "Câu hỏi 1: Đâu là quốc gia nằm ở châu Á?",
      optionA: "Việt Nam Việt Nam ",
      optionB: "Mỹ",
      optionC: "Pháp",
      optionD: "Anh",
      correctOption: "A",
    },
    {
      id: 2,
      content: "Câu hỏi 2: Đâu là quốc gia nằm ở châu Á?",
      optionA: "Việt Nam ",
      optionB: "Mỹ",
      optionC: "Pháp",
      optionD: "Anh",
      correctOption: "A",
    },
    {
      id: 3,
      content: "Câu hỏi 3: Đâu là quốc gia nằm ở châu Á?",
      optionA: "Việt Nam ",
      optionB: "Mỹ",
      optionC: "Pháp",
      optionD: "Anh",
      correctOption: "A",
    },
    {
      id: 4,
      content: "Câu hỏi 4: Đâu là quốc gia nằm ở châu Á?",
      optionA: "Việt Nam ",
      optionB: "Mỹ",
      optionC: "Pháp",
      optionD: "Anh",
      correctOption: "A",
    },
  ];
  const [result, setResult] = useState([]);

  const handleAddResult = (index, value) => {
    setResult([...result, { [index]: value }]);
  };
  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <>
      <Form>
        {data.map((item) => (
          <>
            <span className="font-bold">
              {item.content} <br />
            </span>
            <Radio.Group
              key={item.id}
              className="grid-cols-2 grid gap-14"
              onChange={(e) => handleAddResult(item.content, e.target.value)}
            >
              <Radio className="col-span-1 my-8" name="A" value="A">
                {item.optionA}
              </Radio>
              <Radio className="col-span-1 my-8" name="B" value="B">
                {item.optionB}
              </Radio>
              <Radio className="col-span-1 my-8" name="C" value="C">
                {item.optionC}
              </Radio>
              <Radio className="col-span-1 my-8" name="D" value="D">
                {item.optionD}
              </Radio>
            </Radio.Group>
          </>
        ))}
      </Form>
    </>
  );
}

export default ListQuestion;
