import Image from "next/image";
import Link from "next/link";
// ---------- Types ----------
export type Course = {
  id: string;
  title: string;
  slut: string;
  subtitle?: string;
  instructor: string;
  thumbnail: string;
};

export type Graduate = {
  slug: string;
  name: string;
  course: Course;
  highlights: string[];
  certificate_image: string;
  issuedDate?: string;
};
export function CertificatePreview({ graduate }: { graduate: Graduate }) {
  return (
    <div className="sticky top-6">
      <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950">
        <div className="relative max-w-[574px] w-full max-h-[421px] h-full">
          <Image
            src={graduate.certificate_image}
            alt={`Certificate of completion for ${graduate.name}`}
            className="object-cover"
            priority
            width={574}
            height={421}
          />
        </div>
        <div className="flex flex-col justify-between gap-3 border-t px-4 py-3 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 sm:flex-row sm:items-center">
          <span>Issued: {graduate.issuedDate ?? "Not specified"}</span>
          <a
            href={graduate.certificate_image}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-1.5 text-center ring-1 ring-inset ring-neutral-300 transition-colors hover:bg-neutral-50 dark:ring-neutral-700 dark:hover:bg-neutral-900"
          >
            View Full Size
          </a>
        </div>
      </div>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all hover:shadow-md dark:bg-neutral-900/60 sm:flex-row sm:items-center max-w-[450px] w-full">
      <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-40">
        <Image
          src={course.thumbnail}
          alt={`${course.title} course thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 160px"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold leading-tight text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Instructor: {course.instructor}
        </p>
        {course.subtitle && (
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {course.subtitle}
          </p>
        )}
      </div>

      <Link
        href={`/courses/${course?.slut}`}
        className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Course
      </Link>
    </div>
  );
}

export function renderQuote(quote: string) {
  const parts = quote.split("**");
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          className={index % 2 === 1 ? "font-semibold" : undefined}
        >
          {part}
        </span>
      ))}
    </>
  );
}
