const isString = (value: any): value is string => {
  return typeof value === "string";
};

let value: any;
if (isString(value)) {
  value.toLowerCase();
}
