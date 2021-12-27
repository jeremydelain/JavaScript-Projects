function Dictionary() {
    var Player = {
        Name: "Davante Adams",
        Position: "WR",
        Height: "6-1",
        Weight: "215",
        Team: "Green Bay Packers",
        Receptions: 96,
        Yards: 1248
    };
    delete Player.Yards;
    document.getElementById("Dictionary").innerHTML = Player.Yards;
}