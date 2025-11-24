import React from "react";
import check from "@/public/assets/icon/check-circle.svg";
import Image from "next/image";
import Questionanswer from "../coursedetails/QuestionanswerAccordion";

interface ILearnProp {
  data: {
    category: string;
    paragraph: string;
    point: string[];
    question: [{ question: string; answer: string }];
  };
}

const WhatyouLearn: React.FC<ILearnProp> = ({ data }) => {
  return (
    <section className="mt-10  ">
      <h2 className="mb-4">কোর্সে কি কি বিষয় অন্তর্ভুক্ত থাকবে?</h2>
      {data?.category === "point" && (
        <ul className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          {data?.point?.map((p, idx) => (
            <li className="flex items-start gap-2" key={idx}>
              {" "}
              <Image className="w-4 h-4 mt-[6px]" src={check} alt="chec" /> {p}
            </li>
          ))}
        </ul>
      )}
      {data?.category === "question" && (
        <Questionanswer items={data?.question} />
      )}
      {data?.category === "paragraph" && (
        <div dangerouslySetInnerHTML={{ __html: data?.paragraph }} />
      )}
    </section>
  );
};

export default WhatyouLearn;
