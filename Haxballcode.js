var room = HBInit({
    roomName: "Twitch Yayındayım Troll Gelmesin",
    maxPlayers: 30,
    public: true,
    noPlayer: true
});
var Map = `{

	"name" : "7v7 101",

	"width" : 1500,

	"height" : 1100,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 1200, "height" : 610, "kickOffRadius" : 8, "cornerRadius" : 0 },

	"vertexes" : [
		 { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		 { "x" : -1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : -1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : -1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
	 { "x" : -1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
	 { "x" : 1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : 1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : 1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : 1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		 { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		 { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		 { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		 { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		 { "x" : -1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "x" : 1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		 { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		 { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		 { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		 { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		 { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		{ "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true },
		{ "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		 { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		{ "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		 { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "vis" : false },
		 { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		 { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true, "curve" : 180 },
		{ "x" : 0, "y" : -600, "trait" : "kickOffBarrier", "vis" : false, "color" : "ffffff" },
		 { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		 { "x" : -1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		 { "x" : 1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		 { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		 { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		 { "x" : -1, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "x" : 800, "y" : -157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		 { "x" : 800, "y" : 157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		 { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		{ "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		 { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		 { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		 { "x" : -1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		 { "x" : -1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		 { "x" : 879, "y" : 312, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		 { "x" : 1200, "y" : 424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -38.522993982551 },
		 { "x" : 879, "y" : -312, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		 { "x" : 800, "y" : -157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		 { "x" : -1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		 { "x" : -1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		 { "x" : 1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		 { "x" : 1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		 { "x" : 0, "y" : -220, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		 { "x" : 0, "y" : 220, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		 { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		 { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		 { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		{ "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		 { "x" : 800.17666687753, "y" : 2.294075784413, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : -0.93062057186233, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : 5.5187721406883, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : -4.1553169281376, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : 3.9064239625506, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 800.17666687753, "y" : -4.9614910172065, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		{ "x" : 800.17666687753, "y" : 6.3249462297571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		{ "x" : 608.97271950911, "y" : 2.294075784413, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : -0.93062057186233, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : 5.5187721406883, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : -4.1553169281376, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : 3.9064239625506, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : -4.9614910172065, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : 608.97271950911, "y" : 6.3249462297571, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
	 { "x" : 1200, "y" : -424, "bCoef" : 0, "trait" : "line" },
		 { "x" : -800, "y" : 157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		 { "x" : -800, "y" : -157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		 { "x" : -879, "y" : -312, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.336382176589 },
		 { "x" : -1200, "y" : -424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -38.522993982551 },
		 { "x" : -879, "y" : 312, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		 { "x" : -800, "y" : 157, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		 { "x" : -800.1940394443, "y" : -2.3590474271794, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.21447245386, "y" : 0.86558419244723, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.17360643474, "y" : -5.5836790468059, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.23490546342, "y" : 4.0902158120738, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.22468895864, "y" : 2.4779000022605, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.18382293952, "y" : -3.9713632369926, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.24001371581, "y" : 4.8963737169805, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -800.16849818235, "y" : -6.3898369517126, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -608.99393054667, "y" : -1.1475001518365, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -609.01436355623, "y" : 2.0771314677901, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -608.97349753711, "y" : -4.3721317714631, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -609.03479656579, "y" : 5.3017630874167, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -609.02458006101, "y" : 3.6894472776034, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -608.98371404189, "y" : -2.7598159616498, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -609.03990481818, "y" : 6.1079209923233, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -608.96838928472, "y" : -5.1782896763697, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		 { "x" : -1200, "y" : 424, "bCoef" : 0, "trait" : "line" },
		 { "x" : 611.02225845065, "y" : -206.45019606002, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : 610.75370748618, "y" : -202.7949449014, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : 610.02225845065, "y" : 187.54980393998, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : 609.75370748618, "y" : 191.2050550986, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : -609.97774154935, "y" : -205.45019606002, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : -610.24629251382, "y" : -201.7949449014, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : -612.97774154935, "y" : 185.54980393998, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : -613.24629251382, "y" : 189.2050550986, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		 { "x" : -1200, "y" : -500, "_selected" : "segment", "vis" : false,"cMask" : ["blue" ] },
		 { "x" : 1200, "y" : -500, "_selected" : "segment", "vis" : false,"cMask" : ["blue" ] }
	],

	"segments" : [
		{ "v0" : 4, "v1" : 5, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 5, "v1" : 6, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 9, "v1" : 10, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 0, "v1" : 1, "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 31, "v1" : 32, "trait" : "kickOffBarrier" },
		{ "v0" : 33, "v1" : 34, "trait" : "kickOffBarrier" },
		{ "v0" : 39, "v1" : 40, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 50, "v1" : 51, "vis" : true, "color" : "ffffff", "trait" : "kickOffBarrier" },
		{ "v0" : 52, "v1" : 53, "trait" : "kickOffBarrier" },
		{ "v0" : 56, "v1" : 57, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 66, "v1" : 67, "curve" : 180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 66, "v1" : 67, "curve" : -180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 67, "v1" : 68, "vis" : true, "color" : "ffffff", "trait" : "kickOffBarrier" },
		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : -38.522993982551, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : -44.336382176589, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 103, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 102, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 105, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 104, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 107, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 106, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 109, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 108, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 111, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 110, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 113, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 112, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 115, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 114, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 88, "v1" : 116, "curve" : 38.522993982551, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 86, "v1" : 77, "curve" : 44.336382176589, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 119, "v1" : 120, "curve" : -38.522993982551, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 121, "v1" : 122, "curve" : -44.336382176589, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 124, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 123, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 126, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 125, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 128, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 127, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 130, "v1" : 129, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 129, "v1" : 130, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 132, "v1" : 131, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 131, "v1" : 132, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 134, "v1" : 133, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 133, "v1" : 134, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 136, "v1" : 135, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 135, "v1" : 136, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 138, "v1" : 137, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 137, "v1" : 138, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 121, "v1" : 139, "curve" : 38.522993982551, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 119, "v1" : 118, "curve" : 44.336382176589, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 140, "v1" : 141, "curve" : -197.38121949058, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 141, "v1" : 140, "curve" : -213.29219661707, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 142, "v1" : 143, "curve" : -197.38121949058, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 143, "v1" : 142, "curve" : -213.29219661707, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 144, "v1" : 145, "curve" : -197.38121949058, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 145, "v1" : 144, "curve" : -213.29219661707, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 146, "v1" : 147, "curve" : -197.38121949058, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 147, "v1" : 146, "curve" : -213.29219661707, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "vis" : false, "v0" : 148, "v1" : 149, "_selected" : true, "y" : -500,"cMask" : ["red","blue" ] }

	],

	"goals" : [
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [1207,95 ], "p1" : [1207,-95 ], "team" : "blue" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [1207,95 ], "p1" : [1207,-95 ], "team" : "blue" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [1207,95 ], "p1" : [1207,-95 ], "team" : "blue" },
		{ "p0" : [-1206.4,95 ], "p1" : [-1206.4,-95 ], "team" : "red" },
		{ "p0" : [1206.4,95 ], "p1" : [1206.4,-95 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "6666CC", "trait" : "goalPost" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -700, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -700, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -700, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1, "cMask" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`
