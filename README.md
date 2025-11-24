This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
ictbangla-frontend
├─ app
│  ├─ (auth)
│  │  ├─ forgot-password
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ reset-password
│  │  │  └─ page.tsx
│  │  ├─ sign-in
│  │  │  ├─ page.tsx
│  │  │  ├─ SignIn.tsx
│  │  │  ├─ SignInSearchParamsHandler.tsx
│  │  │  └─ SignUpWithGoogle.tsx
│  │  └─ sign-up
│  │     ├─ page.tsx
│  │     └─ SignupComponent.tsx
│  ├─ (dashboard)
│  │  ├─ (instructor)
│  │  │  ├─ instructor
│  │  │  │  ├─ blogs
│  │  │  │  │  ├─ Blogcard.tsx
│  │  │  │  │  ├─ Bloglist.tsx
│  │  │  │  │  ├─ edit
│  │  │  │  │  │  └─ [id]
│  │  │  │  │  │     └─ page.tsx
│  │  │  │  │  ├─ fetchBlogBySlug.ts
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ [slug]
│  │  │  │  │     └─ page.tsx
│  │  │  │  └─ create
│  │  │  │     ├─ Editor.tsx
│  │  │  │     └─ page.tsx
│  │  │  ├─ instructor-add-course
│  │  │  │  └─ page.tsx
│  │  │  ├─ instructor-calendar
│  │  │  │  └─ page.tsx
│  │  │  ├─ instructor-certificate
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ UpdateForm.tsx
│  │  │  ├─ instructor-course-analytics
│  │  │  │  └─ [id]
│  │  │  │     └─ page.tsx
│  │  │  ├─ instructor-dashboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ instructor-edit-course
│  │  │  │  ├─ add-section
│  │  │  │  │  └─ [id]
│  │  │  │  │     └─ page.tsx
│  │  │  │  └─ [id]
│  │  │  │     └─ page.tsx
│  │  │  ├─ instructor-mycourses
│  │  │  │  └─ page.tsx
│  │  │  ├─ instructor-setting
│  │  │  │  └─ page.tsx
│  │  │  ├─ Instructorlayout.tsx
│  │  │  └─ layout.tsx
│  │  ├─ (student)
│  │  │  ├─ layout.tsx
│  │  │  ├─ student
│  │  │  │  ├─ blogs
│  │  │  │  │  ├─ Blogcard.tsx
│  │  │  │  │  ├─ Bloglist.tsx
│  │  │  │  │  ├─ fetchBlogBySlug.ts
│  │  │  │  │  ├─ page.tsx
│  │  │  │  │  └─ [slug]
│  │  │  │  │     └─ page.tsx
│  │  │  │  └─ create-blog
│  │  │  │     └─ page.tsx
│  │  │  ├─ student-blogs
│  │  │  │  ├─ Blogcard.tsx
│  │  │  │  ├─ Blogskeleton.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-calendar
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-certificate
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-create-blog
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-dashboard
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-enrolled-course
│  │  │  │  └─ [slug]
│  │  │  │     ├─ page.tsx
│  │  │  │     ├─ Quiz.tsx
│  │  │  │     ├─ SectionsList.tsx
│  │  │  │     ├─ SectionsListdash.tsx
│  │  │  │     └─ TabContent.tsx
│  │  │  ├─ student-mycourses
│  │  │  │  ├─ Coursecard.tsx
│  │  │  │  ├─ CourseSkeleton.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ ProgressBar.tsx
│  │  │  ├─ student-order
│  │  │  │  ├─ CourseEnrollmenthistory.tsx
│  │  │  │  ├─ generateInvoicePDF.ts
│  │  │  │  ├─ Invoicegenerator.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-setting
│  │  │  │  └─ page.tsx
│  │  │  ├─ student-wishlist
│  │  │  │  └─ page.tsx
│  │  │  └─ Studentlayout.tsx
│  │  └─ instructor-course-preview
│  │     └─ [id]
│  │        └─ page.tsx
│  ├─ (home)
│  │  ├─ (additional pages)
│  │  │  ├─ about-us
│  │  │  │  └─ page.tsx
│  │  │  ├─ cart
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ ShopCartClient.tsx
│  │  │  ├─ certificate
│  │  │  │  ├─ certificate.tsx
│  │  │  │  └─ page.tsx
│  │  │  ├─ checkout
│  │  │  │  ├─ CheckoutClient.tsx
│  │  │  │  ├─ ConversionTracking.tsx
│  │  │  │  ├─ Input.tsx
│  │  │  │  ├─ makeHash.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ payment
│  │  │  │     ├─ page.tsx
│  │  │  │     └─ Paymentform.tsx
│  │  │  ├─ contact
│  │  │  │  └─ page.tsx
│  │  │  ├─ faq
│  │  │  │  └─ page.tsx
│  │  │  ├─ help-center
│  │  │  │  └─ page.tsx
│  │  │  ├─ join-as-a-instructor
│  │  │  │  └─ page.tsx
│  │  │  ├─ our-gallery
│  │  │  │  └─ page.tsx
│  │  │  ├─ our-review
│  │  │  │  └─ page.tsx
│  │  │  ├─ payment
│  │  │  │  ├─ cancel
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ failed
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ success
│  │  │  │     ├─ invoice.tsx
│  │  │  │     ├─ page.tsx
│  │  │  │     └─ Pyamentsuccess.tsx
│  │  │  ├─ privacy-policy
│  │  │  │  └─ page.tsx
│  │  │  ├─ refund-policy
│  │  │  │  └─ page.tsx
│  │  │  └─ terms
│  │  │     └─ page.tsx
│  │  ├─ blog
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]
│  │  │     ├─ BlogSkeleton.tsx
│  │  │     ├─ fetchBlogBySlug.ts
│  │  │     ├─ page.tsx
│  │  │     ├─ PostComment.tsx
│  │  │     └─ PostcommentSkeleton.tsx
│  │  ├─ courses
│  │  │  ├─ CoursesHeader.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ ShortData.tsx
│  │  │  ├─ Sidebarfileter.tsx
│  │  │  ├─ URLFilterLoader.tsx
│  │  │  ├─ useURLFilters.tsx
│  │  │  └─ [slug]
│  │  │     ├─ CourseDetailsFooter.tsx
│  │  │     ├─ CourseDetailsHeader.tsx
│  │  │     ├─ CourseDetailsLeftside.tsx
│  │  │     ├─ CourseDetailsSidebar.tsx
│  │  │     ├─ CourseInfoTab.tsx
│  │  │     ├─ CoursePageHolder.tsx
│  │  │     ├─ Errorcourse.tsx
│  │  │     ├─ Loaddingpage.tsx
│  │  │     ├─ Offersection.tsx
│  │  │     ├─ page.tsx
│  │  │     └─ ScrollableTabs.tsx
│  │  ├─ free-courses
│  │  │  └─ page.tsx
│  │  ├─ instructors
│  │  │  ├─ page.tsx
│  │  │  └─ [instructor_username]
│  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ Playbutton.tsx
│  │  ├─ upcoming-batches
│  │  │  ├─ page.tsx
│  │  │  └─ UpcomingCourse.tsx
│  │  └─ Wave.tsx
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.ts
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ not-found.tsx
│  ├─ Providers.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ assets
├─ components
│  ├─ (home)
│  │  ├─ about
│  │  │  ├─ AboutFirstSection.tsx
│  │  │  ├─ Aboutinstructors.tsx
│  │  │  ├─ Abouts.tsx
│  │  │  ├─ Aboutstate.tsx
│  │  │  ├─ InstructorSlider.tsx
│  │  │  ├─ Joinnow.tsx
│  │  │  ├─ OurVision.tsx
│  │  │  └─ Testimonials.tsx
│  │  ├─ Aos
│  │  │  └─ Aosconfig.tsx
│  │  ├─ blog
│  │  │  ├─ Blogcard.tsx
│  │  │  ├─ BlogFilter.tsx
│  │  │  └─ UserBlogcard.tsx
│  │  ├─ cart
│  │  │  └─ Cartitem.tsx
│  │  ├─ contact
│  │  │  └─ ContactFrom.tsx
│  │  ├─ course
│  │  │  ├─ CourseContent.tsx
│  │  │  ├─ CourseDetails.tsx
│  │  │  ├─ CoursedetailsLeftInputbox.tsx
│  │  │  ├─ CourseDetailsPrefetch.tsx
│  │  │  ├─ CourseFillter.tsx
│  │  │  ├─ CourseIntstructorCard.tsx
│  │  │  ├─ CourseRating.tsx
│  │  │  ├─ CourseRatingFillter.tsx
│  │  │  ├─ Coursereview.tsx
│  │  │  ├─ Coursereviewcard.tsx
│  │  │  ├─ filter
│  │  │  │  ├─ Categoryfilter.tsx
│  │  │  │  ├─ CourseFilter.tsx
│  │  │  │  ├─ LevelFilter.tsx
│  │  │  │  └─ Pricefilter.tsx
│  │  │  ├─ NewCourseCard.tsx
│  │  │  ├─ Purchasecard.tsx
│  │  │  ├─ Requirement.tsx
│  │  │  └─ WhatyouLearn.tsx
│  │  ├─ coursedetails
│  │  │  ├─ CourseDetailsSectionAccordion.tsx
│  │  │  └─ QuestionanswerAccordion.tsx
│  │  ├─ cursor
│  │  │  └─ Followercursor.tsx
│  │  ├─ footer
│  │  │  └─ Footer.tsx
│  │  ├─ home
│  │  │  ├─ additional
│  │  │  │  ├─ CertificateSection.tsx
│  │  │  │  ├─ CourseLearningSection.tsx
│  │  │  │  ├─ CourseReviewSection.tsx
│  │  │  │  ├─ MentorCard.tsx
│  │  │  │  └─ MentorSection.tsx
│  │  │  ├─ Admission.tsx
│  │  │  ├─ BecomeAInstructor.tsx
│  │  │  ├─ Callinfo.tsx
│  │  │  ├─ Category.tsx
│  │  │  ├─ Certificatesection.tsx
│  │  │  ├─ CommonCourseslider.tsx
│  │  │  ├─ Counter.tsx
│  │  │  ├─ EventAdd.tsx
│  │  │  ├─ Flashicon.tsx
│  │  │  ├─ HeaderButton.tsx
│  │  │  ├─ HeaderCarsoul.tsx
│  │  │  ├─ Herosection.tsx
│  │  │  ├─ HomeTestimonial.tsx
│  │  │  ├─ LatesedSkill.tsx
│  │  │  ├─ LatestSection.tsx
│  │  │  ├─ OurPatner.tsx
│  │  │  ├─ Ourpatners.tsx
│  │  │  ├─ PulseIcon
│  │  │  │  ├─ Pluseicon.module.css
│  │  │  │  └─ PluseIcon.tsx
│  │  │  ├─ RecordedCourse.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  ├─ SingleBlogcard.tsx
│  │  │  ├─ Statesection.tsx
│  │  │  ├─ Strudentcarosul.tsx
│  │  │  ├─ Studenttestimonialsection.tsx
│  │  │  ├─ SuccessClient.tsx
│  │  │  ├─ Successsection.tsx
│  │  │  ├─ Supportsection.tsx
│  │  │  ├─ SwiperTab.tsx
│  │  │  ├─ TopCourseSection.tsx
│  │  │  ├─ UpcomingSection.tsx
│  │  │  └─ WhyStudyWithUs.tsx
│  │  ├─ mobile
│  │  │  └─ MobileHeader.tsx
│  │  ├─ Navbar
│  │  │  ├─ CustomLink.tsx
│  │  │  ├─ DashboardNavbar.tsx
│  │  │  ├─ Mobiletoggole.tsx
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ NavSearch.tsx
│  │  │  ├─ NextSearch.tsx
│  │  │  ├─ ToggoleClientNav.tsx
│  │  │  └─ Topbar.tsx
│  │  ├─ paymentMethod
│  │  │  └─ Paymentmethod.tsx
│  │  ├─ pop
│  │  │  └─ Footerpop.tsx
│  │  ├─ shared
│  │  │  ├─ Aosinitializer.tsx
│  │  │  ├─ Button.tsx
│  │  │  ├─ CollapsListitem.tsx
│  │  │  ├─ Imagescanner.tsx
│  │  │  ├─ pagetitle.tsx
│  │  │  ├─ Pagination.tsx
│  │  │  ├─ Postcomment.tsx
│  │  │  ├─ ProfileStatusCard.tsx
│  │  │  ├─ RenderStars.tsx
│  │  │  ├─ ScrollTopTop.tsx
│  │  │  └─ TopicButton.tsx
│  │  └─ socialbot
│  │     ├─ Messanger.tsx
│  │     └─ WhatsappChatbot.tsx
│  ├─ (instructor)
│  │  ├─ createCourse
│  │  │  ├─ Basicinfo.tsx
│  │  │  ├─ Coureseinfo.tsx
│  │  │  ├─ Coursepricing.tsx
│  │  │  ├─ MediaSeo.tsx
│  │  │  ├─ MediaUplaod.tsx
│  │  │  ├─ Update
│  │  │  │  └─ UpdateCoursePricing.tsx
│  │  │  └─ Videouplaod.tsx
│  │  ├─ editCourse
│  │  │  ├─ Coureseinfo.tsx
│  │  │  ├─ EditBasicinfo.tsx
│  │  │  ├─ EditCoursepricing.tsx
│  │  │  └─ MediaSeo.tsx
│  │  ├─ instructor
│  │  │  ├─ InstructorCard.tsx
│  │  │  ├─ InstructorContact.tsx
│  │  │  ├─ InstructorTestimonial.tsx
│  │  │  └─ TeampInstructorcard.tsx
│  │  ├─ instructoranalytics
│  │  │  └─ ClassAnalyticsChart.tsx
│  │  ├─ instructorDashboard
│  │  │  ├─ AddLesson.tsx
│  │  │  ├─ Addsection.tsx
│  │  │  ├─ Dashboardclasslist.tsx
│  │  │  ├─ EditCoursecard.tsx
│  │  │  ├─ InstructorHeader.tsx
│  │  │  ├─ InstructorNav.tsx
│  │  │  ├─ UpdateLesson.tsx
│  │  │  └─ UpdateSection.tsx
│  │  └─ others
│  │     ├─ Accordion.tsx
│  │     ├─ CourseContainer.tsx
│  │     ├─ Input.tsx
│  │     ├─ SectionAccordion.tsx
│  │     ├─ Tab.tsx
│  │     └─ Texteditor.tsx
│  ├─ (student)
│  │  └─ studentDashborad
│  │     ├─ ChangePassword.tsx
│  │     ├─ Classcard.tsx
│  │     ├─ ClassSchedule.tsx
│  │     ├─ Dashboardnav.tsx
│  │     ├─ Profileprogress.tsx
│  │     ├─ Studentheader.tsx
│  │     ├─ Studentprofile.tsx
│  │     ├─ Studentprogress.tsx
│  │     └─ Studentstatuscard.tsx
│  ├─ GTM.tsx
│  ├─ product
│  │  └─ ProductCard.tsx
│  ├─ redux
│  │  └─ Reduxprovider.tsx
│  └─ skeletonloader
│     ├─ BecomeaInstructorSkeleton.tsx
│     ├─ BlogcardSkeleton.tsx
│     ├─ CalendarSkeleton.tsx
│     ├─ CategorySkeleton.tsx
│     ├─ CertificateSkeletonLoader.tsx
│     ├─ CourseCardSkeleton.tsx
│     ├─ CourseDetailsSkeleton.tsx
│     ├─ CourseRequirementSkeleton.tsx
│     ├─ EditBasicInfoSkeleton.tsx
│     ├─ EditCoursecardSkeleton.tsx
│     ├─ Featureblogskeleton.tsx
│     ├─ HeaderSkeletonLoader.tsx
│     ├─ Homelatestedskillskeleton.tsx
│     ├─ HomestateSkeleton.tsx
│     ├─ InstructorcardSkeleton.tsx
│     ├─ InstructorclassSheduleSkeleton.tsx
│     ├─ InstructorHeaderSkeleton.tsx
│     ├─ InstructorMyCourseSkeleton.tsx
│     ├─ InstructorNavSkeleton.tsx
│     ├─ MonthlySkeleton.tsx
│     ├─ ProfileStatusSkeleton.tsx
│     ├─ StudentProfileStatusSkeleton.tsx
│     └─ WhatwillLearnskeleton.tsx
├─ data
│  └─ instructors.ts
├─ eslint.config.mjs
├─ hooks
│  ├─ (home)
│  │  └─ usePopUpPurchase.tsx
│  ├─ (instructor)
│  ├─ (student)
│  ├─ apiurl.ts
│  ├─ asynFunction
│  │  ├─ courseList.ts
│  │  └─ fetchHome.ts
│  ├─ fetchfunctions
│  │  ├─ instructor
│  │  │  └─ blogfetch.tsx
│  │  └─ public
│  ├─ instructor
│  │  ├─ page.tsx
│  │  ├─ useBlogDetails.tsx
│  │  ├─ useCourseAnalytics.tsx
│  │  ├─ useCourseClassAnalytics.tsx
│  │  ├─ useInstructorblog.tsx
│  │  ├─ useInstructorCertificateCourse.tsx
│  │  ├─ useInstructorClassList.tsx
│  │  ├─ useInstructorCourse.tsx
│  │  ├─ useInstructorCourseDetails.tsx
│  │  ├─ useInstructorGetStudentCertificate.tsx
│  │  └─ useInstructorSection.tsx
│  ├─ public
│  │  ├─ publicFetchfun
│  │  │  └─ coursedetailsfetch.tsx
│  │  ├─ useAllHomeData.tsx
│  │  ├─ useBlogCategory.tsx
│  │  ├─ useBlogDetails.tsx
│  │  ├─ useBlogs.tsx
│  │  ├─ useCategory.tsx
│  │  ├─ useCourse.tsx
│  │  ├─ useHomeCourse.tsx
│  │  ├─ useHomeDataSlice.tsx
│  │  ├─ useInstructorDetails.tsx
│  │  ├─ useInstructorlist.tsx
│  │  └─ useSetting.tsx
│  ├─ publicpages
│  │  ├─ fetchfuncton
│  │  │  └─ homdata.tsx
│  │  └─ useHomeData.tsx
│  ├─ student
│  │  ├─ useCertificateCourse.tsx
│  │  ├─ useClasslist.tsx
│  │  ├─ useEnrolledCourse.tsx
│  │  ├─ useGetStudentCertificate.tsx
│  │  ├─ useLessonVideo.tsx
│  │  ├─ useOrderHistory.tsx
│  │  ├─ usePurchasecourse.tsx
│  │  ├─ useSectionList.tsx
│  │  ├─ useUserBlog.tsx
│  │  ├─ useUserDashboard.tsx
│  │  └─ useWishList.tsx
│  └─ useUserProfile.tsx
├─ interface
│  ├─ Course.tsx
│  └─ interface.ts
├─ lib
│  ├─ Googletagm.tsx
│  └─ GTMPageView.tsx
├─ middleware.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ assets
│  │  ├─ 404.png
│  │  ├─ about_images
│  │  │  ├─ about-10.jpg
│  │  │  ├─ about-2.jpg
│  │  │  ├─ about-9.jpg
│  │  │  ├─ about1.jpg
│  │  │  ├─ about3.jpg
│  │  │  ├─ about5.jpg
│  │  │  ├─ about6.jpg
│  │  │  ├─ aboutbanner.png
│  │  │  ├─ globalcommunity.svg
│  │  │  ├─ icon-1.svg
│  │  │  ├─ icon-2.svg
│  │  │  ├─ icon-3.svg
│  │  │  ├─ icon-4.svg
│  │  │  ├─ teacher.svg
│  │  │  ├─ topNotch.svg
│  │  │  ├─ user-1.png
│  │  │  ├─ user-2.jpg
│  │  │  ├─ user-3.png
│  │  │  ├─ user-4.png
│  │  │  ├─ user-5.png
│  │  │  ├─ user-6.png
│  │  │  └─ vision.jpg
│  │  ├─ admission.png
│  │  ├─ become-instructor-1.png
│  │  ├─ bkash.png
│  │  ├─ blogs
│  │  │  ├─ blog-01.jpg
│  │  │  ├─ blog-07.jpg
│  │  │  ├─ blog-12 (1).jpg
│  │  │  ├─ blog-12.jpg
│  │  │  └─ header.jpg
│  │  ├─ bookmark.png
│  │  ├─ callbg.png
│  │  ├─ contact-img.png
│  │  ├─ contact-page-image.jpg
│  │  ├─ coursesinglepage
│  │  │  ├─ asset 3.png
│  │  │  ├─ asset 33.jpeg
│  │  │  ├─ asset 4.png
│  │  │  ├─ asset 5.png
│  │  │  ├─ asset 6.png
│  │  │  ├─ asset-10.png
│  │  │  ├─ asset-11.png
│  │  │  ├─ asset-12.png
│  │  │  ├─ asset-13.png
│  │  │  ├─ asset-14.png
│  │  │  ├─ asset-15.jpeg
│  │  │  ├─ asset-16.png
│  │  │  ├─ asset-17.jpeg
│  │  │  ├─ asset-18.jpeg
│  │  │  ├─ asset-19.jpeg
│  │  │  ├─ asset-20.jpeg
│  │  │  ├─ asset-21.jpeg
│  │  │  ├─ asset-22.jpeg
│  │  │  ├─ asset-23.jpeg
│  │  │  ├─ asset-24.jpeg
│  │  │  ├─ asset-34.png
│  │  │  ├─ asset-7.png
│  │  │  ├─ asset-8.png
│  │  │  ├─ asset-9.png
│  │  │  └─ asset25.jpeg
│  │  ├─ footerlogo.png
│  │  ├─ get-started.jpg
│  │  ├─ google.png
│  │  ├─ hero-bg.png
│  │  ├─ icon
│  │  │  ├─ angle-small-right.svg
│  │  │  ├─ arrow-up-right.svg
│  │  │  ├─ arrow.svg
│  │  │  ├─ award.svg
│  │  │  ├─ bags-shopping.svg
│  │  │  ├─ book.svg
│  │  │  ├─ certificate.svg
│  │  │  ├─ check-circle.svg
│  │  │  ├─ check.svg
│  │  │  ├─ circle-phone.svg
│  │  │  ├─ clock-three.svg
│  │  │  ├─ coursinrollment.svg
│  │  │  ├─ dashboard
│  │  │  │  ├─ alarm-clock.svg
│  │  │  │  ├─ check-strudent.svg
│  │  │  │  ├─ file-video.svg
│  │  │  │  ├─ graduation-cap.svg
│  │  │  │  ├─ play-circle.svg
│  │  │  │  └─ total-strudent.svg
│  │  │  ├─ document.svg
│  │  │  ├─ download.svg
│  │  │  ├─ facebook.svg
│  │  │  ├─ free-resource.svg
│  │  │  ├─ globalcomunity.svg
│  │  │  ├─ house-window.svg
│  │  │  ├─ infinity.svg
│  │  │  ├─ instructoricon.svg
│  │  │  ├─ land-layer-location.svg
│  │  │  ├─ language.svg
│  │  │  ├─ learn-aby-time.svg
│  │  │  ├─ lesson.svg
│  │  │  ├─ logo.svg
│  │  │  ├─ mobile.svg
│  │  │  ├─ onlinevidoe.svg
│  │  │  ├─ play-circle.svg
│  │  │  ├─ search.svg
│  │  │  ├─ skillbased.svg
│  │  │  ├─ TopNotchCourse.svg
│  │  │  ├─ trash-xmark.svg
│  │  │  ├─ trofi.svg
│  │  │  ├─ twitter.svg
│  │  │  ├─ users.svg
│  │  │  └─ x.svg
│  │  ├─ influncer
│  │  │  ├─ afr.jpg
│  │  │  ├─ Asaduzzaman-Joy.jpg
│  │  │  ├─ dristy.jpg
│  │  │  ├─ eshan.jpg
│  │  │  ├─ Farhan.jpg
│  │  │  ├─ Manik.jpg
│  │  │  ├─ maruf.jpg
│  │  │  ├─ Md-Asadul-Islam.jpg
│  │  │  ├─ prasha.jpg
│  │  │  ├─ salahuddin.jpg
│  │  │  ├─ st-uniqe.jpg
│  │  │  ├─ wahidur.jpg
│  │  │  └─ zibrann.jpg
│  │  ├─ instructors-01.jpg
│  │  ├─ instructors-02.jpg
│  │  ├─ instructors-03.jpg
│  │  ├─ instructors-04.jpg
│  │  ├─ instructors-05.jpg
│  │  ├─ instructors-20.jpg
│  │  ├─ instructors-21.jpg
│  │  ├─ instructors-23.jpg
│  │  ├─ instructors-24.jpg
│  │  ├─ leftside.png
│  │  ├─ login.jpg
│  │  ├─ logo.png
│  │  ├─ logout.jpg
│  │  ├─ mentor
│  │  │  ├─ mentor-intruduce--naimur.jpg
│  │  │  ├─ mentor-intruduce-ashrafur.jpg
│  │  │  ├─ mentor-intruduce-promi.jpg
│  │  │  ├─ mentor-intruduce-Rajon.jpg
│  │  │  ├─ mentor-intruduce-Tahmid-arman.jpg
│  │  │  ├─ mentor-intruduce-tahmidur.jpg
│  │  │  └─ tamim.jpg
│  │  ├─ patner
│  │  │  ├─ atb jobs.png
│  │  │  ├─ bdjobs.png
│  │  │  ├─ Dianahost.png
│  │  │  ├─ Foodi.png
│  │  │  ├─ furnito.png
│  │  │  ├─ Graho academy.png
│  │  │  ├─ Graho.png
│  │  │  ├─ Moto Fix.png
│  │  │  ├─ reddata.png
│  │  │  ├─ Rider_s Option.png
│  │  │  ├─ Shawapnadip.png
│  │  │  ├─ Shomvob.png
│  │  │  ├─ Skilljob.png
│  │  │  └─ Ui barn.png
│  │  ├─ payment
│  │  │  ├─ bkash.png
│  │  │  ├─ Habiba.png
│  │  │  ├─ Mahfuzul.png
│  │  │  ├─ nogad.png
│  │  │  ├─ Rabiul.png
│  │  │  ├─ rocket.png
│  │  │  └─ ssl.png
│  │  ├─ review
│  │  │  ├─ Habiba.png
│  │  │  ├─ Mahfuzul.png
│  │  │  ├─ quazimohsin.png
│  │  │  ├─ Rabiul.png
│  │  │  ├─ shape.png
│  │  │  └─ user.png
│  │  ├─ review-2.png
│  │  ├─ right.png
│  │  ├─ success
│  │  │  ├─ review1.png
│  │  │  ├─ review10.jpg
│  │  │  ├─ review11.jpg
│  │  │  ├─ review12.jpg
│  │  │  ├─ review2.png
│  │  │  ├─ review3.png
│  │  │  ├─ review4.png
│  │  │  ├─ review5.jpg
│  │  │  ├─ review6.png
│  │  │  ├─ review7.png
│  │  │  ├─ review8.png
│  │  │  └─ review9.jpg
│  │  └─ support.png
│  ├─ book-bookmark.svg
│  ├─ certificate-template.png
│  ├─ fonts
│  │  ├─ Montserrat-Bold.ttf
│  │  └─ Montserrat-SemiBold.ttf
│  ├─ icon.svg
│  ├─ messenger.webp
│  ├─ removeicon
│  │  ├─ file-edit.svg
│  │  └─ heart.svg
│  ├─ signature.png
│  ├─ smallpalybutton.png
│  ├─ ssl.png
│  └─ successicon.png
├─ README.md
├─ redux
│  ├─ authSlice.tsx
│  ├─ cartSlice.tsx
│  ├─ courseSlice.tsx
│  ├─ store.ts
│  └─ uploadSlice.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ utils
   ├─ calculateProfileProgress.ts
   ├─ datalayer
   │  ├─ DataCookie.ts
   │  ├─ IpReturn.ts
   │  └─ TrackingLayout.tsx
   ├─ getAverageRating.ts
   ├─ googleLogin.ts
   ├─ instructors-utils
   │  └─ courseSectionfn.ts
   ├─ interface.ts
   ├─ loader.css
   ├─ Loader.tsx
   ├─ queryclient
   │  └─ queryClient.tsx
   ├─ ShowConfirmToast.tsx
   ├─ sluggenerators.tsx
   ├─ sortedCourses.ts
   ├─ useFilteredCourse.tsx
   └─ VerificationCode.tsx

```# ictbangla-v1
# ictbangla-v1
