$(() => {
  addCarousel();
  TeamList();
});

const addCarousel = () => {
  $(".slick_container").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
  });
};

var Teams_Data = [
  {
    id: 0,
    Team: "MUMBAI INDIANS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
    TopBatsman: "Rohit sharma",
    TopBowler: "Jaspreet Bumrah",
    ChampionshipWonCount: "5",
  },
  {
    id: 1,
    Team: "CHENNAI SUPER KINGS",
    logo: "https://seeklogo.com/images/C/chennai-super-kings-logo-F4EBD1F5A6-seeklogo.com.png",
    TopBatsman: "Ruturaj Gaikwad",
    TopBowler: "Deepak Chahar",
    ChampionshipWonCount: "5",
  },
  {
    id: 2,
    Team: "ROYAL CHALLENGERS BANGALORE",
    logo: "https://www.vhv.rs/dpng/d/417-4175849_royal-challengers-bangalore-new-logo-hd-png-download.png",
    TopBatsman: "Virat Kohli",
    TopBowler: "Mohammed Siraj",
    ChampionshipWonCount: "0",
  },
  {
    id: 3,
    Team: "DELHI CAPITALS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
    TopBatsman: "Rishabh Pant",
    TopBowler: "Anrich Nortje",
    ChampionshipWonCount: "0",
  },
  {
    id: 4,
    Team: "KOLKATA KNIGHT RIDERS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png",
    TopBatsman: "Shreyas Iyer",
    TopBowler: "Sunil Narine",
    ChampionshipWonCount: "2",
  },
  {
    id: 5,
    Team: "PUNJAB KINGS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/1200px-Punjab_Kings_Logo.svg.png",
    TopBatsman: "Shikhar Dhawan",
    TopBowler: "Kagiso Rabada",
    ChampionshipWonCount: "0",
  },
];

const TeamDetails = [
  {
    id: 0,
    playerName: "Hardik Pandya",
    photo:
      "https://india.postsen.com/content/uploads/2023/01/12/c32377ed65.jpg",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 1,
    playerName: "Virat Kohli",
    photo:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png",
    from: "RCB",
    price: "8.00 Cr",
    isPlaying: true,
    description: "Batsman",
  },
  {
    id: 2,
    playerName: "Yuvraj Singh",
    photo: "https://s.ndtvimg.com/images/stories/yuvrajbat300.jpg",
    from: "MI",
    price: "1.00 Cr",
    isPlaying: false,
    description: "Batsman",
  },
  {
    id: 3,
    playerName: "Suryakumar Yadav",
    photo: "https://jagrancricket.com/wp-content/uploads/2023/01/FD.jpg",
    from: "MI",
    price: "8 Cr",
    isPlaying: true,
    description: "Batter",
  },
  {
    id: 4,
    playerName: "Glenn Maxwell",
    photo:
      "https://thebridge.in/h-upload/2021/10/09/16927-glenn-maxwell-has-rejuvenated-rcbs-middle-order-in-ipl-2021-source-bcciipl.webp",
    from: "RCB",
    price: "14.25",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 5,
    playerName: "Rohit Sharma",
    photo:
      "https://cdn.wisden.com/wp-content/uploads/2023/04/Rohit-Sharma-980x530.png",
    from: "MI",
    price: "6.50 Cr",
    isPlaying: true,
    description: "BatsMan",
  },
  {
    id: 6,
    playerName: "Ishan Kishan",
    photo:
      "https://www.timesofsports.com/wp-content/uploads/2021/10/Ishan-Kishan-1.png",
    from: "MI",
    price: "2.50 Cr",
    isPlaying: true,
    description: "BatsMan",
  },
  {
    id: 7,
    playerName: "Ravindra Jadeja",
    photo:
      "https://static.toiimg.com/thumb/msid-100603689,imgsize-52198,width-400,resizemode-4/100603689.jpg",
    from: "CSK",
    price: "16 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 8,
    playerName: "Kuldeep Yadav",
    photo:
      "https://images.mid-day.com/images/images/2022/oct/Kuldeep-october-photo-b_d.jpg",
    from: "DC",
    price: "2 Cr",
    isPlaying: true,
    description: "Bowler",
  },
  {
    id: 9,
    playerName: "Rinku Singh",
    photo:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1681124614.webp",
    from: "KKR",
    price: "55 lakh",
    isPlaying: true,
    description: "Batsman",
  },
  {
    id: 10,
    playerName: "David Willey",
    photo:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/90.png",
    from: "RCB",
    price: "2 Cr",
    isPlaying: true,
    description: "Bowling All-rounder",
  },
  {
    id: 11,
    playerName: "Arshdeep Singh",
    photo:
      "https://www.punjabkingsipl.in/static-assets/waf-images/aa/59/0a/4-3/9uRxPMTJQg.jpg",
    from: "PBKS",
    price: "4 Cr",
    isPlaying: true,
    description: "Bowler",
  },
  {
    id: 12,
    playerName: "Sam Curran",
    photo:
      "https://www.youngwitness.com.au/images/transform/v1/crop/frm/silverstone-feed-data/22e883ae-97fe-4692-807f-d523152008b9.jpg/r0_0_800_600_w800_h600_fmax.jpg",
    from: "PBKS",
    price: "18.5 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 13,
    playerName: "Prithvi Shaw",
    photo:
      "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/01/24/Pictures/_f4dcadae-3e57-11ea-bfbd-f812f33ac46f.jpg",
    from: "DC",
    price: "7.5 Cr",
    isPlaying: true,
    description: "Batsman",
  },
  {
    id: 14,
    playerName: "Shivam Dube",
    photo:
      "https://static.toiimg.com/thumb/msid-90817062,width-400,resizemode-4/90817062.jpg",
    from: "CSK",
    price: "4 Cr",
    isPlaying: true,
    description: "All-rounder",
  },
  {
    id: 15,
    playerName: "Dinesh Karthik",
    photo:
      "https://static.toiimg.com/thumb/msid-100416624,width-1280,resizemode-4/100416624.jpg",
    from: "RCB",
    price: "5.5 Cr",
    isPlaying: true,
    description: "Batter-Wicketkeeper",
  },
  {
    id: 16,
    playerName: "Cameron Green",
    photo:
      "https://assets.telegraphindia.com/telegraph/2020/Oct/1603994832_ek2jy-cvuaas-8k.jpg",
    from: "MI",
    price: "15.25 Cr",
    isPlaying: true,
    description: "Wicket-keeper Batter",
  },
];

