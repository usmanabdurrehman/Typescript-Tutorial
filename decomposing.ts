const getDataForPatient = () => {};

const getGenericData = () => {};

const getData = (isPatient: boolean, age: number) => {
  const isAdult = age > 18;
  const shouldGetDataForPatient = isPatient && isAdult;

  if (shouldGetDataForPatient) {
    getDataForPatient();
  } else {
    getGenericData();
  }
};
