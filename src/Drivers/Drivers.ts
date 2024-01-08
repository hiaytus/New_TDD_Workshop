// Create a function that returns a DriverStatus enum value
// based on a given age.
// too young is age less than 16
// too old are ages greater than 85
// eligible is any ages between 16 and 85

export enum DriverStatus {
  TOO_YOUNG = "too young",
  TOO_OLD = "too old",
  ELIGIBLE = "eligible",
}

export let valid: string;

export function ageTest(age: number): string {
  if (age < 16 )
    valid = DriverStatus.TOO_YOUNG
  else if (age > 85)
    valid = DriverStatus.TOO_OLD;
  else 
    valid = DriverStatus.ELIGIBLE;
  return valid
}