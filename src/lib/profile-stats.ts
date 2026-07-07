export function getAge(dob = new Date("2000-04-02")): number {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age;
}

export function getExperienceYears(since = 2018): number {
  return new Date().getFullYear() - since;
}
