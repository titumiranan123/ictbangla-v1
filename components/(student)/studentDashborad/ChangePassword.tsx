/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import Input from "../../(instructor)/others/Input";
import toast from "react-hot-toast";
import { api_url } from "@/hooks/apiurl";

interface IChangepassword {
  currentpass: string;
  newpass: string;
  reTypepass: string;
}

const Changepassword = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IChangepassword>();
  const { data: session }: any = useSession();

  const onSubmit = async (data: IChangepassword) => {
    const info = {
      email_or_phone: session?.user?.email,
      old_password: data.currentpass,
      new_password: data.newpass,
    };

    try {
      const result = await api_url.post(`/v1/auth/update-password`, info);

      if (result.status === 200) {
        toast.success("Password Updated Successfully🎉.");
      } else {
        toast.error("Password update failed.");
      }
    } catch (error: any) {
      if (error.response) {
        // If the server responded with an error
        toast.error(
          `Error: ${error.response.data.message || "Password update failed."}`
        );
      } else if (error.request) {
        // If the request was made but no response was received
        toast.error("No response from the server. Please try again later.");
      } else {
        // If something else caused the error
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-10 mt-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Current Password"
        type="password"
        register={register}
        name="currentpass"
        validation={{
          required: "Please enter your current password.",
        }}
        error={errors.currentpass}
      />
      <Input
        label="New Password"
        type="password"
        register={register}
        name="newpass"
        validation={{
          required: "Please enter a new password.",
          validate: (value: string) =>
            value !== watch("currentpass") ||
            "New password cannot be the same as current password.",
        }}
        error={errors.newpass}
      />
      <Input
        label="Re-type New Password"
        type="password"
        register={register}
        name="reTypepass"
        validation={{
          required: "Please confirm your new password.",
          validate: (value: string) =>
            value === watch("newpass") || "Passwords do not match.",
        }}
        error={errors.reTypepass}
      />
      <button
        type="submit"
        className="py-4 px-2 bg-black text-white w-[180px] rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Changepassword;
