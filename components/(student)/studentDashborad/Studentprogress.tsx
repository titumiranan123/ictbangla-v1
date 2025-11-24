'use client'
import {
  PieChart, 
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const studentStats = {
  total_classes: "0.00",
  total_attendence_class: "0.00",
  total_late_attendence: "0.00",
  total_apcent: "0.00",
  jon_class_percent: "NaN",
  apcent_class_percent: "NaN",
  totalSubmittedQuiz: "0.00",
  totalMarkForQuiz: "0.00",
  totalGatedMark: "0.00",
  totalPassedQuiz: "0.00",
  totalFailedQuiz: "0.00"
};

const Studentprogress = () => {
  // Process data
  const stats = {
    totalClasses: parseFloat(studentStats?.total_classes) || 0,
    attendedClasses: parseFloat(studentStats?.total_attendence_class) || 0,
    lateAttendances: parseFloat(studentStats?.total_late_attendence) || 0,
    absentClasses: parseFloat(studentStats?.total_apcent) || 0,
    submittedQuizzes: parseFloat(studentStats?.totalSubmittedQuiz) || 0,
    passedQuizzes: parseFloat(studentStats?.totalPassedQuiz) || 0,
    failedQuizzes: parseFloat(studentStats?.totalFailedQuiz) || 0,
    totalMarks: parseFloat(studentStats?.totalMarkForQuiz) || 0,
    obtainedMarks: parseFloat(studentStats?.totalGatedMark) || 0
  };

  // Data for pie charts
  const attendanceData = [
    { name: 'Present', value: stats?.attendedClasses, color: '#4CAF50' },
    { name: 'Late', value: stats?.lateAttendances, color: '#FFC107' },
    { name: 'Absent', value: stats?.absentClasses, color: '#F44336' }
  ];

  const quizResultData = [
    { name: 'Passed', value: stats?.passedQuizzes, color: '#4CAF50' },
    { name: 'Failed', value: stats?.failedQuizzes, color: '#F44336' }
  ];

  // Data for bar charts (progress indicators)
  const progressData = [
    {
      name: 'Attendance',
      value: stats?.totalClasses > 0 
        ? (stats?.attendedClasses / stats?.totalClasses) * 100 
        : 0,
      total: 100,
      color: '#4CAF50'
    },
    {
      name: 'Quiz Pass',
      value: stats?.submittedQuizzes > 0 
        ? (stats?.passedQuizzes / stats?.submittedQuizzes) * 100 
        : 0,
      total: 100,
      color: '#2196F3'
    },
    {
      name: 'Marks',
      value: stats?.totalMarks > 0 
        ? (stats?.obtainedMarks / stats?.totalMarks) * 100 
        : 0,
      total: 100,
      color: '#9C27B0'
    }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Student Performance Dashboard</h1>
      
      {/* Progress Indicators */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={progressData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
            <YAxis dataKey="name" type="category" />
            <Tooltip 
              formatter={(value) => [`${value}%`, "Progress"]}
              labelFormatter={(name) => name}
            />
            <Bar dataKey="value" name="Progress">
              {progressData?.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry?.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance Distribution */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Attendance Distribution</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => 
                    `${name}: ${(percent * 100)?.toFixed(0)}%`}
                >
                  {attendanceData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => 
                    [`${value} classes`, name]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center">
            <p className="font-medium">Total Classes: {stats?.totalClasses}</p>
          </div>
        </div>

        {/* Quiz Results */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quiz Results</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={quizResultData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => 
                    `${name}: ${(percent * 100)?.toFixed(0)}%`}
                >
                  {quizResultData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => 
                    [`${value} quizzes`, name]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-center">
            <p className="font-medium">Total Submitted: {stats?.submittedQuizzes}</p>
            <p>Marks: {stats?.obtainedMarks}/{stats?.totalMarks}</p>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="font-medium text-green-800">Present</h3>
          <p className="text-2xl font-bold">{stats?.attendedClasses}</p>
          <p className="text-sm text-green-600">
            {stats?.totalClasses > 0 
              ? `${((stats?.attendedClasses / stats?.totalClasses) * 100)?.toFixed(1)}%` 
              : '0%'}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <h3 className="font-medium text-yellow-800">Late</h3>
          <p className="text-2xl font-bold">{stats?.lateAttendances}</p>
          <p className="text-sm text-yellow-600">
            {stats?.totalClasses > 0 
              ? `${((stats?.lateAttendances / stats?.totalClasses) * 100)?.toFixed(1)}%` 
              : '0%'}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <h3 className="font-medium text-red-800">Absent</h3>
          <p className="text-2xl font-bold">{stats?.absentClasses}</p>
          <p className="text-sm text-red-600">
            {stats?.totalClasses > 0 
              ? `${((stats?.absentClasses / stats?.totalClasses) * 100)?.toFixed(1)}%` 
              : '0%'}
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-medium text-blue-800">Quizzes Passed</h3>
          <p className="text-2xl font-bold">{stats?.passedQuizzes}</p>
          <p className="text-sm text-blue-600">
            {stats?.submittedQuizzes > 0 
              ? `${((stats?.passedQuizzes / stats?.submittedQuizzes) * 100)?.toFixed(1)}%` 
              : '0%'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Studentprogress;