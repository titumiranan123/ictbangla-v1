"use client"; // First line

import ContentFormModal from "@/components/(instructor)/instructorDashboard/Addsection";

import SectionAccordion from "@/components/(instructor)/others/SectionAccordion";
import { api_url } from "@/hooks/apiurl";
import useInstructorSection from "@/hooks/instructor/useInstructorSection";
import { showConfirmToast } from "@/utils/ShowConfirmToast";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Addsection = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState({ add: false, update: false });
  const {
    data: sectionData,
    refetch,
    isLoading,
  } = useInstructorSection(id as string);
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  const handleDeleteSection = async (sectionId: string): Promise<void> => {
    return new Promise((resolve) => {
      showConfirmToast(sectionId, async () => {
        try {
          const res = await api_url.delete(
            `/v1/instructor/delete-section/${sectionId}`
          );

          if (res.status === 201) {
            refetch();
            toast.success("Section deleted successfully");
          } else {
            toast.error(res.data.message);
          }
        } catch {
          toast.error("Something went wrong while deleting");
        } finally {
          resolve();
        }
      });
    });
  };

  return (
    <div>
      {!isLoading ? (
        <>
          {" "}
          <div className="flex justify-between items-center">
            <h2 className="mb-5">Section List :</h2>
            <button
              className="bg-secondary py-2 px-3 rounded"
              onClick={() => setShowModal({ ...showModal, add: true })}
            >
              Add Section ➕
            </button>
          </div>
          <SectionAccordion
            courseId={id as string}
            items={sectionData?.sections}
            handleDeleteSection={handleDeleteSection}
            refetch={refetch}
          />
        </>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="mb-5 w-[125px] h-8 rounded-lg bg-slate-300 animate-pulse"></h2>
            <button className="mb-5 w-[95px] h-8 rounded-lg bg-slate-300 animate-pulse"></button>
          </div>
          <div>
            {[...Array(5)].map((p, idx) => (
              <div
                className="h-[80px] mt-4 bg-secondary rounded-lg animate-pulse w-full py-5 px-4 flex justify-between items-center"
                key={idx}
              >
                <h2 className="mb-5 w-[325px] h-8 rounded-lg bg-slate-300 mt-4 animate-pulse"></h2>
                <div className="flex gap-2">
                  <p className="mb-5 w-[50px] h-8 rounded-lg bg-slate-300 animate-pulse"></p>
                  <p className="mb-5 w-[50px] h-8 rounded-lg bg-slate-300 animate-pulse"></p>
                  <p className="mb-5 w-[50px] h-8 rounded-lg bg-slate-300 animate-pulse"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal.add && (
        <ContentFormModal
          courseId={id as string}
          onClose={() => setShowModal({ ...showModal, add: false })}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default Addsection;
