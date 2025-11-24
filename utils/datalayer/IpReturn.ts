export const getClientIP = async () => {
  try {
    const res = await fetch("https://api64.ipify.org/?format=json");
    const data = await res.json();
    return data.ip;
  } catch (err) {
    console.error("Failed to fetch IP:", err);
    return null;
  }
};
