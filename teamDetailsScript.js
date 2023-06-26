var Teams_Data = JSON.parse(localStorage.getItem("Teams_Data"));

var TeamDetails = JSON.parse(localStorage.getItem("TeamDetails"));

$(() => {
  getTeamDetails();
});

const getTeamDetails = () => {
  const TeamId = getTeamId();
  if (TeamId) {
    getTeamData(TeamId);
  } else {
    location.pathname = location.pathname.replace(
      "index.html",
      "teamDetails.html"
    );
  }
};

const getTeamId = () => {
  const search = location.search;
  const params = new URLSearchParams(search);
  return params.get("product_id");
};

const getTeamData = (TeamId) => {
  const team = Teams_Data.find((i) => i.id === +TeamId);
  const team2 = TeamDetails.find((i) => i.id === +TeamId);
  console.log(team, team2, TeamId);
  const teamCard = addTeamDataToDOM(team, team2);

  $("#Team_Data").append(teamCard);
};

const addTeamDataToDOM = (team, team2) => {
  const { logo, Team, TopBatsman, TopBowler, ChampionshipWonCount } =
    team || {};
  const { playerName, photo, from } = team2 || {};

  return $(`
 
  <div class="Team_data">
  <div class="team_image">
      <img src="${logo}" alt="team_image" id="TeamIcon" />
    </div>
    <div class="">
    <h3 class="" id=""> ${Team}</h3>
    <h4 class="won_count"> ${ChampionshipWonCount}</h4>
    <p>${TopBatsman}</p>
    <p>${TopBowler}</p>
    </div>
</div>
<div class="team_player">
  <div class="player_image">
      <img src="${photo}" alt="player_img" />
  </div>
  <div>
      <p> ${playerName} </p>
  </div>
</div>

  `);
};
