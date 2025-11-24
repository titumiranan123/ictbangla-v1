/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FiDownload } from "react-icons/fi";
import Quiz from "./Quiz";
interface props {
  currentLesson: any;
  activeTab: string;
}
const TabContent: React.FC<props> = ({ currentLesson, activeTab }) => {
  return (
    <div className="py-6">
      {activeTab === "lesson" && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">
            About this lesson
          </h3>
          <p
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: currentLesson?.description }}
          ></p>

          <div className="prose max-w-none">
            {/* Lesson content would be rendered here */}
            <p>This is where your detailed lesson content would appear.</p>
          </div>
        </div>
      )}

      {activeTab === "resources" && (
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">Lesson Resources</h3>
          {currentLesson?.attachments &&
          currentLesson?.attachments?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentLesson?.attachments?.map(
                (attachment: any, index: number) => (
                  <a
                    key={index}
                    href={attachment}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-secondary transition"
                  >
                    <div className="flex-shrink-0 p-3 bg-blue-100 text-primary rounded-md mr-4">
                      <FiDownload size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {attachment?.split("/").pop()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {attachment?.endsWith(".pdf")
                          ? "PDF Document"
                          : attachment?.endsWith(".pptx")
                          ? "PowerPoint Slides"
                          : "File"}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          ) : (
            <p className="text-gray-500">
              No resources available for this lesson.
            </p>
          )}
        </div>
      )}
      {activeTab === "quiz" && currentLesson?.quiz && (
        <Quiz currentLesson={currentLesson} />
      )}
    </div>
  );
};

export default TabContent;
