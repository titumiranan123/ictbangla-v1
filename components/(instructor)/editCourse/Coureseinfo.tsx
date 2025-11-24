import { RootState } from "@/redux/store";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../others/Input";
import { FaPlus, FaTrash } from "react-icons/fa";
import { setInfo } from "@/redux/courseSlice";
import MyTextEditor from "../others/Texteditor";

interface IInfo {
  faq: { question: string; answer: string }[];
  requirement: {
    category: "point" | "paragraph" | "question";
    question?: { question: string; answer?: string }[];
    point?: string[];
    paragraph?: string;
  };
  outcomes: {
    category: "point" | "paragraph" | "question";
    question?: { question: string; answer?: string }[];
    point?: string[];
    paragraph?: string;
  };
  description_sections?: {
    section_title: string;
    section_content: string;
  }[];
}

const CourseInfo = ({
  setActiveTab,
}: {
  setActiveTab: (label: string) => void;
}) => {
  const info = useSelector((state: RootState) => state.course.info);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    register,
    watch,
  } = useForm<IInfo>({
    defaultValues: info,
  });

  const {
    fields: faqFields,
    append: appendFaq,
    remove: removeFaq,
  } = useFieldArray({
    control,
    name: "faq",
  });
  const {
    fields: tabFiled,
    append: appendTab,
    remove: removeTab,
  } = useFieldArray({
    control,
    name: "description_sections",
  });
  const {
    fields: questionFields,
    append: appendQuestion,
    remove: removeQuestion,
  } = useFieldArray({
    control,
    name: "requirement.question",
  });

  const {
    fields: outQuestionFields,
    append: OutAppendQuestion,
    remove: OutRemoveQuestion,
  } = useFieldArray({
    control,
    name: "outcomes.question",
  });

  const points = watch("requirement.point") || [];
  const outcomePoints = watch("outcomes.point") || [];

  const requirementCategory = watch("requirement.category");
  const outComeCategory = watch("outcomes.category");
  const dispatch = useDispatch();
  const onSubmit = (data: IInfo) => {
    dispatch(setInfo(data));
    setActiveTab("Pricing");
  };

  const handleRequirementCategoryChange = (
    newCategory: "point" | "paragraph" | "question"
  ) => {
    setValue("requirement", {
      category: newCategory,
      question:
        newCategory === "question" ? [{ question: "", answer: "" }] : [],
      point: newCategory === "point" ? [""] : [],
      paragraph: newCategory === "paragraph" ? "" : undefined,
    });
  };

  const handleOutcomesCategoryChange = (
    newCategory: "point" | "paragraph" | "question"
  ) => {
    setValue("outcomes", {
      category: newCategory,
      question:
        newCategory === "question" ? [{ question: "", answer: "" }] : [],
      point: newCategory === "point" ? [""] : [],
      paragraph: newCategory === "paragraph" ? "" : undefined,
    });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 max-w-4xl mx-auto"
      >
        {/* FAQ Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Frequently Asked Questions
            </h2>
            <button
              type="button"
              onClick={() => appendFaq({ question: "", answer: "" })}
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-colors"
            >
              <FaPlus className="w-4 h-4 mr-2" />
              Add FAQ
            </button>
          </div>

          {faqFields.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No FAQs added yet. Click the button above to add one.
            </div>
          ) : (
            <div className="space-y-6">
              {faqFields.map((field, index) => (
                <div
                  key={field.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-secondary transition-colors group"
                >
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeFaq(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove FAQ"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8">
                    <Input
                      label="Question"
                      name={`faq.${index}.question`}
                      register={register}
                      type="text"
                      error={errors.faq?.[index]?.question}
                    />
                    <Input
                      label="Answer"
                      name={`faq.${index}.answer`}
                      register={register}
                      type="textarea"
                      error={errors.faq?.[index]?.answer}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Requirement Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Course Requirements
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Requirement Format
                </label>
                <Controller
                  name="requirement.category"
                  control={control}
                  defaultValue="point"
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleRequirementCategoryChange(
                          e.target.value as "point" | "paragraph" | "question"
                        );
                      }}
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all w-[350px]"
                    >
                      <option value="point">Bullet Points</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="question">Q&A Format</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
              {requirementCategory === "question" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-700">
                      Questions & Answers
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        appendQuestion({ question: "", answer: "" })
                      }
                      className="flex items-center px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary transition-colors text-sm"
                    >
                      <FaPlus className="w-3 h-3 mr-1" />
                      Add Question
                    </button>
                  </div>

                  {questionFields.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">
                      No questions added yet.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {questionFields.map((field, index) => (
                        <div
                          key={field.id}
                          className="p-4 border border-gray-200 rounded-lg hover:border-secondary transition-colors group"
                        >
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => removeQuestion(index)}
                              className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="Remove question"
                            >
                              <FaTrash className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="flex flex-col gap-8">
                            <Input
                              label="Question"
                              name={`requirement.question.${index}.question`}
                              register={register}
                              type="text"
                              error={
                                errors.requirement?.question?.[index]?.question
                              }
                            />
                            <Input
                              label="Answer"
                              name={`requirement.question.${index}.answer`}
                              register={register}
                              type="textarea"
                              error={
                                errors.requirement?.question?.[index]?.answer
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {requirementCategory === "point" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Key Requirements
                  </h3>
                  {points.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 mt-5">
                      No requirements added yet.
                    </div>
                  ) : (
                    <div className="space-y-3 mt-5 flex flex-col gap-5">
                      {points.map((_, index) => (
                        <div key={index} className="flex gap-4 group mt-5">
                          <span className="mt-2 mr-2 w-2 h-2 bg-primary rounded-full block"></span>
                          <div className="flex-1 mt-2">
                            <Input
                              label={`Requirement ${index + 1}`}
                              name={`requirement.point.${index}`}
                              register={register}
                              type="text"
                              error={errors.requirement?.point?.[index]}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setValue(
                                "requirement.point",
                                points.filter((_, i) => i !== index)
                              )
                            }
                            className="ml-2 mt-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Remove requirement"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setValue("requirement.point", [...points, ""])
                    }
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    <FaPlus className="w-3 h-3 mr-1" />
                    Add Requirement
                  </button>
                </div>
              )}

              {requirementCategory === "paragraph" && (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-8">
                    Detailed Requirements
                  </h3>
                  <Input
                    label="Requirements Description"
                    name="requirement.paragraph"
                    register={register}
                    type="textarea"
                    error={errors.requirement?.paragraph}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Outcomes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Learning Outcomes
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Outcomes Format
                </label>
                <Controller
                  name="outcomes.category"
                  control={control}
                  defaultValue="point"
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleOutcomesCategoryChange(
                          e.target.value as "point" | "paragraph" | "question"
                        );
                      }}
                      className="w-[350px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    >
                      <option value="point">Bullet Points</option>
                      <option value="paragraph">Paragraph</option>
                      <option value="question">Q&A Format</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <div className="space-y-6">
              {outComeCategory === "question" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-700">
                      Outcome Questions
                    </h3>
                    <button
                      type="button"
                      onClick={() =>
                        OutAppendQuestion({ question: "", answer: "" })
                      }
                      className="flex items-center px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary transition-colors text-sm"
                    >
                      <FaPlus className="w-3 h-3 mr-1" />
                      Add Question
                    </button>
                  </div>

                  {outQuestionFields.length === 0 ? (
                    <div className="text-center py-4 text-gray-500">
                      No outcome questions added yet.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {outQuestionFields.map((field, index) => (
                        <div
                          key={field.id}
                          className="p-4 border border-gray-200 rounded-lg hover:border-secondary transition-colors group"
                        >
                          <div className="flex justify-end">
                            <button
                              type="button"
                              onClick={() => OutRemoveQuestion(index)}
                              className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                              aria-label="Remove question"
                            >
                              <FaTrash className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="space-y-4 flex flex-col gap-5">
                            <Input
                              label="Question"
                              name={`outcomes.question.${index}.question`}
                              register={register}
                              type="text"
                              error={
                                errors.outcomes?.question?.[index]?.question
                              }
                            />
                            <Input
                              label="Answer"
                              name={`outcomes.question.${index}.answer`}
                              register={register}
                              type="textarea"
                              error={errors.outcomes?.question?.[index]?.answer}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {outComeCategory === "point" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-10">
                    Key Outcomes
                  </h3>
                  {outcomePoints.length === 0 ? (
                    <div className="text-center py-4 text-gray-500 ">
                      No outcomes added yet.
                    </div>
                  ) : (
                    <div className="space-y-3 flex gap-5 flex-col ">
                      {outcomePoints.map((_, index) => (
                        <div key={index} className="flex items-start group">
                          <span className="mt-2 mr-2 text-green-600">✓</span>
                          <div className="flex-1 ">
                            <Input
                              label={`Outcome ${index + 1}`}
                              name={`outcomes.point.${index}`}
                              register={register}
                              type="text"
                              error={errors.outcomes?.point?.[index]}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              setValue(
                                "outcomes.point",
                                outcomePoints.filter((_, i) => i !== index)
                              )
                            }
                            className="ml-2 mt-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Remove outcome"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() =>
                      setValue("outcomes.point", [...outcomePoints, ""])
                    }
                    className="flex items-center px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                  >
                    <FaPlus className="w-3 h-3 mr-1" />
                    Add Outcome
                  </button>
                </div>
              )}

              {outComeCategory === "paragraph" && (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-8">
                    Detailed Outcomes
                  </h3>
                  <Input
                    label="Learning Outcomes"
                    name="outcomes.paragraph"
                    register={register}
                    type="textarea"
                    error={errors.outcomes?.paragraph}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        {/* tab Section */}
        <div className="bg-white  lg:p-6 rounded-lg shadow-md">
          <div className="flex md:flex-row flex-col justify-between md:items-center gap-10 lg:gap-4 items-start mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Tab Sections
            </h2>
            <button
              type="button"
              onClick={() =>
                appendTab({ section_title: "", section_content: "" })
              }
              className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary transition-colors"
            >
              <FaPlus className="w-4 h-4 mr-2" />
              Add Tab Section
            </button>
          </div>

          {tabFiled.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No Tab Section added yet. Click the button above to add one.
            </div>
          ) : (
            <div className="space-y-6 lg:max-w-full max-w-[350px] ">
              {tabFiled.map((field, index) => (
                <div
                  key={field.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-secondary transition-colors group"
                >
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => removeTab(index)}
                      className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Remove FAQ"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-8">
                    <Input
                      label="Tab Title"
                      name={`description_sections.${index}.section_title`}
                      register={register}
                      type="text"
                      error={
                        errors.description_sections?.[index]?.section_title
                      }
                    />
                    <Controller
                      name={`description_sections.${index}.section_content`}
                      control={control}
                      rules={{}}
                      render={({ field, fieldState: { error } }) => (
                        <MyTextEditor
                          value={field.value}
                          onChange={field.onChange}
                          error={error?.message || ""}
                        />
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Submit Button */}
        <div className="sticky bottom-0 bg-white py-4 border-t shadow-sm">
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Save & Continue to Pricing
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseInfo;
