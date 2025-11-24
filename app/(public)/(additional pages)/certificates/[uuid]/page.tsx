/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";
import { CertificatePreview, CourseCard } from "./CertificatePreview";
type Props = {
  params: any;
};
const CertificateDetials = async ({ params }: Props) => {
  const uuid = (await params).uuid;
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/website/get-certificate?certificateId=${uuid}`
  );
  const data = result.data;

  return (
    <div className="flex justify-around items-center lg:flex-row flex-col mt-8 md:mt-16  px-3 max-w-7xl gap-10 mx-auto mb-10">
      <div className="w-full ">
        <div>
          <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
            সার্টিফিকেট প্রাপক
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {data.name}
          </h1>
        </div>
        <p className="text-lg  font-medium text-neutral-500 dark:text-neutral-400 mt-2 mb-4">
          সম্পন্নকৃত কোর্স
        </p>
        <CourseCard course={data?.course} />
      </div>
      <div className="max-w-[574px] w-full max-h-[421px] h-full">
        <CertificatePreview graduate={data} />
      </div>
    </div>
  );
};

export default CertificateDetials;
