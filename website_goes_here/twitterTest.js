$(function () {
  // Attach toggle function to buttons as click listeners
  $("#tweets-btn").on("click", () => {
    toggleTweets();
  });

  populateTweets();
});

// TEST DATA
let postsData = [
    { post_id: "1403353958287085574" },
    { post_id: "1403416676503261190" },
    { post_id: "1401549875498688513" },
    { post_id: "1400139143796215811" },
    { post_id: "1399723516631650308" },
    { post_id: "1399514497619009540" }
  ];


// let postsData = [
//   {
//     post_id: "1409203073294213124",
//   },
//   {
//     post_id: "1405706210721009667",
//   },
//   {
//     post_id: "1405643962023559169",
//   },
//   {
//     post_id: "1405645828484653061",
//   },
//   {
//     post_id: "1405645589346406400",
//   },
//   {
//     post_id: "1405645670011355146",
//   },
//   {
//     post_id: "1405645727334899717",
//   },
//   {
//     post_id: "1405645711501369352",
//   },
//   {
//     post_id: "1405645693038047232",
//   },
//   {
//     post_id: "1405645766056677376",
//   },
//   {
//     post_id: "1401766772177580032",
//   },
//   {
//     post_id: "1401025926226382849",
//   },
//   {
//     post_id: "1400380032229445635",
//   },
//   {
//     created_id: "2021-06-03",
//     post_id: "1400379079870799873",
//     score: 1,
//   },
//   {
//     post_id: "1400301163505983489",
//   },
//   {
//     post_id: "1400300916721455105",
//   },
//   {
//     post_id: "1400300751872798721",
//   },
//   {
//     post_id: "1400300206818742273",
//   },
//   {
//     post_id: "1400299118002675717",
//   },
//   {
//     post_id: "1400325794094800900",
//   },
//   {
//     post_id: "1400301795331747840",
//   },
//   {
//     post_id: "1400301887774146561",
//   },
//   {
//     post_id: "1400299099744841733",
//   },
//   {
//     post_id: "1400301539412033537",
//   },
//   {
//     post_id: "1400380286710562818",
//   },
//   {
//     post_id: "1400300993934417922",
//   },
//   {
//     post_id: "1400294387809198082",
//   },
//   {
//     post_id: "1399827729609072643",
//   },
//   {
//     post_id: "1399827641952309249",
//   },
//   {
//     post_id: "1399832080645824516",
//   },
//   {
//     post_id: "1399660487328112641",
//   },
//   {
//     post_id: "1399661919905198080",
//   },
//   {
//     post_id: "1399662612217057285",
//   },
//   {
//     post_id: "1399750944909373445",
//   },
//   {
//     post_id: "1399750970565857282",
//   },
//   {
//     post_id: "1399752258116624388",
//   },
//   {
//     post_id: "1399751690446835720",
//   },
//   {
//     post_id: "1399753926669447170",
//   },
//   {
//     post_id: "1399759494238904322",
//   },
//   {
//     post_id: "1399760655205474307",
//   },
//   {
//     post_id: "1399768941896032261",
//   },
//   {
//     post_id: "1399752009268482051",
//   },
//   {
//     post_id: "1399828070266281984",
//   },
//   {
//     post_id: "1399828043544285196",
//   },
//   {
//     post_id: "1399827970840215554",
//   },
//   {
//     post_id: "1399736430323290115",
//   },
//   {
//     post_id: "1399827826925260804",
//   },
//   {
//     post_id: "1399827701222064134",
//   },
//   {
//     post_id: "1399827680598577155",
//   },
//   {
//     post_id: "1399660451940683777",
//   },
// ];

// functions to populate tweets
const populateTweets = () => {
  // set up the variables
  var subs;
  var tempString;
  var col1 = "",
    col2 = "",
    col3 = "";
  var column_index = 1;

  // loop through the results to build the three column strings
  for (subs = 0; subs < postsData.length; subs++) {
    if (column_index == 1) {
      col1 += "<div class='embed-responsive' id='tweetArea" + subs + "'></div>";
    } else if (column_index == 2) {
      col2 += "<div class='embed-responsive' id='tweetArea" + subs + "'></div>";
    } else if (column_index == 3) {
      col3 += "<div class='embed-responsive' id='tweetArea" + subs + "'></div>";
    }
    column_index += 1;
    if (column_index == 4) {
      column_index = 1;
    }
  }

  // write out the column html code
  document.getElementById("tweetCol1").innerHTML = col1;
  document.getElementById("tweetCol2").innerHTML = col2;
  document.getElementById("tweetCol3").innerHTML = col3;

  // loop through the results to display the tweets
  for (subs = 0; subs < postsData.length; subs++) {
    // get the post id
    post_id = postsData[subs];

    // build the twitter area name
    twitter_area = "tweetArea" + subs;

    // display the tweets
    twttr.widgets
      .createTweet(
        postsData[subs].post_id,
        document.getElementById(twitter_area),
        {}
      )
      .then(function (e1) {
        console.log("promise resolve type (undefined or dom element): ", e1);
        if (e1 === undefined) alert("undefined");
      })
      .catch(function (e2) {
        console.log("catch error", e2);
      });
  }
};

// Function to toggle tweets to show/hide
const toggleTweets = () => {
  let tweetsContainer = $(`#tweets-container`);

  if ($(tweetsContainer).css("display") === "none") {
    console.log("show posts");
    $(tweetsContainer).show();
  } else {
    console.log("hide posts");
    $(tweetsContainer).hide();
  }
};
