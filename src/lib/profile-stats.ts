export function getAge(dob = new Date("2000-04-02")): number {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

export function getExperienceYears(since = new Date("2018-04-01")): number {
  const today = new Date();
  let years = today.getFullYear() - since.getFullYear();
  const month = today.getMonth() - since.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < since.getDate())) years--;
  return years;
}