window.localStorage.setItem("Teams_Data", JSON.stringify(Teams_Data));
window.localStorage.setItem("TeamDetails", JSON.stringify(TeamDetails));

const TeamList = () => {
  if (Array.isArray(Teams_Data)) {
    Teams_Data.forEach((i) => {
      const TeamCard = $(TeamDataTemp(i));
      $("#teams_blog").append(TeamCard);
    });
  }
};

const TeamDataTemp = (Teams_Data) => {
  const pathOfTeam = location.pathname.replace(
    "index.html",
    "teamDetails.html"
  );
  const { id, logo, Team } = Teams_Data || {};
  return `
   <div class="Teams_card">
   <a href=${pathOfTeam}?product_id=${id}>
       <div class="team_image">
            <img src="${logo}" alt="team_image" id="TeamIcon" />
          </div>
          <div class="nameSec">
          <h3 class="Team_Name" id="TeamName">${Team}</h3>
          </div>
 </div>
 `;
};

$(document).ready(function () {
  $("#addTeamButton").click(function () {
    $("#teamFormContainer").toggle();
  });
});

$(document).ready(function () {
  $("#teamForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var teamName = $("#teamName").val();
    var teamOwner = $("#teamOwner").val();

    // Process the form data (e.g., send an AJAX request)
    // Example:
    $.ajax({
      url: "/api/addTeam",
      method: "POST",
      data: { teamName: teamName, teamOwner: teamOwner },
      success: function (response) {
        // Handle success response
        console.log(response);
      },
      error: function (xhr, status, error) {
        // Handle error
        console.log(error);
      },
    });

    // Reset the form
    $("#teamForm")[0].reset();
  });
});

$(document).ready(function () {
  $("#addPlayerButton").click(function () {
    $("#PlayerFormContainer").toggle();
  });
});

$(document).ready(function () {
  $("#teamForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form values
    var teamName = $("#teamName").val();
    var teamOwner = $("#teamOwner").val();

    // Process the form data (e.g., send an AJAX request)
    // Example:
    $.ajax({
      url: "/api/addTeam",
      method: "POST",
      data: { teamName: teamName, teamOwner: teamOwner },
      success: function (response) {
        // Handle success response
        console.log(response);
      },
      error: function (xhr, status, error) {
        // Handle error
        console.log(error);
      },
    });

    // Reset the form
    $("#teamForm")[0].reset();
  });
});
