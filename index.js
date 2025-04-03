const theme_toggler = document.getElementById("toggle-theme");
const dashboard_overview = document.getElementById("overview");
const navbar = document.getElementById("navbar");
const stats = document.getElementsByClassName("stats");
const search_bar = document.getElementById("search");

change_theme = () => {
    dashboard_overview.style.color = "white";
    navbar.style.backgroundColor = "#18191a";
    dashboard_overview.style.backgroundColor = '#242526';
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

theme_toggler.addEventListener('click', change_theme);

const ctx = document.getElementById('myChart');

new Chart("myChart", {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});