import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Overcooked level randomizer';

  overcooked_maps = [
    //Overcooked
    ["Game", "Overcooked"], ["1", 6],
    ["Game", "Overcooked"], ["2", 4],
    ["Game", "Overcooked"], ["3", 4],
    ["Game", "Overcooked"], ["4", 4],
    ["Game", "Overcooked"], ["5", 6],
    ["Game", "Overcooked"], ["6", 4],
    ["Game", "Overcooked"], ["Final Boss", 1],

    //Overcooked: DLC -> The Lost Morsel
    ["DLC", "Overcooked", "The Lost Morsel"], ["1", 6],

    //Overcooked 2
    ["Game", "Overcooked 2"], ["1", 6],
    ["Game", "Overcooked 2"], ["2", 6],
    ["Game", "Overcooked 2"], ["3", 6],
    ["Game", "Overcooked 2"], ["4", 6],
    ["Game", "Overcooked 2"], ["5", 6],
    ["Game", "Overcooked 2"], ["6", 6],
    ["Game", "Overcooked 2"], ["Kevin", 8],
    
    //Overcooked 2: DLC -> Surf 'n' Turf
    ["DLC", "Overcooked 2", "Surf 'n' Turf"], ["1", 4],
    ["DLC", "Overcooked 2", "Surf 'n' Turf"], ["2", 4],
    ["DLC", "Overcooked 2", "Surf 'n' Turf"], ["3", 4],
    ["DLC", "Overcooked 2", "Surf 'n' Turf"], ["Kevin", 1],

    //Overcooked 2: DLC -> Kevin's Christmas
    ["DLC", "Overcooked 2", "Kevin's Christmas"], ["1", 5],

    //Overcooked 2: DLC -> Chinese New Year
    ["DLC", "Overcooked 2", "Chinese New Year"], ["1", 7],

    //Overcooked 2: DLC -> Campfire Cook Off
    ["DLC", "Overcooked 2", "Campfire: Cook Off"], ["1", 4],
    ["DLC", "Overcooked 2", "Campfire: Cook Off"], ["2", 4],
    ["DLC", "Overcooked 2", "Campfire: Cook Off"], ["3", 4],
    ["DLC", "Overcooked 2", "Campfire: Cook Off"], ["Kevin", 3],

    //Overcooked 2: DLC -> Night of the Hangry Horde
    ["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["1", 3],
    ["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["2", 3],
    ["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["3", 3],
    ["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["Horde", 8],
    ["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["Kevin", 3],

    //Overcooked 2: DLC -> Carnival of Chaos
    ["DLC", "Overcooked 2", "Carnival of Chaos"], ["1", 4],
    ["DLC", "Overcooked 2", "Carnival of Chaos"], ["2", 4],
    ["DLC", "Overcooked 2", "Carnival of Chaos"], ["3", 4],
    ["DLC", "Overcooked 2", "Carnival of Chaos"], ["Kevin", 3],

    //Overcooked 2: DLC -> Winter Wonderland
    ["DLC", "Overcooked 2", "Winter Wonderland"], ["1", 3],
    ["DLC", "Overcooked 2", "Winter Wonderland"], ["Horde", 2],

    //Overcooked 2: DLC -> Spring Festival
    ["DLC", "Overcooked 2", "Spring Festival"], ["1", 5],

    //Overcooked 2: DLC -> Sun's Out Buns Out
    ["DLC", "Overcooked 2", "Sun's Out Buns Out"], ["1", 5],

    //Overcooked 2: DLC -> Festive Seasoning
    ["DLC", "Overcooked 2", "Festive Seasoning"], ["1", 8],

    //Overcooked 2: DLC -> Moon Harvest Festival
    ["DLC", "Overcooked 2", "Moon Harvest Festival"], ["1", 5],

    //Overcooked All You Can Eat: DLC -> The Ever Peckish Rises
    ["DLC", "Overcooked All You Can Eat", "The Ever Peckish Rises"], ["1", 3],
    ["DLC", "Overcooked All You Can Eat", "The Ever Peckish Rises"], ["2", 4],

    //Overcooked All You Can Eat: DLC -> The Overcooked Birthday Party
    ["DLC", "Overcooked All You Can Eat", "The Overcooked Birthday Party"], ["1", 5],

    //Overcooked All You Can Eat: DLC -> The World Food Festival
    ["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["1", 3],
    ["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["2", 3],
    ["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["3", 4],
  ];
}
