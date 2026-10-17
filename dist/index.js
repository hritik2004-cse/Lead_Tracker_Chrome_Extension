// DOM variables
const ulEL = document.getElementById("ul-el");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
// Global variables
let myLeads = [];
const storedLeads = localStorage.getItem("myLeads");
let parseLead = storedLeads ? JSON.parse(storedLeads) : null;
if (parseLead) {
    myLeads = parseLead;
    render(myLeads);
}
// render function to render leads
function render(leads) {
    ulEL.innerHTML = "";
    for (let i = 0; i < leads.length; i++) {
        const lead = leads[i];
        if (!lead)
            continue;
        const li = document.createElement("li");
        const anchor = document.createElement("a");
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
        console.log("input value: ", inputEl.value);
        console.log("my leads array: ", myLeads);
        console.log("saved items", parseLead);
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
    console.log(chrome.tabs);
});
// delete all button
deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});
export {};
//# sourceMappingURL=index.js.map