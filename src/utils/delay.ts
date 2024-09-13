/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const delay = async ({ ms = 200 }) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};
