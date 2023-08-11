import React from "react";
import BannerVstepB2 from "../../component/banner/BannerVstepB2";
import VstepB2Intro from "../../component/introduce/VstepB2Intro";
import IeltsIntro from "@/component/introduce/IeltsIntro";

function PageVstepB2(props) {
  const listIntroduceVstepB2 = [
    {
      title: "Đối tượng cần chứng chỉ tiếng Anh VSTEP B2",
      content:
        "Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại học Quốc gia Hà Nội, Đại học Thương Mại,.... Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở. Những người chuẩn bị làm đầu ra nghiên cứu sinh. Thi chuyên viên, giảng viên cao cấp. Ngoài những đối tượng kể trên thì việc sở hữu chứng chỉ tiếng Anh VSTEP B2 được coi là “một tấm vé thông hành” mở ra nhiều cơ hội phía trước.",
      image: "thangdiem_b2vstep.png",
    },
    {
      title: "Đối tượng cần chứng chỉ tiếng Anh VSTEP B2",
      content:
        "Sinh viên hệ chất lượng cao thuộc các trường Đại học như Đại học Quốc gia Hà Nội, Đại học Thương Mại,.... Giáo viên tiếng Anh cấp mầm non, tiểu học, trung học cơ sở. Những người chuẩn bị làm đầu ra nghiên cứu sinh. Thi chuyên viên, giảng viên cao cấp. Ngoài những đối tượng kể trên thì việc sở hữu chứng chỉ tiếng Anh VSTEP B2 được coi là “một tấm vé thông hành” mở ra nhiều cơ hội phía trước.",
      image: "thangdiem_b2vstep.png",
    },
  ];

  return (
    <div>
      <BannerVstepB2 />
      <VstepB2Intro listIntroduceVstepB2={listIntroduceVstepB2} />
    </div>
  );
}

export default PageVstepB2;
