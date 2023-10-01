const getDataForPatient = () => {};

const getGenericData = () => {};

const getData = (isPatient: boolean) => {
  if (isPatient) {
    return getDataForPatient();
  }
  getGenericData();
};
