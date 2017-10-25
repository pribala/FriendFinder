var friends = require("../data/friends.js");

module.exports = function(app) {
	
	// API GET Routes
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});  
		
	
	// API POST Route
	app.post("/api/friends", function(req, res) {
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
	  var newFriend = req.body;
	  var match = compatibilityTest(newFriend);
	  friends.push(newFriend);
	  res.json(match);
	});
};

function compatibilityTest(curObj) {
	var curObjScores = curObj.scores.map(Number);
	var totalDifference = 0;
	// Take an large initial value so the first total is less than it
	var minDiff = 100;
	var compatible = {};
	for(var j=0; j<friends.length; j++){
		totalDifference = 0;
		for(var i=0;i<friends[j].scores.length; i++){
			totalDifference += Math.abs(friends[j].scores[i]-curObjScores[i]);
		}
		if(totalDifference<minDiff){
			minDiff = totalDifference;
			compatible = friends[j];
		}
	};
	return compatible;
}