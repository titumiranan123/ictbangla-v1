export interface ProfileData {
    first_name: string;
    last_name: string;
    email: string[];
    phone: string[];
    ocial_links?: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        website?: string;
      };
    bio: string;
  }

export const calculateProfileCompletion = (profileData?:ProfileData ) => {
    if (!profileData) return 0;
  
    const requiredFields = [
      'first_name',
      'last_name',
      'email',
      'phone',
      'social_links',
      'bio',
    ];
  
    let completedFields = 0;
  
    requiredFields.forEach((field) => {
      if (field === 'phone') {
        if (profileData[field] && profileData[field].length > 0) {
          completedFields++;
        }
      } else if (profileData[field as keyof typeof profileData]) {
        completedFields++;
      }
    });
  
    return Math.round((completedFields / requiredFields.length) * 100);
  };
  