'use client'
import useCourseanalytics from '@/hooks/instructor/useCourseAnalytics';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar
} from "recharts";

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return 'No date';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleDateString();
  } catch {
    return 'Invalid date';
  }
};

const formatStudentInfo = (student: any) => {
  if (!student) return 'Unknown';
  
  // Handle cases where user might be missing
  const user = student?.user || {};
  const name = [user?.first_name, user?.last_name].filter(Boolean).join(' ') || 'Unknown';
  
  // Get contact info - try email first, then phone
  let contact = user.email || 'No contact';
  if (user?.phone?.length > 0) {
    const primaryPhone = user?.phone?.find((p: any) => p?.is_primary_number) || user?.phone[0];
    contact = primaryPhone?.number || contact;
  }
  
  return { name, contact };
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const data = payload[0]?.payload;

    const renderList = (label: string, data: any[] | undefined, color: string) => {
      if (!data || data?.length === 0) return null;
      return (
        <div className="mb-2">
          <strong style={{ color }}>{label} ({data?.length})</strong>
          <ul className="text-xs list-disc ml-5">
            {data?.map((s, idx) => {
              const { name, contact }:any = formatStudentInfo(s);
              return <li key={idx}>{name} ({contact})</li>;
            })}
          </ul>
        </div>
      );
    };

    return (
      <div className="bg-white p-3 border rounded shadow-md max-w-xs">
        <p className="font-bold mb-2">{data?.name || 'Unnamed Class'}</p>
        {renderList("Joined", data?.attendanceOnClass, "#22c55e")}
        {renderList("Late", data?.lateJoinedStudent, "#eab308")}
        {renderList("Absent", data?.absentsStudents, "#ef4444")}
      </div>
    );
  }
  return null;
};

export default function AttendanceAnalytics({ courseId }: { courseId: string }) {
  const { data: classData } = useCourseanalytics(courseId);
  
  const formattedData = classData?.map((cls: any) => {
    const classDetail = cls || {};
    const courseTitle = classDetail?.courseId?.basicInfo?.title || 'No Course';
    const sectionTitle = classDetail?.sectionId?.title || 'No Section';
    const formattedDate = formatDate(classDetail?.date);

    // Process attendance data
    const attendanceOnClass = classDetail?.attendanceOnClass || [];
    const lateJoinedStudent = classDetail?.lateJoinedStudent || [];
    const absentsStudents = classDetail?.absentsStudents || [];

    return {
      id: classDetail?._id || Math.random().toString(),
      title: classDetail?.title || 'Untitled Class',
      date: formattedDate,
      name: `${classDetail?.title || 'Untitled Class'} (${formattedDate})`,
      course: courseTitle,
      section: sectionTitle,
      joined: attendanceOnClass?.length,
      late: lateJoinedStudent?.length,
      absent: absentsStudents?.length,
      attendanceOnClass,
      lateJoinedStudent,
      absentsStudents
    };
  }) || [];

  const [viewMode, setViewMode] = useState<'all' | 'single'>('all');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const filteredData = selectedClass 
    ? formattedData?.filter((item: any) => item?.id === selectedClass) 
    : formattedData;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">📈 Attendance Analytics</h2>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setViewMode('all');
            setSelectedClass(null);
          }}
          className={`px-4 py-2 rounded-md ${viewMode === 'all' ? 'bg-[#22C55E] text-white' : 'bg-gray-200'}`}
        >
          All Classes
        </button>
        <button
          onClick={() => setViewMode('single')}
          className={`px-4 py-2 rounded-md ${viewMode === 'single' ? 'bg-[#22C55E] text-white' : 'bg-gray-200'}`}
        >
          Single Class
        </button>
      </div>

      {viewMode === 'single' && (
        <div className="mb-6">
          <label className="block mb-2 font-medium">Select Class:</label>
          <select
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-2 border rounded-md"
            value={selectedClass || ''}
          >
            <option value="">-- Select a class --</option>
            {formattedData?.map((cls: any) => (
              <option key={cls?.id} value={cls?.id}>
                {cls?.title} ({cls?.date}) - {cls?.course}
              </option>
            ))}
          </select>
        </div>
      )}

      {viewMode === 'all' ? (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">All Classes Overview</h3>
          {formattedData?.length > 0 ? (
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={formattedData}
                margin={{ top: 20, right: 30, left: 10, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end" 
                  height={70}
                  tick={{ fontSize: 12 }}
                />
                <YAxis allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="joined" 
                  name="Joined Students" 
                  stroke="#22c55e" 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="late" 
                  name="Late Students" 
                  stroke="#eab308" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="absent" 
                  name="Absent Students" 
                  stroke="#ef4444" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-10 bg-gray-100 rounded-lg">
              <p>No class data available</p>
            </div>
          )}
        </div>
      ) : selectedClass ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Detailed View: {filteredData[0]?.title} ({filteredData[0]?.date})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Attendance Summary</h4>
              <div className="mb-2">
                <p><strong>Course:</strong> {filteredData[0]?.course}</p>
                <p><strong>Section:</strong> {filteredData[0]?.section}</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={filteredData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="joined" name="Joined" fill="#22c55e" />
                  <Bar dataKey="late" name="Late" fill="#eab308" />
                  <Bar dataKey="absent" name="Absent" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="font-medium mb-3">Attendance Details</h4>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="mb-4">
                  <h5 className="text-green-600 font-medium">Joined Students ({filteredData[0]?.joined})</h5>
                  {filteredData[0]?.attendanceOnClass?.length > 0 ? (
                    <ul className="mt-2 pl-5 list-disc">
                      {filteredData[0]?.attendanceOnClass?.map((student: any, idx: number) => {
                        const { name, contact }:any = formatStudentInfo(student);
                        return <li key={idx}>{name} ({contact})</li>;
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-500 mt-2">No students joined</p>
                  )}
                </div>
                <div className="mb-4">
                  <h5 className="text-yellow-600 font-medium">Late Students ({filteredData[0]?.late})</h5>
                  {filteredData[0]?.lateJoinedStudent?.length > 0 ? (
                    <ul className="mt-2 pl-5 list-disc">
                      {filteredData[0]?.lateJoinedStudent?.map((student: any, idx: number) => {
                        const { name, contact }:any = formatStudentInfo(student);
                        return <li key={idx}>{name} ({contact})</li>;
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-500 mt-2">No late students</p>
                  )}
                </div>
                <div>
                  <h5 className="text-red-600 font-medium">Absent Students ({filteredData[0]?.absent})</h5>
                  {filteredData[0]?.absentsStudents?.length > 0 ? (
                    <ul className="mt-2 pl-5 list-disc">
                      {filteredData[0]?.absentsStudents?.map((student: any, idx: number) => {
                        const { name, contact }:any = formatStudentInfo(student);
                        return <li key={idx}>{name} ({contact})</li>;
                      })}
                    </ul>
                  ) : (
                    <p className="text-gray-500 mt-2">No absent students</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-100 rounded-lg">
          <p>Please select a class to view details</p>
        </div>
      )}
    </div>
  );
}