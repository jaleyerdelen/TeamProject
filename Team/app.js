import teams from "./data.js";

const row = document.querySelector(".row");

const filter = document.querySelector(".filter");

//load Items
window.addEventListener("DOMContentLoaded", function () {
  displayTeamsItems(teams);
  const team_name = teams.reduce(
    function (values, item) {
      if (!values.includes(item.team_name)) {
        values.push(item.team_name);
      }
      return values;
    },
    ["All"]
  );
  //    console.log(team_name)

  const teamsBtns = team_name
    .map(function (team_name) {
      return `  <button type="button" class="btn filter-btn btn-secondary" data-id=${team_name}>${team_name}</button>`;
    })
    .join("");
  filter.innerHTML = teamsBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter Items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      console.log("clicked");
      const team_name = e.currentTarget.dataset.id;
      const teamCategory = teams.filter(function (teamsItems) {
        if (teamsItems.team_name === team_name) {
          return teamsItems;
        }
      });
      //  console.log(teamCategory)
      if (team_name === "All") {
        displayTeamsItems(teams);
      } else {
        displayTeamsItems(teamCategory);
      }
    });
  });
  //console.log(filterBtns)
});

function displayTeamsItems(teamsItems) {
  let displayTeams = teamsItems.map(function (item) {
    //  console.log(item);
    return `
    <div class="col-md-3">
 <div class="card" style="width: 18rem;">
  <img src="https://trendbasket.net/wp-content/uploads/2015/12/nba-logo.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
  
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><b>Team Name:</b> ${item.team_name}</li>
    <li class="list-group-item"><b>Minutes Per Game:</b> ${item.minutes_per_game}</li>
    <li class="list-group-item"><b>Games Played: </b>${item.games_played}</li>
    <li class="list-group-item"><b>Points Per Game: </b>${item.points_per_game}</li>
    <li class="list-group-item"><b>Rebounds Per Game: </b>${item.rebounds_per_game}</li>
    <li class="list-group-item"><b>Assists Per Game: </b>${item.assists_per_game}</li>
    <li class="list-group-item"><b>Blocks Per Game: </b>${item.blocks_per_game}</li>
    <li class="list-group-item"><b>Steals Per Game: </b>${item.steals_per_game}</li>
  </ul>
 
</div>
</div>
`;
  });
  displayTeams = displayTeams.join("");
  //  console.log(displayTeams);
  row.innerHTML = displayTeams;
}
