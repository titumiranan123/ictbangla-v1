interface pageProp {
  pageName: string;
  pageTitle: string;
  pagePragraph: string;
}
import Image from "next/image";
import home from "@/public/assets/icon/house-window.svg";
import angleRight from "@/public/assets/icon/angle-small-right.svg";
import Link from "next/link";
const Pagetitle = ({ pageName, pageTitle, pagePragraph }: pageProp) => {
  
  return (
    <div className="h-[260px] bg-secondary pt-10 ">
      <div className="container flex justify-center items-center flex-col text-black">
        <div  data-aos="fade-up"
          data-aos-delay="100" className="flex gap-1 items-center  ">
          <Link href={"/"}>
            <Image
              className="w-[14px] h-[14px]"
              src={home}
              alt="home"
              priority
              decoding="async"
            />
          </Link>
          <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
          পৃষ্ঠাসমূহ{" "}
          <Image className="w-[20px] h-[20px]" src={angleRight} alt="angle" />
          <span>{pageName}</span>
        </div>
        <h1  data-aos="fade-up"
          data-aos-delay="200" className="md:text-[20px] text-[18px]  mt-[40px] font-[600] capitalize">
          {pageTitle}
        </h1>
        <p  data-aos="fade-up"
          data-aos-delay="300" className="font-[400] max-w-4xl lg:text-[16px] lg:leading-[20px] mt-[5px] text-[14px]  text-center">
          {pagePragraph}
        </p>
      </div>
    </div>
  );
};

export default Pagetitle;