var JMap = JSON.parse(Map);
JMap.vertexes[149].y = 1200;
JMap.vertexes[148].y = 1200;
JMap.segments[74].y = 1200;
room.setCustomStadium(JSON.stringify(JMap));
var topkullanmapozisyonu = room.getBallPosition();
var playersThatTouchedTheBall = new Set();
var sagofsaytkontrolplayerlist = [], solofsaytkontrolplayerlist = [];
var lasttouchedplayer = room.getPlayerList()[0];
var chatmessages = new Set();
var izinlimesajlar = new Set(["https://www.twitch.tv/thelight101"]);
var admins = ["Eray"];
let alttac = false, usttac = false, solustkorner = false
    , solaltkorner = false, sagustkorner = false, sagaltkorner = false
    , solout = false, sagout = false, solgol = false, saggol = false
    , solofsayt = false, sagofsayt = false, sagofsaytkontrol = false, solofsaytkontrol = false;
var admincount = 0; //Admins are listed here.
var maxPlayers = 40;
var lastplayerballkickteamid = 1, topukullanicakolantakim = 2;
var morethansecondframe = 0, framesecondaftergoal = 0, sagofsaytkontrolframe = 0, solofsaytkontrolframe = 0;
var playersarray=[];
var sameframeinsameposition=[];

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}


function min(i1, i2) {
    if (i1 < i2) {
        return i1;
    } else {
        return i2;
    }
}

function max(i1, i2) {
    if (i1 < i2) {
        return i2;
    } else {
        return i1;
    }
}

