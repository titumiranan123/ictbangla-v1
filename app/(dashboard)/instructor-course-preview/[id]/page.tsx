"use client";
import Image from "next/image";
import React from "react";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import home from "@/public/assets/icon/house-window.svg";

import WhatyouLearn from "@/components/(home)/course/WhatyouLearn";

import { useParams } from "next/navigation";
import Questionanswer from "@/components/(home)/coursedetails/QuestionanswerAccordion";
import Requirement from "@/components/(home)/course/Requirement";
import CourseDetailsSectionAccordion from "@/components/(home)/coursedetails/CourseDetailsSectionAccordion";
import CourseDetailsSkeleton from "@/components/skeletonloader/CourseDetailsSkeleton";
import { RenderStars } from "@/components/(home)/shared/RenderStars";
import WhatyouLearnSkeleton from "@/components/skeletonloader/WhatwillLearnskeleton";
import useInstructorCourseDetails from "@/hooks/instructor/useInstructorCourseDetails";
import TopBar from "@/components/(home)/Navbar/Topbar";
import Navbar from "@/components/(home)/Navbar/Navbar";
import CourseDetails from "@/components/(home)/course/CourseDetails";

const SingleCourse = () => {
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading } = useInstructorCourseDetails(id as string);

  return (
    <div>
      <TopBar />
      <Navbar />
      {/* Header Section */}
      <div className="text-black bg-secondary">
        <div className="container flex flex-col gap-2 justify-start pt-[80px] pb-6">
          <div className="flex gap-1 items-center">
            <Image
              className="w-[14px] h-[14px]"
              src={home}
              alt="home"
              priority
              decoding="async"
            />
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <span>Pages</span>
            <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
            <span>{data?.basicInfo?.category?.title || "Category"}</span>
          </div>
          {isLoading ? (
            <div className="lg:w-[60%] w-full">
              <h1 className="mt-[40px] bg-slate-300 w-full rounded-lg h-8 animate-pulse"></h1>
              <p className="w-full rounded-lg bg-slate-300 h-20 animate-pulse mt-2"></p>
              <div className="flex gap-10 mt-8">
                {[...Array(3)].map((_, idx) => (
                  <button
                    key={idx}
                    className="px-5 py-2 bg-gray-300 text-black w-32 h-9 animate-pulse rounded-lg"
                  ></button>
                ))}
              </div>
            </div>
          ) : (
            <div className="lg:w-[60%] w-full">
              <h1 className="mt-[40px] cardo capitalize">
                {data?.basicInfo?.title}
              </h1>
              <p className="font-[400] lg:text-[16px] lg:leading-[26px] mt-[5px]">
                {data?.basicInfo?.short_description}
              </p>
              <div className="flex items-center gap-10 mt-5">
                <div className="flex items-center gap-1">
                  <span>0</span> {RenderStars(0)}{" "}
                  <span className="ml-2">0 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path d="M17.5,0H6.5C4.019,0,2,2.019,2,4.5V20.5c0,1.93,1.57,3.5,3.5,3.5h12c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5Zm3.5,4.5v12.5H7V1h5V9.848c0,.502,.307,.93,.782,1.091,.476,.16,.979,.007,1.284-.392l.934-1.223,.934,1.223c.306,.402,.82,.551,1.284,.392,.475-.161,.782-.589,.782-1.091V1.036c1.694,.243,3,1.704,3,3.464ZM13,1h4V9.848c0,.09-.056,.127-.103,.144-.046,.015-.114,.02-.168-.051l-1.331-1.743c-.189-.248-.605-.248-.795,0l-1.331,1.743c-.056,.072-.123,.067-.168,.052-.047-.016-.103-.054-.103-.144V1ZM3,4.5c0-1.76,1.306-3.221,3-3.464v15.964h-.5c-.978,0-1.864,.404-2.5,1.053V4.5Zm14.5,18.5H5.5c-3.286-.059-3.284-4.942,0-5h15.5v1.5c0,1.93-1.57,3.5-3.5,3.5Z" />
                  </svg>{" "}
                  : <span>0 Lesson</span>
                </div>
                <div>
                  <p className="flex">
                    Last updated :
                    {new Date(data?.updatedAt)?.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="flex justify-between gap-10 lg:flex-row flex-col relative container">
        <div className="lg:w-[70%]">
          {isLoading ? (
            <div className="mt-10">
              <h2 className="w-full h-8 bg-slate-300 animate-pulse rounded-lg"></h2>
              <div className="mt-5 w-full h-32 bg-slate-300 animate-pulse rounded-lg "></div>
            </div>
          ) : (
            <div className="mt-10">
              <h2 className="">Course Description</h2>
              <div
                className="mt-5 text-[16px] font-[300] "
                dangerouslySetInnerHTML={{
                  __html: data?.basicInfo?.description,
                }}
              ></div>
            </div>
          )}

          <div className="border-b pb-10 mt-10">
            {isLoading ? (
              <WhatyouLearnSkeleton />
            ) : (
              <WhatyouLearn data={data?.info?.outcomes} />
            )}
          </div>
          <div className="border-b pb-10 mt-10">
            {isLoading ? (
              <WhatyouLearnSkeleton />
            ) : (
              <Requirement data={data?.info?.requirement} />
            )}
          </div>

          {isLoading ? (
            <>
              <div className=" pb-10 mt-10">
                <h2 className="w-full md:w-1/3 h-8 bg-slate-300 animate-pulse rounded-lg mb-5"></h2>
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full mt-1 h-10 bg-slate-300 animate-pulse rounded-lg"
                  >
                    {" "}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className=" pb-10 mt-10">
              <h2 className="font-bold mb-5">Frequently asked question</h2>
              <Questionanswer items={data?.info?.faq} />
            </div>
          )}

          {/* About This Course */}
          {isLoading ? (
            <>
              <div className=" pb-10 mt-10">
                <h2 className="w-full md:w-1/3 h-8 bg-slate-300 animate-pulse rounded-lg mb-5"></h2>
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full mt-1 h-20 bg-slate-300 animate-pulse rounded-lg"
                  >
                    {" "}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              {data?.sections?.length > 0 && (
                <div>
                  <h2 className="mb-6">Content Setion</h2>
                  <CourseDetailsSectionAccordion
                    sections={data?.sections}
                  />{" "}
                </div>
              )}
            </div>
          )}

          {/* <Coursereview /> */}

          {/* <div className="mt-6">
            <CourseIntstructorCard />
          </div> */}
        </div>

        {/* Sidebar */}
        <div className="lg:sticky lg:top-10 lg:-mt-32 rounded-[12px] lg:right-0 h-auto lg:w-[30%] w-full mt-12">
          {isLoading ? (
            <CourseDetailsSkeleton />
          ) : (
            <CourseDetails
              courseName={data?.basicInfo?.title}
              slug=""
              courseId={data?._id}
              pricing={data?.pricing}
              media={data?.media}
              totalLesson={data?.sections?.length}
              features={{
                videoHours: 24,
                articles: 5,
                resources: 50,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
