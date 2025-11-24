/* eslint-disable @typescript-eslint/no-explicit-any */
import { calculateProfileCompletion } from "@/utils/calculateProfileProgress";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string[];
  phone: string[];
  bio: string;
  social_links?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

const Profileprogress: React.FC<ProfileData> = (profile) => {


  // Field weights configuration (phone: 40%, email: 20%, others: 40%)
  const fieldWeights = {
    phone: 40,
    email: 20,
    name: 10, // first_name + last_name (5% each)
    bio: 10,
    social: 20 // social_links
  };

  // Calculate completion status with custom weights
  const completionData = [
    { 
      name: "Name (First+Last)", 
      value: fieldWeights.name,
      completed: !!(profile?.first_name && profile?.last_name),
      color: (profile?.first_name && profile?.last_name) ? '#10B981' : '#EF4444',
      weight: fieldWeights.name
    },
    { 
      name: "Email", 
      value:  fieldWeights.email ,
      completed: profile?.email?.length > 0,
      color: profile?.email?.length > 0 ? '#10B981' : '#EF4444',
      weight: fieldWeights.email
    },
    { 
      name: "Phone", 
      value:  fieldWeights.phone ,
      completed: profile?.phone?.length > 0,
      color: profile?.phone?.length > 0 ? '#10B981' : '#EF4444',
      weight: fieldWeights.phone
    },
    { 
      name: "Bio", 
      value:  fieldWeights.bio,
      completed: !!profile?.bio,
      color: profile?.bio ? '#10B981' : '#EF4444',
      weight: fieldWeights.bio
    },
    { 
      name: "Social Links", 
      value: fieldWeights.social,
      completed: !!profile?.social_links,
      color: profile?.social_links ? '#10B981' : '#EF4444',
      weight: fieldWeights.social
    },
  ];

 

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 shadow-md rounded-md border">
          <p className="font-bold">{data.name}</p>
         
          <p>Status: {data.completed ? (
            <span className="text-green-500">Completed</span>
          ) : (
            <span className="text-red-500">Missing</span>
          )}</p>
        </div>
      );
    }
    return null;
  };
  const profileCompletion = calculateProfileCompletion(profile)
  return (
    <div className=" bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-[500] mb-2">
        Profile Completion: {profileCompletion}%
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Pie Chart */}
        <div className="h-80 w-full ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={completionData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {completionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

     
      </div>
    </div>
  );
};



export default Profileprogress;