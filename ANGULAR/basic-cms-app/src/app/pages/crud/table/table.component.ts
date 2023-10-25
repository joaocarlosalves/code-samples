import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-table',
  templateUrl: './table.component.html'
})
export class CrudTableComponent implements OnInit {
  people = {
    headers: [
      { text: 'ID', id: 'id' },
      { text: 'Data', id: 'date', date: true },
      { text: 'Name', id: 'name' },
      { text: 'Age', id: 'age' },
      { text: 'Country', id: 'country' },
      { text: 'Job', id: 'job' },
      { text: 'Best Movie', id: 'movie' },
      { text: 'Favorite Sport', id: 'sport' },
      { text: 'Game', id: 'game' },
      { text: 'Animal', id: 'animal' }
    ],
    cells: [
      { id: 1,  date: new Date('2019/01/20').toLocaleDateString('en-us'), name: 'Sandra', age: 27, country: 'Argentina', job: 'Plane Pilot', movie: 'Titanic', sport: 'Swimming', game: 'Sonic', animal: 'Hamster' },
      { id: 2,  date: new Date('2021/02/21').toLocaleDateString('en-us'), name: 'Amanda', age: 31, country: 'Brazil', job: 'Designer', movie: 'Interstellar', sport: 'Soccer', game: 'Minecraft', animal: 'Cat' },
      { id: 3,  date: new Date('2022/03/22').toLocaleDateString('en-us'), name: 'Desireé', age: 19, country: 'Venezuela', job: 'Web Developer', movie: 'Lord Of The Rings', sport: 'Tennis', game: 'Pac Man', animal: 'Dog' },
      { id: 4,  date: new Date('2011/11/11').toLocaleDateString('en-us'), name: 'Claudia', age: 25, country: 'USA', job: 'Lawyer', movie: 'Home Alone 2', sport: 'Volleyball', game: 'Street Fighter 2', animal: 'Gold Fish' },
      { id: 5,  date: new Date('2022/09/04').toLocaleDateString('en-us'), name: 'Peter', age: 62, country: 'Germany', job: 'Writer', movie: 'Catch Me If You Can', sport: 'Weightlifting', game: 'Super Mario Bros', animal: 'Gold Retriever' },
      { id: 6,  date: new Date('2020/01/20').toLocaleDateString('en-us'), name: 'Vivianne', age: 36, country: 'Italy', job: 'Bus Driver', movie: 'The God Father', sport: 'Darts', game: 'Zaxxon', animal: 'Betta Fish' },
      { id: 7,  date: new Date('2022/09/17').toLocaleDateString('en-us'), name: 'Jessica', age: 40, country: 'South Africa', job: 'Musician', movie: 'Toy Story', sport: 'Rugby', game: 'OutRun', animal: 'Bear' },
      { id: 8,  date: new Date('2021/01/13').toLocaleDateString('en-us'), name: 'Walter', age: 70, country: 'Congo', job: 'Retired', movie: 'Citizen Kane', sport: 'Bowling', game: 'None', animal: 'Lion' },
      { id: 9,  date: new Date('2022/08/27').toLocaleDateString('en-us'), name: 'Rebecca', age: 51, country: 'England', job: 'Manager', movie: 'Weekend at Bernies', sport: 'Football', game: 'Legend of Zelda', animal: 'Monkey' },
      { id: 10, date: new Date('2021/03/05').toLocaleDateString('en-us'), name: 'Hanna', age: 26, country: 'Canada', job: 'Actrees', movie: 'Harry Potter', sport: 'Cricket', game: 'GTA', animal: 'Canary' },
      { id: 11, date: new Date('2019/04/20').toLocaleDateString('en-us'), name: 'Betty', age: 55, country: 'Denmark', job: 'Code Teacher', movie: 'Citizen Kane', sport: 'Handball', game: 'None', animal: 'Lion' },
      { id: 12, date: new Date('2021/02/10').toLocaleDateString('en-us'), name: 'Philipe', age: 33, country: 'Mexico', job: 'Product Owner', movie: 'Driver', sport: 'Beach Tennis', game: 'Driver 3', animal: 'Parrot' },
      { id: 13, date: new Date('2021/01/16').toLocaleDateString('en-us'), name: 'Anderson', age: 18, country: 'Spain', job: 'Judge', movie: 'Star Wars', sport: 'Indoor Soccer', game: 'Final Fantasy', animal: 'Ants' },
      { id: 14, date: new Date('2022/02/28').toLocaleDateString('en-us'), name: 'George', age: 28, country: 'Spain', job: 'Actor', movie: 'Star Trek', sport: 'e-games', game: 'Final Fight', animal: 'Bat' },
      { id: 15, date: new Date('2021/02/23').toLocaleDateString('en-us'), name: 'Mark', age: 21, country: 'Suiss', job: 'Car Driver', movie: 'Iron Man', sport: 'House Cleaner', game: 'Dragon Quest', animal: 'Bees' },
      { id: 16, date: new Date('2019/12/10').toLocaleDateString('en-us'), name: 'Earl', age: 25, country: 'Finland', job: 'Studant', movie: 'Ace Ventura 2', sport: 'Handball', game: 'The Witcher 3', animal: 'Zebra' },
      { id: 17, date: new Date('2022/02/23').toLocaleDateString('en-us'), name: 'Mika', age: 30, country: 'Colombia', job: 'Soldier', movie: 'War Games', sport: 'Running', game: 'Counter Strike', animal: 'Cat' },
      { id: 18, date: new Date('2020/12/31').toLocaleDateString('en-us'), name: 'Teddy', age: 22, country: 'Philippines', job: 'Muay Thai Teacher', movie: 'Mortal Kombat', sport: 'Soccer', game: 'Virtua Racing', animal: 'Raccoon' },
      { id: 19, date: new Date('2020/02/24').toLocaleDateString('en-us'), name: 'Yuki', age: 42, country: 'Japan', job: 'TV Producer', movie: 'Spider Man 3', sport: 'Basketball', game: 'Mortal Kombat', animal: 'Tarantula' },
      { id: 20, date: new Date('2021/05/10').toLocaleDateString('en-us'), name: 'Leena', age: 57, country: 'China', job: 'School Teacher', movie: 'The Hobbit', sport: 'Chess', game: 'Space Invaders', animal: 'Lizard' }
    ],
    pages: 8
  }

  ngOnInit(): void {
    //console.log(this.people)
  }
}
