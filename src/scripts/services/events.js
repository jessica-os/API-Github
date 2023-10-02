import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js";

async function getEvents(userName) {
  const response = await fetch(
    `${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`
  );
  const events = await response.json();
  
  return events
    .filter(
      (element) =>
        element.type === "CreateEvent" || element.type === "PushEvent"
    )  
    .slice(0, repositoriesQuantity);
   
}
export { getEvents };