function handleGameTick() {
    var players = room.getPlayerList();
    var ballPosition = room.getBallPosition();
    var disccounts = room.getDiscCount();
    //room.sendAnnouncement("Ball Positionx "+ballPosition.x+" Ball Positiony "+ballPosition.y);
    if ((saggol == true || solgol == true) && framesecondaftergoal > 180) {
        alttac = false;
        usttac = false;
        solout = false;
        solustkorner = false;
        solaltkorner = false;
        sagout = false;
        sagustkorner = false;
        sagaltkorner = false;
        saggol = false;
        solgol = false;
        solofsayt = false;
        solofsaytkontrol = false;
        solofsaytkontrolplayerlist=[];
        sagofsaytkontrol = false;
        sagofsaytkontrolplayerlist=[];
        solofsaytkontrolframe=0;
        sagofsaytkontrolframe=0;
        sagofsayt = false;

    } else {
        framesecondaftergoal++;
    }
    if (ballPosition.x > 1200 && (ballPosition.y < 100 && ballPosition.y > -100) && sagout == false && sagaltkorner == false && sagustkorner == false && saggol == false) {
        saggol = true;

    }
    if (ballPosition.x < -1200 && (ballPosition.y < 100 && ballPosition.y > -100) && solaltkorner == false && solustkorner == false && solout == false && solgol == false) {
        solgol = true;

    }
    if (sagofsaytkontrol == true) {

        if (lastplayerballkickteamid == 2) {
            sagofsaytkontrol = false;
            sagofsaytkontrolplayerlist=[];
            sagofsaytkontrolframe=0;
        } else {

            for (let i = 0; i < sagofsaytkontrolplayerlist.length; i++) {

                var player = players.find(element => element.id == sagofsaytkontrolplayerlist[i]);
                if (player != null) {
                    if (pointDistance(player.position, ballPosition) < 50) {
                        room.sendAnnouncement(player.name + "Ofsayt oldu ");
                        topkullanmapozisyonu = player.position;
                        sagofsaytkontrolframe = 700;
                    }
                    //room.sendAnnouncement(player.name+" Player name");
                }

                //room.sendAnnouncement("for girdi");
            }

            if (sagofsaytkontrolframe > 600) {
                sagofsayt = true;
                sagofsaytkontrol = false;
                sagofsaytkontrolplayerlist = [];
                sagofsaytkontrolframe = 0;
            } else {
                sagofsaytkontrolframe++;
            }

        }

    }
    if (solofsaytkontrol == true) {
        if (lastplayerballkickteamid == 1) {
            solofsaytkontrol = false;
            solofsaytkontrolplayerlist=[];
            solofsaytkontrolframe=0;
        } else {
            for (let i = 0; i < solofsaytkontrolplayerlist.length; i++) {

                var player = players.find(element => element.id == solofsaytkontrolplayerlist[i]);
                if (player != null) {
                    if (pointDistance(player.position, ballPosition) < 50) {
                        room.sendAnnouncement(player.name + "Ofsayt oldu ");
                        topkullanmapozisyonu = player.position;
                        solofsaytkontrolframe = 700;
                    }
                    //room.sendAnnouncement(player.name+" Player name");
                }

                //room.sendAnnouncement("for girdi");
            }

            if (solofsaytkontrolframe > 600) {
                solofsayt = true;
                solofsaytkontrol = false;
                solofsaytkontrolplayerlist = [];
                solofsaytkontrolframe = 0;
            } else {
                solofsaytkontrolframe++;
            }
        }


    }
    if (ballPosition.x < -1200 && (ballPosition.y > 100 || ballPosition.y < -100) && solaltkorner == false && solustkorner == false && solout == false && solgol == false && solofsayt == false) {
        if (lastplayerballkickteamid == 2) {
            solout = true;
            room.sendAnnouncement("Sol Out. Topu sürüklemeden vurun.")
            morethansecondframe = 0;
            topukullanicakolantakim == 1;
            topkullanmapozisyonu = {x: -1150, y: 0};
            room.setDiscProperties(0, {x: -1150, y: 0, xspeed: 0, yspeed: 0});
        } else {
            if (ballPosition.y > 100) {
                solaltkorner = true;
                room.sendAnnouncement("Sol alt korner. Topu sürüklemeden vurun.")
                morethansecondframe = 0;
                topukullanicakolantakim == 2;
                room.setDiscProperties(0, {x: -1200, y: 600, xspeed: 0, yspeed: 0});
                topkullanmapozisyonu = {x: -1200, y: 600};
            }
            if (ballPosition.y < -100) {
                solustkorner = true;
                room.sendAnnouncement("Sol üst korner. Topu sürüklemeden vurun.")
                morethansecondframe = 0;
                topukullanicakolantakim == 2;
                room.setDiscProperties(0, {x: -1200, y: -600, xspeed: 0, yspeed: 0});
                topkullanmapozisyonu = {x: -1200, y: -600};
            }
        }


    }

    if (ballPosition.x > 1200 && (ballPosition.y > 100 || ballPosition.y < -100) && sagout == false && sagaltkorner == false && sagustkorner == false && saggol == false && sagofsayt == false) {
        if (lastplayerballkickteamid == 1) {
            sagout = true;
            room.sendAnnouncement("Sağ Out . Topu sürüklemeden vurun.")
            morethansecondframe = 0;
            topukullanicakolantakim == 2;
            room.setDiscProperties(0, {x: 1150, y: 0, xspeed: 0, yspeed: 0});
            topkullanmapozisyonu = {x: 1150, y: 0};
        } else {
            if (ballPosition.y > 100) {
                sagaltkorner = true;
                room.sendAnnouncement("Sağ alt korner. Topu sürüklemeden vurun.")
                morethansecondframe = 0;
                topukullanicakolantakim == 1;
                room.setDiscProperties(0, {x: 1200, y: 600, xspeed: 0, yspeed: 0});
                topkullanmapozisyonu = {x: 1200, y: 600};
            }
            if (ballPosition.y < -100) {
                sagustkorner = true;
                room.sendAnnouncement("Sağ üst korner. Topu sürüklemeden vurun.")
                morethansecondframe = 0;
                topukullanicakolantakim == 1;
                room.setDiscProperties(0, {x: 1200, y: -600, xspeed: 0, yspeed: 0});
                topkullanmapozisyonu = {x: 1200, y: -600};
            }
        }
    }

    if (ballPosition.y > 600 && alttac == false && solaltkorner == false && solustkorner == false && solout == false && sagout == false && sagaltkorner == false && sagustkorner == false && solofsayt == false && sagofsayt == false) {

        room.setDiscProperties(0, {x: ballPosition.x, y: 600, xspeed: 0, yspeed: 0});

        alttac = true;
        solofsaytkontrol=false;
        solofsaytkontrolplayerlist=[];
        sagofsaytkontrolplayerlist=[];
        sagofsaytkontrol=false;
        solofsaytkontrolframe=0;
        sagofsaytkontrolframe=0;
        morethansecondframe = 0;
        topkullanmapozisyonu = {x: ballPosition.x, y: 600};
        //room.sendAnnouncement("Ball Positionx "+topkullanmapozisyonu.x+" Ball Positiony "+topkullanmapozisyonu.y);
        if (lastplayerballkickteamid == 1) {
            topukullanicakolantakim = 2;

        }
        if (lastplayerballkickteamid == 2) {
            topukullanicakolantakim = 1;
        }
        if (topukullanicakolantakim == 1) {
            room.sendAnnouncement("Alt taç kullanılacak. Topu kullanan takım kırmızı. Topu sürüklemeden vurun.")
        } else {
            room.sendAnnouncement("Alt taç kullanılacak. Topu kullanan takım mavi. Topu sürüklemeden vurun.")
        }

    }
    if (ballPosition.y < -600 && usttac == false && solaltkorner == false && solustkorner == false && solout == false && sagout == false && sagaltkorner == false && sagustkorner == false && solofsayt == false && sagofsayt == false) {
        room.setDiscProperties(0, {x: ballPosition.x, y: -600, xspeed: 0, yspeed: 0});
        usttac = true;
        solofsaytkontrol=false;
        sagofsaytkontrol=false;
        solofsaytkontrolplayerlist=[];
        sagofsaytkontrolplayerlist=[];
        solofsaytkontrolframe=0;
        sagofsaytkontrolframe=0;
        morethansecondframe = 0;
        topkullanmapozisyonu = {x: ballPosition.x, y: -600};
        if (lastplayerballkickteamid == 1) {
            topukullanicakolantakim = 2;

        }
        if (lastplayerballkickteamid == 2) {
            topukullanicakolantakim = 1;
        }
        if (topukullanicakolantakim == 1) {
            room.sendAnnouncement("Üst taç kullanılacak. Topu kullanan takım kırmızı. Topu sürüklemeden vurun.")
        } else {
            room.sendAnnouncement("Üst taç kullanılacak. Topu kullanan takım mavi.Topu sürüklemeden vurun.")
        }
    }
    if (solout == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 2) {
                var xspeed = room.getPlayerDiscProperties(players[i].id).xspeed;
                if (players[i].position.x + xspeed < -800) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: -750,
                        y: players[i].position.y,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (solustkorner == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 1) {
                var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                if (players[i].position.y + yspeed < -400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: players[i].position.x,
                        y: -390,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (solaltkorner == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 1) {
                var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                if (players[i].position.y + yspeed > 400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: players[i].position.x,
                        y: 390,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (solofsayt == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 2) {
                var xspeed = room.getPlayerDiscProperties(players[i].id).xspeed;
                if (players[i].position.x + xspeed < topkullanmapozisyonu.x + 400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: topkullanmapozisyonu.x + 410,
                        y: players[i].position.y,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (sagofsayt == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 1) {
                var xspeed = room.getPlayerDiscProperties(players[i].id).xspeed;
                if (players[i].position.x + xspeed > topkullanmapozisyonu.x - 400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: topkullanmapozisyonu.x - 410,
                        y: players[i].position.y,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (sagustkorner == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 2) {
                var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                if (players[i].position.y + yspeed < -400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: players[i].position.x,
                        y: -390,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (sagaltkorner == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 2) {
                var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                if (players[i].position.y + yspeed > 400) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: players[i].position.x,
                        y: 390,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (sagout == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        for (let i = 0; i < players.length; i++) {
            if (players[i] != null && players[i].team == 1) {
                var xspeed = room.getPlayerDiscProperties(players[i].id).xspeed;
                if (players[i].position.x + xspeed > 800) {
                    room.setPlayerDiscProperties(players[i].id, {
                        x: 750,
                        y: players[i].position.y,
                        xspeed: 0,
                        yspeed: 0
                    });
                }
            }
        }

        morethansecondframe++;
    }
    if (alttac == true) {

        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            //room.sendAnnouncement(distance+" distance")
            if (topukullanicakolantakim == 1) {
                topukullanicakolantakim = 2;
                room.sendAnnouncement("Taçı kullanacak takım kırmızıdan mavi oldu. Topu sürüklemeden vurun")

            } else {
                topukullanicakolantakim = 1;
                room.sendAnnouncement("Taçı kullanacak takım maviden kırmızı oldu. Topu sürüklemeden vurun")
            }
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }
        if (topukullanicakolantakim == 1) {
            for (let i = 0; i < players.length; i++) {
                if (players[i] != null && players[i].team == 2) {
                    var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                    if (players[i].position.y + yspeed > 400) {
                        room.setPlayerDiscProperties(players[i].id, {
                            x: players[i].position.x,
                            y: 390,
                            xspeed: 0,
                            yspeed: 0
                        });
                    }
                }
            }
        }
        if (topukullanicakolantakim == 2) {
            for (let i = 0; i < players.length; i++) {
                if (players[i] != null && players[i].team == 1) {
                    var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                    if (players[i].position.y + yspeed > 400) {
                        room.setPlayerDiscProperties(players[i].id, {
                            x: players[i].position.x,
                            y: 390,
                            xspeed: 0,
                            yspeed: 0
                        });
                    }
                }
            }
        }
        morethansecondframe++;
    }
    if (usttac == true) {
        var distance = pointDistance(topkullanmapozisyonu, ballPosition);
        if (distance > 3 && morethansecondframe > 60) {
            //room.sendAnnouncement(distance+" distance")
            if (topukullanicakolantakim == 1) {
                topukullanicakolantakim = 2;
                room.sendAnnouncement("Taçı kullanacak takım kırmızıdan mavi oldu. Topu sürüklemeden vurun")
            } else {
                topukullanicakolantakim = 1;
                room.sendAnnouncement("Taçı kullanacak takım maviden kırmızı oldu. Topu sürüklemeden vurun")
            }
            room.setDiscProperties(0, {x: topkullanmapozisyonu.x, y: topkullanmapozisyonu.y, xspeed: 0, yspeed: 0});
            morethansecondframe = 0;
            //room.sendAnnouncement("topukullanantakim "+topukullanicakolantakim)
        }

        if (topukullanicakolantakim == 1) {
            for (let i = 0; i < players.length; i++) {
                if (players[i] != null && players[i].team == 2) {
                    var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                    if (players[i].position.y + yspeed < -400) {
                        room.setPlayerDiscProperties(players[i].id, {
                            x: players[i].position.x,
                            y: -390,
                            xspeed: 0,
                            yspeed: 0
                        });
                    }
                }
            }
        }
        if (topukullanicakolantakim == 2) {
            for (let i = 0; i < players.length; i++) {
                if (players[i] != null && players[i].team == 1) {
                    var yspeed = room.getPlayerDiscProperties(players[i].id).yspeed;
                    if (players[i].position.y + yspeed < -400) {
                        room.setPlayerDiscProperties(players[i].id, {
                            x: players[i].position.x,
                            y: -390,
                            xspeed: 0,
                            yspeed: 0
                        });
                    }
                }
            }
        }
        morethansecondframe++;
    }
    var ballRadius = 10;
    var playerRadius = 15;
    var triggerDistance = ballRadius + playerRadius + 0.02;

    for (var i = 0; i < players.length; i++) { // Iterate over all the players
        var player = players[i];
        if (player.position == null) continue; // Skip players that don't have a position

        var distanceToBall = pointDistance(player.position, ballPosition);
        var hadTouchedTheBall = playersThatTouchedTheBall.has(player.id);

        // This check is here so that the event is only notified the first game tick in which the player is touching the ball.
        if (!hadTouchedTheBall) {
            if (distanceToBall < triggerDistance) {
                //room.sendAnnouncement(player.name + " topa dokundu");
                lastplayerballkickteamid = player.team;
                lasttouchedplayer = player;
                playersThatTouchedTheBall.add(player.id);
            }
        } else {
            // If a player that had touched the ball moves away from the ball remove him from the set to allow the event to be notified again.
            if (distanceToBall > triggerDistance + 4) {
                playersThatTouchedTheBall.delete(player.id);
            }
        }
    }

    for (let i = 0; i < playersarray.length; i++) {
        var player=players.find(element => element.id == playersarray[i].id);
        if(player!=null&&playersarray[i]!=null){
            if(player.position!=null&&playersarray[i].position!=null){
                if( pointDistance(playersarray[i].position,player.position)<2){
                    if(!player.admin){
                        sameframeinsameposition[i]=sameframeinsameposition[i]+1;
                    }
                    //room.sendAnnouncement(player.name+" "+sameframeinsameposition[i]+" kadar sürdü");
                }
                else{
                    sameframeinsameposition[i]=0;
                }

                playersarray[i].position=player.position;
            }
            else{
                playersarray[i].position=player.position;
            }

        }

    }

    for (let i = playersarray.length-1; i > -1; i--) {
        if(sameframeinsameposition[i]>1800){
            room.kickPlayer(playersarray[i].id, "30 saniye afk kalırsan kicklenirsin", false);
        }
    }
}

function handleGameStart() {
    playersThatTouchedTheBall.clear();
    alttac = false;
    usttac = false;
    solout = false;
    solustkorner = false;
    solaltkorner = false;
    sagout = false;
    sagustkorner = false;
    sagaltkorner = false;
    saggol = false;
    solgol = false;
    sagofsayt=false;
    sagofsaytkontrolplayerlist=[];
    sagofsaytkontrol=false;
    sagofsaytkontrolframe=0;
    solofsayt=false;
    solofsaytkontrolplayerlist=[];
    solofsaytkontrol=false;
    solofsaytkontrolframe=0;
}


room.onPlayerJoin = function (player) {
    room.sendAnnouncement(player.name + " Odaya Girdi");
    if (room.getPlayerList().length == maxPlayers) { //For noPlayer:true
        if (admins.includes(player.name) == false) {
            room.kickPlayer(player.id, "The last slot is for the administrators.", false);
        }
    }

    if (room.getPlayerList().length == maxPlayers + 1) { //For noPlayer:false. +1 Because of the host admin.
        if (admins.includes(player.name) == false) {
            room.kickPlayer(player.id, "The last slot is for the administrators.", false);
        }

    }
    if (admins.includes(player.name) == true && admincount < 1) {
        room.setPlayerAdmin(player.id, true);
        admincount++;
    }
    playersarray.push(player);
    sameframeinsameposition.push(0);
};
room.onPlayerLeave=function (player){
    for (let i = 0; i < playersarray.length; i++) {
        if(player.id==playersarray[i].id){
            playersarray.splice(i,1);
            sameframeinsameposition.splice(i,1);
        }
    }
}
room.onPlayerBallKick = function (player) {
    lastplayerballkickteamid = player.team;
    lasttouchedplayer = player;
    var players = room.getPlayerList();

    if (lastplayerballkickteamid == 1) {
        var maxx = 0;
        if(player.position.x>0){
            maxx=player.position.x;
        }
        var sonkalecix = 0;
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 2 && players[i].position.x > sonkalecix) {
                sonkalecix = players[i].position.x;
            }
        }
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 2 && players[i].position.x > maxx && players[i].position.x < sonkalecix) {
                maxx = players[i].position.x;
            }
        }
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 1 && players[i].id != lasttouchedplayer.id && players[i].position.x > maxx) {
                sagofsaytkontrol = true;
                sagofsaytkontrolplayerlist.push(players[i].id);
                //room.sendAnnouncement("Kırmızı takım ofsayt kontrole alındı" + players[i].name + " Son dokunan adam " + lasttouchedplayer.name);
            }
        }
    }
    if (lastplayerballkickteamid == 2) {
        var maxx = 0;
        if(player.position.x<0){
            maxx=player.position.x;
        }
        var sonkalecix = 0;
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 1 && players[i].position.x < sonkalecix) {
                sonkalecix = players[i].position.x;
            }
        }
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 1 && players[i].position.x < maxx && players[i].position.x > sonkalecix) {
                maxx = players[i].position.x;
            }
        }
        for (let i = 0; i < players.length; i++) {
            if (players[i].team == 2 && players[i].id != lasttouchedplayer.id && players[i].position.x < maxx) {
                solofsaytkontrol = true;
                solofsaytkontrolplayerlist.push(players[i].id);
                //room.sendAnnouncement("Mavi takım ofsayt kontrole alındı" + players[i].name + " Son dokunan adam " + lasttouchedplayer.name);
            }
        }
    }
    if (solout == true || sagout == true || solaltkorner == true || solustkorner == true || sagaltkorner == true || sagustkorner == true || sagofsayt == true || solofsayt == true) {
        var ballproperties = room.getDiscProperties(0);
        room.setDiscProperties(0, {
            x: ballproperties.x,
            y: ballproperties.y,
            xspeed: ballproperties.xspeed * 1.5,
            yspeed: ballproperties.yspeed * 1.5
        });
    }
    if(alttac==true||usttac==true){
        solofsaytkontrol=false;
        solofsaytkontrolplayerlist=[];
        sagofsaytkontrol=false;
        sagofsaytkontrolplayerlist=[];
        solofsaytkontrolframe=0;
        sagofsaytkontrolframe=0;
    }
    alttac = false;
    usttac = false;
    solout = false;
    solustkorner = false;
    solaltkorner = false;
    sagout = false;
    sagustkorner = false;
    sagaltkorner = false;
    sagofsayt = false;
    solofsayt = false;
    // room.sendAnnouncement("topasondokunan takim " + lastplayerballkickteamid);
}
room.onGameTick = handleGameTick;
room.onGameStart = handleGameStart;
room.onTeamGoal = function (team) {
    if (solgol == true) {
        room.sendAnnouncement("Mavi takım gol attı");
    }
    if (saggol == true) {
        room.sendAnnouncement("Kırmızı takım gol attı");
    }
    solofsayt=false;
    sagofsayt=false;
    solofsaytkontrol=false;
    sagofsaytkontrol=false;
    solofsaytkontrolplayerlist=[];
    sagofsaytkontrolplayerlist=[];
    solofsaytkontrolframe=0;
    sagofsaytkontrolframe=0;
    framesecondaftergoal = 0;
}
room.onPlayerChat = function (player, message) {
    if (chatmessages.has(message) && !izinlimesajlar.has(message) && !player.admin) {
        room.kickPlayer(player.id, "Spam yapma kardeşim", false);
    }
    chatmessages.add(message);
    if (chatmessages.size > 6) {
        var it = chatmessages.values();
//get first entry:
        var first = it.next();
//get value out of the iterator entry:
        var value = first.value;
        chatmessages.delete(value)
        //room.sendAnnouncement(chatmessages.size+" Toplam hafizadaki chat sayisi");
    }
}
