import React from 'react';
export const metadata = {
  title: "My Courses | Ict Bangla", 
  description: "View all the courses you are enrolled in and continue your learning journey with LearnHub.",
}
const MyCourseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default MyCourseLayout;