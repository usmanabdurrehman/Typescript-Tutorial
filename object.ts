enum Designation {
  JuniorSoftwareEngineer = "junior software engineer",
  SeniorSoftwareEngineer = "senior software engineer",
  TechLead = "tech lead",
}

const getSalaryFromdesignation = (designation: Designation) => {
  const designationToSalaryMap = {
    "junior software engineer": 20000,
    "senior software engineer": 60000,
    "tech lead": 80000,
  };

  return designationToSalaryMap[designation];
};
