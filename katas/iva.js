export function iva(amount) {
  const res = amount * 0.16;
  console.log(res);
  if (isNaN(res)) throw new Error("Not a number");

  return res;
}
