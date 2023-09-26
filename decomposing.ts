const getDataForPatient = () => {};

const getGenericData = () => {};

const getData = (isPatient: boolean, age: number) => {
  if (isPatient && age > 18) {
    getDataForPatient();
  } else {
    getGenericData();
  }

  // Refractor
  const isAdult = age > 18;
  const shouldGetDataForPatient = isPatient && isAdult;

  if (shouldGetDataForPatient) {
    getDataForPatient();
  } else {
    getGenericData();
  }
};
