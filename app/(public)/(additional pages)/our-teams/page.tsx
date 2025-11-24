import React from "react";
import TeamMembersList from "./teamMembersList";
import PageHeroSectionWithRings from "./pageHeroSectionWithRings";

const OurTeamsPage = () => {
  return (
    <div>
      <PageHeroSectionWithRings
        title="Our Executive Team"
        subTitle=" Our success depends on teamwork and building upon our technical expertise and creative
            style providing a full-service solution to our science enthusiasts."
        buttonText=" Development Team"
      />

      <div className="mt-4 md:mt-6 mb-[120px] container px-5">
        <TeamMembersList />
      </div>
    </div>
  );
};

export default OurTeamsPage;
