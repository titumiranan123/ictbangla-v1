import { api_url } from "@/hooks/apiurl";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ProfileData {
  first_name: string;
  last_name: string;
  email: string[];
  phones: {
    number: string;
    is_primary_number: boolean;
    is_verified: boolean;
  }[];
  social_links?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  bio: string;
}

interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  children,
}) => (
  <div className="space-y-4 p-6 border-b last:border-b-0">
    {title && <h3 className="text-lg font-medium">{title}</h3>}
    {description && <p className="text-sm text-gray-500">{description}</p>}
    <div className="space-y-4">{children}</div>
  </div>
);

interface FormFieldProps {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  error,
  children,
  required = false,
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

interface ProfileUpdateProps {
  profile: ProfileData;
  refetch: () => void;
}

export const ProfileUpdate: React.FC<ProfileUpdateProps> = ({
  profile,
  refetch,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<ProfileData>({
    defaultValues: profile,
  });

  const onSubmit = async (data: ProfileData) => {
    try {
      const res = await api_url.patch("/v1/user/update/user-profile", data);
      if (res.status === 201) {
        refetch();
        toast.success("Profile updated successfully");
      } else toast.success("Profile updated failed");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.success("Profile updated failed");
      throw new Error(error.message);
    }
  };
  const hasPhoneNumber = profile?.phones?.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Basic Information Section */}
        <FormSection title="Basic Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              label="First Name"
              id="first_name"
              error={errors.first_name?.message}
              required
            >
              <input
                type="text"
                {...register("first_name", {
                  required: "First name is required",
                })}
                id="first_name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </FormField>

            <FormField
              label="Last Name"
              id="last_name"
              error={errors.last_name?.message}
              required
            >
              <input
                type="text"
                {...register("last_name", {
                  required: "Last name is required",
                })}
                id="last_name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </FormField>
          </div>

          <FormField
            label="Email"
            id="email"
            error={errors.email?.message}
            required
          >
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </FormField>

          <FormField
            label="Primary Phone Number"
            id="phone"
            error={errors.phones?.message}
            required
          >
            {!hasPhoneNumber && (
              <p className="text-red-600 font-medium mb-2">
                ⚠️ Warning: No phone number exists in your profile. Please add
                at least one.
              </p>
            )}
            <input
              type="tel"
              {...register("phones.0.number", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Please enter a valid 11-digit phone number",
                },
              })}
              id="phone.0.number"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.phones?.message ? "border-red-500" : ""
              }`}
              placeholder="e.g., 01750561063"
            />
          </FormField>

          <FormField label="Bio" id="bio">
            <textarea
              {...register("bio")}
              id="bio"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              rows={4}
            />
          </FormField>
        </FormSection>

        {/* Social Links Section */}
        <FormSection
          title="Social Links"
          description="Add links to your social media profiles"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Facebook" id="facebook">
              <input
                type="url"
                {...register("social_links.facebook")}
                id="facebook"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://facebook.com/username"
              />
            </FormField>

            <FormField label="Twitter" id="twitter">
              <input
                type="url"
                {...register("social_links.twitter")}
                id="twitter"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://twitter.com/username"
              />
            </FormField>

            <FormField label="LinkedIn" id="linkedin">
              <input
                type="url"
                {...register("social_links.linkedin")}
                id="linkedin"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://linkedin.com/in/username"
              />
            </FormField>

            <FormField label="Website" id="website">
              <input
                type="url"
                {...register("social_links.website")}
                id="website"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://yourwebsite.com"
              />
            </FormField>
          </div>
        </FormSection>

        {/* Submit Button */}
        <div className="p-6">
          <button
            type="submit"
            className="w-full px-6 py-3 border border-primary  bg-primary text-white rounded-md font-medium hover:bg-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};
