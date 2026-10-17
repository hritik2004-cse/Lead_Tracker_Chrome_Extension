// DOM variables
const ulEL = document.getElementById("ul-el") as HTMLUListElement;
const tabBtn = document.getElementById("tab-btn") as HTMLButtonElement;
const inputEl = document.getElementById("input-el") as HTMLInputElement;
const inputBtn = document.getElementById("input-btn") as HTMLButtonElement;
const deleteBtn = document.getElementById("delete-btn") as HTMLButtonElement;

// Global variables
let myLeads: string[] = [];
const storedLeads = localStorage.getItem("myLeads");
let parseLeads: string[] | null = storedLeads ? JSON.parse(storedLeads) : null;

if (parseLeads) {
  myLeads = parseLeads;
  render(myLeads);
}

// render function to render leads
function render(leads: string[]) {
  ulEL.innerHTML = "";
  for (let i = 0; i < leads.length; i++) {
    const lead = leads[i];
    if (!lead) continue;
    const li = document.createElement("li") as HTMLLIElement;
    const anchor = document.createElement("a") as HTMLAnchorElement;
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("href", lead);
    li.appendChild(anchor);
    anchor.textContent = lead;
    ulEL.appendChild(li);
  }
}

// save lead button
inputBtn.addEventListener("click", () => {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

// save tab button
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    if (tab?.url) {
      myLeads.push(tab.url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    }
  });
});

// delete all button
deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
