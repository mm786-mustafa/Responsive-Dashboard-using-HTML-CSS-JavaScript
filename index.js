const body = document.body;
const theme_toggler = document.getElementById("toggle-theme");
const dashboard_overview = document.getElementById("overview");
const navbar = document.getElementById("navbar");
const stats = document.getElementsByClassName("stats");
const search_bar = document.getElementById("search");

dark_theme = () => {
  body.style.backgroundColor = '#242526';
  dashboard_overview.style.color = "white";
  navbar.style.backgroundColor = "#18191a";
  // dashboard_overview.style.backgroundColor = '#242526';
  dashboard_overview.children[2].style.backgroundColor = "#3a3b3c";
  dashboard_overview.children[2].style.boxShadow = "none";
  dashboard_overview.children[3].style.backgroundColor = "#3a3b3c";
  dashboard_overview.children[3].style.boxShadow = "none";
  dashboard_overview.lastElementChild.style.backgroundColor = "#18191a";
  document.body.querySelectorAll("th")[0].style.backgroundColor = "#4e4f50";
  document.body.querySelectorAll("th")[1].style.backgroundColor = "#4e4f50";
  for (let i=0; i<stats.length; i++) {
      stats[i].style.backgroundColor = "#3a3b3c";
      stats[i].style.boxShadow = "none";
  }
}

light_theme = () => {
  body.style.backgroundColor = '#f4f6f8';
  dashboard_overview.style.color = "black";
  navbar.style.backgroundColor = "#2f4050";
  // dashboard_overview.style.backgroundColor = '#242526';
  dashboard_overview.children[2].style.backgroundColor = "white";
  dashboard_overview.children[2].style.boxShadow = "0 3px 18px #e5e7e8";
  dashboard_overview.children[3].style.backgroundColor = "white";
  dashboard_overview.children[3].style.boxShadow = "0 3px 18px #e5e7e8";
  dashboard_overview.lastElementChild.style.backgroundColor = "#2f4050";
  document.body.querySelectorAll("th")[0].style.backgroundColor = "#f0f0f0";
  document.body.querySelectorAll("th")[1].style.backgroundColor = "#f0f0f0";
  for (let i=0; i<stats.length; i++) {
      stats[i].style.backgroundColor = "white";
      stats[i].style.boxShadow = "0 3px 18px #e5e7e8";
  }
}

change_theme = () => {
  body_background_color = window.getComputedStyle(body).backgroundColor;
  console.log(window.getComputedStyle(body).backgroundColor);
  if (body_background_color === 'rgb(36, 37, 38)') {
      console.log("light theme");
      light_theme();
  } else {
      console.log("dark theme");
      dark_theme();
  }
}

theme_toggler.addEventListener('click', change_theme);

function search_item() {
    let search_value = search_bar.value.toLowerCase();
    let table = document.getElementById("items-table");
    let tr = table.getElementsByTagName("tr");
    for (let i=0; i<tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let txt_value = td.textContent || td.innerText;
            if (txt_value.toLowerCase().indexOf(search_value) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}

function show_reports() {
  const reports = document.getElementsByClassName("dropdown-content-1")[0];
  const display_attribute = window.getComputedStyle(reports).display;
  reports.style.display = display_attribute === "none" ? "block" : "none";
}

function show_analytics() {
  const analytics = document.getElementsByClassName("dropdown-content-2")[0];
  const display_attribute = window.getComputedStyle(analytics).display;
  analytics.style.display = display_attribute === "none" ? "block" : "none";
}