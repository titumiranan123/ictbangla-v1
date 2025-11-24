/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Creator {
  _id: string;
  first_name: string;
  last_name: string;
}

export interface BasicInfo {
  title: string;
  slug: string;
  creator: Creator;
  status: string;
}

export interface Price {
  main: number;
  isDiscount: boolean;
  discount: number;
  percentage: number;
}

export interface Expiry {
  status: boolean;
  date: string;
}

export interface Pricing {
  isFree: boolean;
  price: Price;
  expiry: Expiry;
}

export interface Media {
  thumbnail: string;
}

export interface Course {
  _id: string;
  basicInfo: BasicInfo;
  pricing: Pricing;
  media: Media;
  sections: any[];
  ratings: any[];
  students?: number;
  lessons?: number;
  hours?: number;
  totalLessons?:number
  totalStudent?:number
  totalSections?:number
}

export interface IPurchasecard {
  course: {
    _id: string;
    user: string;
    course: Course;
    price: number;
    paymentStatus: "UNPAID" | "PAID";
    courseStatus: "RUNNING" | "COMPLETE";
    createdAt: string;
    updatedAt: string;
  };
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  role: "USER" | "ADMIN" | "MODERATOR";
  is_verified: boolean;
  is_approve: boolean;
  token: string;
  id: string;
}
