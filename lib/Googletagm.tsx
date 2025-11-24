/* eslint-disable @typescript-eslint/no-explicit-any */
export const pushToDataLayer = (data: any) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(data);
  }
};
export const initDataLayer = () => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }
};
export const generateEventId = () =>
  "evt_" + Math.random().toString(36).substr(2, 9);
