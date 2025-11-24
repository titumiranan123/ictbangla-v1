export const generateSlug = (text: string): string => {
    return text
      .toString()
      .trim()
      .replace(/[!@#$%^&*()_+={}[\]|\\:;"'<>,.?/~`]/g, "") // Remove symbols
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Remove multiple hyphens
      .toLowerCase();
  };