export async function fetchPatientData() {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev/",
    {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    }
  );

  const data = await response.json();

  return data;
}