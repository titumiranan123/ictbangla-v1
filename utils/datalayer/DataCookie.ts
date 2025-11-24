// fbp => fb.1.<ts>.<rand>
export const genFbp = () => {
  return `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e10)}`;
};

// fbc => fb.1.<ts>.<fbclid>
export const genFbc = (fbclid: string) => {
  return `fb.1.${Date.now()}.${fbclid}`;
};

export function generateExternalId() {
  return "guest_" + crypto.randomUUID(); // or use your own unique ID generator
}
