/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";
import ReactPlayer from "react-player";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  videoId?: any;
  attachments: any[];
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

const UpdateLessonForm = ({
  onClose,
  refetch,
  lessonData,
}: {
  onClose: () => void;
  refetch: () => void;
  lessonData: LessonFormData;
}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [removeAtachement, setRemoveAttachment] = useState<any>([]);
  const [attachmentInput, setAttachmentInput] = useState("");
  const [videoId, setVideoId] = useState<string | null>(
    lessonData?.videoId?._id || null
  );

  const [videoPreview, setVideoPreview] = useState<string | null>(
    lessonData?.videoId?.url || lessonData?.video || null
  );
  const [videoSource, setVideoSource] = useState<"upload" | "link" | null>(
    lessonData?.videoId?._id ? "upload" : lessonData?.video ? "link" : null
  );
  const [startDate, setStartDate] = useState<Date | null>(
    lessonData?.date ? new Date(lessonData.date) : null
  );
  const [startTime, setStartTime] = useState<Date | null>(
    lessonData?.start_time ? new Date(lessonData.start_time) : null
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    resetField,
  } = useForm<LessonFormData>({
    defaultValues: {
      ...lessonData,
      attachments: [...lessonData.attachments],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "quiz.questions",
  });

  const videoUrl = watch("video");
  const attachments = watch("attachments") || [];

  // Handle video source changes
  useEffect(() => {
    if (videoSource === "link") {
      setVideoPreview(videoUrl);
      setVideoId(null);
    } else if (videoSource === "upload") {
      setVideoPreview(lessonData?.videoId?.url || null);
      resetField("video");
    }
  }, [videoSource, videoUrl, lessonData, resetField]);

  // Handle file attachments
  const addAttachment = () => {
    if (attachmentInput.trim()) {
      setValue("attachments", [...attachments, attachmentInput]);
      setAttachmentInput("");
    }
  };

  const removeAttachment = (index: number) => {
    const updatedAttachments = [...attachments];
    const [removeatt] = updatedAttachments.splice(index, 1);
    setValue("attachments", updatedAttachments);
    setRemoveAttachment([...removeAtachement, removeatt]);
  };

  // Quiz question management
  const addQuestion = () => {
    append({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
  };

  // Video source handler
  const handleVideoSourceChange = (source: "upload" | "link") => {
    setVideoSource(source);
    if (source === "upload") {
      resetField("video");
    } else {
      setVideoId(null);
    }
  };
  // Form submission
  const onSubmit = async (data: LessonFormData) => {
    try {
      // Validate video source

      setSubmitting(true);

      // Prepare form data
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("duration", data.duration.toString());
      formData.append("isFree", data.isFree.toString());
      formData.append("isPreview", data.isPreview.toString());
      formData.append("isLocked", data.isLocked.toString());
      formData.append("class_link", data.class_link);
      // formData.append("is_class_end", data.is_class_end.toString());

      // Handle dates
      if (startDate) {
        formData.append("date", startDate.toISOString());
      }
      if (startTime) {
        formData.append("start_time", startTime.toISOString());
      }

      // Handle video based on source
      if (videoSource === "upload" && videoId) {
        formData.append("videoId", videoId);
      } else if (videoSource === "link") {
        formData.append("video", data.video);
      }

      // Handle attachments
      attachments.forEach((attachment, index) => {
        if (attachment instanceof File) {
          formData.append(`attachments`, attachment);
        } else if (typeof attachment === "string") {
          formData.append(`attachments[${index}]`, attachment);
        }
      });
      removeAtachement.forEach((attachment: any, index: number) => {
        if (attachment instanceof File) {
          formData.append(`removedAttachments`, attachment);
        } else if (typeof attachment === "string") {
          formData.append(`removedAttachments[${index}]`, attachment);
        }
      });

      // Handle quiz
      formData.append("quiz[totalMarks]", String(data.quiz.totalMarks ?? 0));
      formData.append(
        "quiz[passingMarks]",
        String(data.quiz.passingMarks ?? 0)
      );
      data.quiz.questions.forEach((question, qIndex) => {
        formData.append(
          `quiz[questions][${qIndex}][question]`,
          question.question
        );
        formData.append(
          `quiz.[questions][${qIndex}][correctAnswer]`,
          question.correctAnswer
        );
        question.options.forEach((option, oIndex) => {
          formData.append(
            `quiz[questions][${qIndex}][options][${oIndex}]`,
            option
          );
        });
      });

      const res = await api_url.patch(
        `/v1/instructor/update-lesson/${data._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        toast.success("Lesson updated successfully");
        refetch();
        onClose();
      } else {
        toast.error(res.data.message || "Failed to update lesson");
      }
    } catch (error: any) {
      console.error("Update error:", error);
      toast.error(
        error.response?.data?.message || error.message || "An error occurred"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed top-10 inset-0 z-50 max-w-[800px]  mx-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all max-h-[600px] w-full overflow-y-auto">
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
            <h3 className="text-2xl font-bold text-gray-800">Update Lesson</h3>
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
                      <p className="text-red-500 text-sm">
                        Please select a video source
                      </p>
                    )}

                    {videoSource === "link" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          YouTube Link *
                        </label>
                        <input
                          type="text"
                          {...register("video")}
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

                    {videoSource === "link" && (
                      <div className="mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Video Preview
                        </label>
                        <div className="aspect-w-16 aspect-h-9">
                          <ReactPlayer
                            url={videoPreview as string}
                            width="100%"
                            height="100%"
                            controls
                          />
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

                {/* Class Information */}
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
                            <span className="text-sm truncate">
                              {attachment}
                            </span>
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
                        min: { value: 1, message: "Must be at least 1" },
                      })}
                      className={`w-full px-4 py-2 border rounded-md ${
                        errors?.quiz?.totalMarks
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors?.quiz?.totalMarks && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.quiz.totalMarks.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Passing Marks
                    </label>
                    <input
                      type="number"
                      {...register("quiz.passingMarks", {
                        valueAsNumber: true,
                        min: { value: 1, message: "Must be at least 1" },
                        validate: (value) =>
                          value <= watch("quiz.totalMarks") ||
                          "Passing marks cannot exceed total marks",
                      })}
                      className={`w-full px-4 py-2 border rounded-md ${
                        errors?.quiz?.passingMarks
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors?.quiz?.passingMarks && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.quiz.passingMarks.message}
                      </p>
                    )}
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
                  {isSubmitting ? "Updating..." : "Update Lesson"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLessonForm;
