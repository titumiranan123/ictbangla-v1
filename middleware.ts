/* eslint-disable @typescript-eslint/no-explicit-any */

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const { nextUrl } = request;

  const token: any = await getToken({
    req: request,
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SCRETE,
  });

  // console.log("token =========>", token);
  // console.log("current path =========>", nextUrl.pathname);

  // 1. Handle auth pages (sign-in, register) - redirect if already logged in
  if (
    nextUrl.pathname.startsWith("/sign-in") ||
    nextUrl.pathname.startsWith("/register")
  ) {
    if (token) {
      if (token?.user?.role === "USER") {
        return NextResponse.redirect(
          new URL("/student-dashboard", request.url)
        );
      } else if (token?.user?.role === "INSTRUCTOR") {
        return NextResponse.redirect(
          new URL("/instructor-dashboard", request.url)
        );
      } else if (token?.user?.role === "ADMIN") {
        return NextResponse.redirect(
          new URL("https://admin.ictbangla.com/sign-in", request.url)
        );
      }
    }
    return NextResponse.next();
  }

  // 2. Protect ALL instructor routes
  const isInstructorRoute =
    nextUrl.pathname.startsWith("/instructor-") ||
    nextUrl.pathname === "/instructor-dashboard" ||
    nextUrl.pathname.startsWith("/instructor/") ||
    nextUrl.pathname.startsWith("/instructor-course-preview");

  if (isInstructorRoute) {
    if (!token) {
      console.log("No token - redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (token?.user?.role !== "INSTRUCTOR") {
      console.log("User role is not INSTRUCTOR - redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // 3. Protect ALL student routes
  const isStudentRoute =
    nextUrl.pathname.startsWith("/student-") ||
    nextUrl.pathname === "/student-dashboard" ||
    nextUrl.pathname.startsWith("/student/");

  if (isStudentRoute) {
    if (!token) {
      console.log("No token - redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (token?.user?.role !== "USER") {
      console.log("User role is not USER - redirecting to sign-in");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // 4. Protect admin routes
  if (nextUrl.pathname.startsWith("/admin")) {
    if (!token || token?.user?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // 5. Protect other authenticated routes
  if (
    nextUrl.pathname.startsWith("/cart") ||
    nextUrl.pathname.startsWith("/checkout") ||
    nextUrl.pathname.startsWith("/payment-success") ||
    nextUrl.pathname.startsWith("/payment-fail")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    // Instructor specific routes
    "/instructor-dashboard",
    "/instructor-add-course",
    "/instructor-calendar",
    "/instructor-certificate",
    "/instructor-course-analytics/:path*",
    "/instructor-edit-course/:path*",
    "/instructor-mycourses",
    "/instructor-setting",
    "/instructor/:path*",

    // Student specific routes
    "/student-dashboard",
    "/student-blogs",
    "/student-calendar",
    "/student-certificate",
    "/student-create-blog",
    "/student-enrolled-course/:path*",
    "/student-mycourses",
    "/student-order",
    "/student-setting",
    "/student-wishlist",
    "/student/:path*",

    // Instructor course preview
    "/instructor-course-preview/:path*",

    // Auth and payment routes
    // "/sign-in",
    // "/register",
    // "/cart",
    // "/checkout",
    // "/payment-success",
    // "/payment-fail",

    // Admin routes
    "/admin",
    "/admin-:path*",
  ],
};
