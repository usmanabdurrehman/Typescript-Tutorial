enum Designation {
  JuniorSoftwareEngineer = "junior software engineer",
  SoftwareEngineer = "software engineer",
  SeniorSoftwareEngineer = "senior software engineer",
  TechLead = "tech lead",
  TeamLead = "team lead",
}

const getSalaryFromdesignation = (designation: Designation) => {
  const designationToSalaryMap = {
    "junior software engineer": 20000,
    "software engineer": 40000,
    "senior software engineer": 60000,
    "tech lead": 80000,
    "team lead": 100000,
  };

  return designationToSalaryMap[designation];

  if (designation === "junior software engineer") return 20000;
  else if (designation === "software engineer") return 40000;
  else if (designation === "senior software engineer") return 60000;
  else if (designation === "tech lead") return 80000;
  else if (designation === "team lead") return 100000;
};
