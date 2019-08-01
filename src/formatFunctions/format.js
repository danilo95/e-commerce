export const formatNumber = (numberValue) => {
  let numberToReturn = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(numberValue);
  return numberToReturn;
};

