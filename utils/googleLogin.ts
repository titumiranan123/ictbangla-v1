export const handleGoogleLogin = () => {
  window.location.href =
    `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/user/google?user_role=USER`;
};
