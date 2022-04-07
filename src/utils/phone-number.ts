export const reformatMobile = (number: string) => {
  let formatted = "";

  if (number) {
    const mobile = number.slice(1).substring(0, 3);
    if (mobile === "234") {
      formatted = number.slice(1).replace(/^234/, "0");
    } else {
      formatted = number;
    }
  }

  return formatted;
};
