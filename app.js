const team = {
  _players:[
    {firstName: 'Cailin', lastName: 'Taco', age: 10},
    {firstName: 'Papa', lastName: 'Nacho', age: 55},
    {firstName: 'Mama', lastName: 'Salsa',age: 40},
  ],

  _games:[
    {opponent:'Pasta', teamPoints:2, opponentPoints:7},
    {opponent:'Pizza', teamPoints:4, opponentPoints:2},
    {opponent:'Burger',teamPoints:5,opponentPoints:1}
  ],

  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },

  addPlayer(firstName, lastName, age){
    let player ={
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },

  addGame(oppName, points, oppPoints){
    const game={
      opponent: oppName,
      points: points,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }
};

team.addPlayer("Banana", "Split", 15);
team.addPlayer("IceCream", "Sundae", 10);
team.addPlayer("Milk", "Shake", 7);

team.addGame("carb", 22, 4);
team.addGame("veggie", 28, 6);
team.addGame("protein", 1, 15);

console.log(team.players);
console.log(team.games);