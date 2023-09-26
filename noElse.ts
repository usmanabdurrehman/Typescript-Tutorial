const getDataForPatient = () => {};

const getGenericData = () => {};

const getData = (isPatient: boolean) => {
  if (isPatient) {
    getDataForPatient();
  } else {
    getGenericData();
  }
};
