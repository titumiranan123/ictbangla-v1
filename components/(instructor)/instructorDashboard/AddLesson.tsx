/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactPlayer from "react-player";
import VideoUpload from "../createCourse/Videouplaod";
import MyTextEditor from "../others/Texteditor";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LessonFormData {
  _id?: string;
  courseId?: string;
  sectionId?: string;
  title: string;
  description: string;
  video: string;
  duration: number;
  isFree: boolean;
  isPreview: boolean;
  isLocked: boolean;
  attachments: string[];
  class_link: string;
  date?: string;
  start_time?: string;
  is_class_end: boolean;
  quiz: {
    questions: QuizQuestion[];
    totalMarks: number;
    passingMarks: number;
  };
}

const AddLessonForm = ({
  onClose,
  refetch,
  sectionId,
  courseId,
}: {
  onClose: () => void;
  refetch: () => void;
  sectionId: string;
  courseId: string;
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [attachmentInput, setAttachmentInput] = useState("");
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [videoSource, setVideoSource] = useState<"upload" | "link" | null>(
    null
  );
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm<LessonFormData>({
    defaultValues: {
      isFree: false,
      isPreview: false,
      isLocked: false,
      attachments: [],
      quiz: {
        questions: [],
        totalMarks: 20,
        passingMarks: 12,
      },
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quiz.questions",
  });

  const videoUrl = watch("video");

  useEffect(() => {
    if (videoSource === "link" && videoUrl) {
      setVideoPreview(videoUrl);
    }
  }, [videoUrl, videoSource]);

  const attachments = watch("attachments") || [];

  const addAttachment = () => {
    if (attachmentInput.trim()) {
      setValue("attachments", [...attachments, attachmentInput]);
      setAttachmentInput("");
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setValue("attachments", updatedAttachments);
  };

  const addQuestion = () => {
    append({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
  };

  const handleVideoSourceChange = (source: "upload" | "link") => {
    setVideoSource(source);
  };

  const onSubmit = async (data: LessonFormData) => {
    try {
      setSubmitting(true);

      // Format dates
      const formattedDate = startDate ? startDate.toISOString() : undefined;
      const formattedTime = startTime ? startTime.toISOString() : undefined;

      const res = await api_url.post(
        "/v1/instructor/create-lesson-fro-course",
        {
          ...data,
          courseId: courseId,
          sectionId: sectionId,
          videoId: videoSource === "upload" ? videoId : null,
          video: videoSource === "link" ? data.video : null,
          date: formattedDate,
          start_time: formattedTime,
        }
      );

      if (res.status === 201) {
        toast.success("Lesson added successfully");
        refetch();
        onClose();
      } else {
        toast.error(res.data.message || "Failed to add lesson");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed top-10 inset-0 z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-h-[600px] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="bg-white px-6 pt-6">
            <h3 className="text-2xl font-bold text-gray-800">Add New Lesson</h3>
          </div>

          <div className="px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Basic Information */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title *
                    </label>
                    <input
                      {...register("title", { required: "Title is required" })}
                      className={`w-full px-4 py-2 border rounded-md ${
                        errors?.title ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Lesson title"
                    />
                    {errors?.title && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors?.title?.message}
                      </p>
                    )}
                  </div>
                  {/* Replace the description Input with the Quill Editor */}
                  <div className="flex col-span-2 flex-col">
                    <label className="text-black text-[16px] font-medium">
                      Description *
                    </label>
                    <Controller
                      name="description"
                      control={control}
                      rules={{ required: "Description is required" }}
                      render={({ field, fieldState: { error } }) => (
                        <MyTextEditor
                          value={field.value}
                          onChange={field.onChange}
                          error={error?.message || ""}
                        />
                      )}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => handleVideoSourceChange("link")}
                        className={`px-4 py-2 rounded-md ${
                          videoSource === "link"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        YouTube Link
                      </button>
                      <button
                        type="button"
                        onClick={() => handleVideoSourceChange("upload")}
                        className={`px-4 py-2 rounded-md ${
                          videoSource === "upload"
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        Upload Video
                      </button>
                    </div>

                    {videoSource === null && (
                      <p className="text-red-500 text-sm mt-1">
                        Please select a video source (upload or link)
                      </p>
                    )}

                    {videoSource === "link" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          YouTube Link *
                        </label>
                        <input
                          type="text"
                          {...register("video", {
                            required:
                              videoSource === "link"
                                ? "YouTube link is required"
                                : false,
                            pattern: {
                              value:
                                /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/,
                              message: "Please enter a valid YouTube URL",
                            },
                          })}
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors?.video ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="https://www.youtube.com/watch?v=..."
                        />
                        {errors?.video && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors?.video?.message}
                          </p>
                        )}
                      </div>
                    )}

                    {videoSource === "upload" && (
                      <VideoUpload
                        setVideoId={setVideoId}
                        videoId={videoId}
                        setVideoPreview={setVideoPreview}
                        videoPreview={videoPreview}
                      />
                    )}

                    {(videoPreview || (videoSource === "link" && videoUrl)) && (
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Video Preview
                        </label>
                        <div className="aspect-w-16 aspect-h-9">
                          {videoSource === "link" ? (
                            <ReactPlayer
                              url={videoPreview as string}
                              width="100%"
                              height="100%"
                              controls
                            />
                          ) : (
                            <video
                              src={videoPreview || ""}
                              controls
                              className="w-full h-64 rounded-md"
                            />
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration (minutes) *
                      </label>
                      <input
                        type="number"
                        {...register("duration", {
                          required: "Duration is required",
                          min: {
                            value: 1,
                            message: "Duration must be at least 1 minute",
                          },
                        })}
                        className={`w-full px-4 py-2 border rounded-md ${
                          errors?.duration
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="45"
                      />
                      {errors?.duration && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors?.duration?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isFree"
                        {...register("isFree")}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isFree"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Free Lesson
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isPreview"
                        {...register("isPreview")}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isPreview"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Available for Preview
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isLocked"
                        {...register("isLocked")}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isLocked"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Locked
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Class Link
                    </label>
                    <input
                      {...register("class_link")}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                      placeholder="https://zoom.us/j/123456789"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Class Date
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholderText="Select date"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Time
                      </label>
                      <DatePicker
                        selected={startTime}
                        onChange={(time) => setStartTime(time)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholderText="Select time"
                      />
                    </div>
                  </div>
                </div>
                {/* Class Information */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Attachments
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={attachmentInput}
                        onChange={(e) => setAttachmentInput(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md"
                        placeholder="Attachment URL"
                      />
                      <button
                        type="button"
                        onClick={addAttachment}
                        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark"
                      >
                        Add
                      </button>
                    </div>
                    <div className="mt-2 space-y-1">
                      {attachments.map((attachment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-2 rounded"
                        >
                          <span className="text-sm truncate">{attachment}</span>
                          <button
                            type="button"
                            onClick={() => removeAttachment(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quiz Section */}
              <div className="border-t pt-6">
                <h4 className="text-lg font-medium text-gray-800 mb-4">Quiz</h4>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Marks
                    </label>
                    <input
                      type="number"
                      {...register("quiz.totalMarks", {
                        valueAsNumber: true,
                        min: 1,
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passing Marks
                    </label>
                    <input
                      type="number"
                      {...register("quiz.passingMarks", {
                        valueAsNumber: true,
                        min: 1,
                      })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addQuestion}
                  className="mb-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                >
                  Add Question
                </button>

                <div className="space-y-6">
                  {fields?.map((item, index) => (
                    <div key={item.id} className="border p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-medium">Question {index + 1}</h5>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Question Text *
                        </label>
                        <input
                          {...register(`quiz.questions.${index}.question`, {
                            required: "Question is required",
                          })}
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors?.quiz?.questions?.[index]?.question
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          placeholder="Enter question"
                        />
                        {errors?.quiz?.questions?.[index]?.question && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.quiz.questions[index]?.question?.message}
                          </p>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Options *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {[0, 1, 2, 3].map((optionIndex) => (
                            <div key={optionIndex}>
                              <label className="block text-sm text-gray-600 mb-1">
                                Option {optionIndex + 1}
                              </label>
                              <input
                                {...register(
                                  `quiz.questions.${index}.options.${optionIndex}`,
                                  { required: "Option is required" }
                                )}
                                className={`w-full px-4 py-2 border rounded-md ${
                                  errors?.quiz?.questions?.[index]?.options?.[
                                    optionIndex
                                  ]
                                    ? "border-red-500"
                                    : "border-gray-300"
                                }`}
                                placeholder={`Option ${optionIndex + 1}`}
                              />
                              {errors?.quiz?.questions?.[index]?.options?.[
                                optionIndex
                              ] && (
                                <p className="text-red-500 text-sm mt-1">
                                  {
                                    errors.quiz.questions[index]?.options?.[
                                      optionIndex
                                    ]?.message
                                  }
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Correct Answer *
                        </label>
                        <select
                          {...register(
                            `quiz.questions.${index}.correctAnswer`,
                            { required: "Correct answer is required" }
                          )}
                          className={`w-full px-4 py-2 border rounded-md ${
                            errors?.quiz?.questions?.[index]?.correctAnswer
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        >
                          <option value="">Select correct answer</option>
                          {[0, 1, 2, 3].map((optionIndex) => (
                            <option
                              key={optionIndex}
                              value={watch(
                                `quiz.questions.${index}.options.${optionIndex}`
                              )}
                            >
                              Option {optionIndex + 1}
                            </option>
                          ))}
                        </select>
                        {errors?.quiz?.questions?.[index]?.correctAnswer && (
                          <p className="text-red-500 text-sm mt-1">
                            {
                              errors.quiz.questions[index]?.correctAnswer
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                    isSubmitting
                      ? "bg-gray-400"
                      : "bg-primary hover:bg-primary-dark"
                  }`}
                >
                  {isSubmitting ? "Saving..." : "Save Lesson"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLessonForm;
