import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private fb: FormBuilder, private storageService: StorageService, private authService: AuthService) {}

  title = 'Overcooked level randomizer';

  //We create all levels, separated by game or DLC
  overcooked_levels:any = [
    //Overcooked
    [["Game", "Overcooked"], ["1", 6], "normal"],
    [["Game", "Overcooked"], ["2", 4], "normal"],
    [["Game", "Overcooked"], ["3", 4], "normal"],
    [["Game", "Overcooked"], ["4", 4], "normal"],
    [["Game", "Overcooked"], ["5", 6], "normal"],
    [["Game", "Overcooked"], ["6", 4], "normal"],
    [["Game", "Overcooked"], ["Final Boss (Meatball)", 1], "final boss"],
  ];

  overcooked_dlc_levels:any = [
    //Overcooked: DLC -> The Lost Morsel
    [["DLC", "Overcooked", "The Lost Morsel"], ["1", 6], "normal"],
    
    //Overcooked 2: DLC -> Festive Seasoning
    [["DLC", "Overcooked 2", "Festive Seasoning"], ["1", 8], "normal"],
  ];

  overcooked_dlc_names:any = ["The Lost Morsel", "Festive Seasoning"];

  overcooked_2_levels:any = [
    //Overcooked 2
    [["Game", "Overcooked 2"], ["1", 6], "normal"],
    [["Game", "Overcooked 2"], ["2", 6], "normal"],
    [["Game", "Overcooked 2"], ["3", 6], "normal"],
    [["Game", "Overcooked 2"], ["4", 6], "normal"],
    [["Game", "Overcooked 2"], ["5", 6], "normal"],
    [["Game", "Overcooked 2"], ["6", 5], "normal"],
    [["Game", "Overcooked 2"], ["Final Boss (6-6)", 1], "final boss"],
    [["Game", "Overcooked 2"], ["Kevin", 8], "kevin"]
  ];

  overcooked_2_dlc_levels:any = [
    //Overcooked 2: DLC -> Surf 'n' Turf
    [["DLC", "Overcooked 2", "Surf 'n' Turf"], ["1", 4], "normal"],
    [["DLC", "Overcooked 2", "Surf 'n' Turf"], ["2", 4], "normal"],
    [["DLC", "Overcooked 2", "Surf 'n' Turf"], ["3", 4], "normal"],
    [["DLC", "Overcooked 2", "Surf 'n' Turf"], ["Kevin", 1], "kevin"],

    //Overcooked 2: DLC -> Kevin's Christmas
    [["DLC", "Overcooked 2", "Kevin's Christmas"], ["1", 5], "normal"],

    //Overcooked 2: DLC -> Chinese New Year
    [["DLC", "Overcooked 2", "Chinese New Year"], ["1", 7], "normal"],

    //Overcooked 2: DLC -> Campfire: Cook Off
    [["DLC", "Overcooked 2", "Campfire: Cook Off"], ["1", 4], "normal"],
    [["DLC", "Overcooked 2", "Campfire: Cook Off"], ["2", 4], "normal"],
    [["DLC", "Overcooked 2", "Campfire: Cook Off"], ["3", 4], "normal"],
    [["DLC", "Overcooked 2", "Campfire: Cook Off"], ["Kevin", 3], "kevin"],

    //Overcooked 2: DLC -> Night of the Hangry Horde
    [["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["1", 3], "normal"],
    [["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["2", 3], "normal"],
    [["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["3", 3], "normal"],
    [["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["Horde", 8], "horde"],
    [["DLC", "Overcooked 2", "Night of the Hangry Horde"], ["Kevin", 3], "kevin"],

    //Overcooked 2: DLC -> Carnival of Chaos
    [["DLC", "Overcooked 2", "Carnival of Chaos"], ["1", 4], "normal"],
    [["DLC", "Overcooked 2", "Carnival of Chaos"], ["2", 4], "normal"],
    [["DLC", "Overcooked 2", "Carnival of Chaos"], ["3", 4], "normal"],
    [["DLC", "Overcooked 2", "Carnival of Chaos"], ["Kevin", 3], "kevin"],

    //Overcooked 2: DLC -> Winter Wonderland
    [["DLC", "Overcooked 2", "Winter Wonderland"], ["1", 3], "normal"],
    [["DLC", "Overcooked 2", "Winter Wonderland"], ["Horde", 2], "horde"],

    //Overcooked 2: DLC -> Spring Festival
    [["DLC", "Overcooked 2", "Spring Festival"], ["1", 5], "normal"],

    //Overcooked 2: DLC -> Sun's Out Buns Out
    [["DLC", "Overcooked 2", "Sun's Out Buns Out"], ["1", 5], "normal"],

    //Overcooked 2: DLC -> Moon Harvest Festival
    [["DLC", "Overcooked 2", "Moon Harvest Festival"], ["1", 5], "normal"],
  ];

  overcooked_2_dlc_names:any = ["Surf 'n' Turf", "Kevin's Christmas", "Chinese New Year", "Campfire: Cook Off", "Night of the Hangry Horde", "Carnival of Chaos", "Winter Wonderland", "Spring Festival", "Sun's Out Buns Out", "Moon Harvest Festival"];

  overcooked_ayce_dlc_levels:any = [
    //Overcooked All You Can Eat: DLC -> The Ever Peckish Rises
    [["DLC", "Overcooked All You Can Eat", "The Ever Peckish Rises"], ["1", 3], "normal"],
    [["DLC", "Overcooked All You Can Eat", "The Ever Peckish Rises"], ["2", 4], "normal"],

    //Overcooked All You Can Eat: DLC -> The Overcooked Birthday Party
    [["DLC", "Overcooked All You Can Eat", "The Overcooked Birthday Party"], ["1", 5], "normal"],

    //Overcooked All You Can Eat: DLC -> The World Food Festival
    [["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["1", 3], "normal"],
    [["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["2", 3], "normal"],
    [["DLC", "Overcooked All You Can Eat", "The World Food Festival"], ["3", 4], "normal"],
  ];

  overcooked_ayce_dlc_names:any = ["The Ever Peckish Rises", "The Overcooked Birthday Party", "The World Food Festival"];

  ngOnInit(): void {
    let auxArray:any = [];

    //Overcooked
    for (let i = 0; i < this.overcooked_levels.length; i++) {
      let count:any = this.overcooked_levels[i][1][1];

      for (let j = 0; j < count; j++) {
        auxArray.push([this.overcooked_levels[i][0], "" + this.overcooked_levels[i][1][0] + "-" + (j + 1), this.overcooked_levels[i][2]]);
      }
    }
    this.overcooked_levels = auxArray;
    auxArray = [];

    //Overcooked DLCs
    for (let i = 0; i < this.overcooked_dlc_levels.length; i++) {
      let count:any = this.overcooked_dlc_levels[i][1][1];

      for (let j = 0; j < count; j++) {
        auxArray.push([this.overcooked_dlc_levels[i][0], "" + this.overcooked_dlc_levels[i][1][0] + "-" + (j + 1), this.overcooked_dlc_levels[i][2]]);
      }
    }
    this.overcooked_dlc_levels = auxArray;
    auxArray = [];

    //Overcooked 2
    for (let i = 0; i < this.overcooked_2_levels.length; i++) {
      let count:any = this.overcooked_2_levels[i][1][1];

      for (let j = 0; j < count; j++) {
        auxArray.push([this.overcooked_2_levels[i][0], "" + this.overcooked_2_levels[i][1][0] + "-" + (j + 1), this.overcooked_2_levels[i][2]]);
      }
    }
    this.overcooked_2_levels = auxArray;
    auxArray = [];

    //Overcooked 2 DLCs
    for (let i = 0; i < this.overcooked_2_dlc_levels.length; i++) {
      let count:any = this.overcooked_2_dlc_levels[i][1][1];

      for (let j = 0; j < count; j++) {
        auxArray.push([this.overcooked_2_dlc_levels[i][0], "" + this.overcooked_2_dlc_levels[i][1][0] + "-" + (j + 1), this.overcooked_2_dlc_levels[i][2]]);
      }
    }
    this.overcooked_2_dlc_levels = auxArray;
    auxArray = [];

    //Overcooked All You Can Eat DLCs
    for (let i = 0; i < this.overcooked_ayce_dlc_levels.length; i++) {
      let count:any = this.overcooked_ayce_dlc_levels[i][1][1];

      for (let j = 0; j < count; j++) {
        auxArray.push([this.overcooked_ayce_dlc_levels[i][0], "" + this.overcooked_ayce_dlc_levels[i][1][0] + "-" + (j + 1), this.overcooked_ayce_dlc_levels[i][2]]);
      }
    }
    this.overcooked_ayce_dlc_levels = auxArray;
    auxArray = [];

    this.initializeData();
  }

  content_list:string[] = [];
  overcooked_dlc_content_list:string[] = [];
  overcooked_dlc_content_list_opened = false;
  overcooked_2_dlc_content_list:string[] = [];
  overcooked_2_dlc_content_list_opened = false;
  overcooked_ayce_dlc_content_list:string[] = [];
  overcooked_ayce_dlc_content_list_opened = false;

  toggleSelectAll_overcooked_dlcs:string = "Select all";
  toggleSelectAll_overcooked_2_dlcs:string = "Select all";
  toggleSelectAll_overcooked_ayce_dlcs:string = "Select all";

  toggleMessage(content: string) {
    switch(content) {
      case "overcooked_dlcs": {
        if (this.overcooked_dlc_content_list.length > 0) {
          this.toggleSelectAll_overcooked_dlcs = "Remove all";
        } else {
          this.toggleSelectAll_overcooked_dlcs = "Select all";
        }
        break;
      }
      case "overcooked_2_dlcs": {
        if (this.overcooked_2_dlc_content_list.length > 0) {
          this.toggleSelectAll_overcooked_2_dlcs = "Remove all";
        } else {
          this.toggleSelectAll_overcooked_2_dlcs = "Select all";
        }
        break;
      }
      case "overcooked_ayce_dlcs": {
        if (this.overcooked_ayce_dlc_content_list.length > 0) {
          this.toggleSelectAll_overcooked_ayce_dlcs = "Remove all";
        } else {
          this.toggleSelectAll_overcooked_ayce_dlcs = "Select all";
        }
        break;
      }
    }
  }

  /*=============================================
  =            Content generated            =
  =============================================*/
  
  overcooked_levels_result:any = [];
  overcooked_dlc_levels_result:any = [];
  overcooked_2_levels_result:any = [];
  overcooked_2_dlc_levels_result:any = [];
  overcooked_ayce_dlc_levels_result:any = [];

  completed_levels:any = [];

  initializeData() {
    this.authService.getCurrentUserPeticion().subscribe((user) => {
      if (user) {
        this.storageService.getDocumentByAddress(`overcooked-level-randomizer/users/${user?.uid}/lists`).subscribe({
          next: (resp: any) => {
            if (resp) {
              /* We set them as arrays */
              this.overcooked_levels_result = JSON.parse(resp?.overcooked_levels_result);
              this.overcooked_dlc_levels_result = JSON.parse(resp?.overcooked_dlc_levels_result);
              this.overcooked_2_levels_result = JSON.parse(resp?.overcooked_2_levels_result);
              this.overcooked_2_dlc_levels_result = JSON.parse(resp?.overcooked_2_dlc_levels_result);
              this.overcooked_ayce_dlc_levels_result = JSON.parse(resp?.overcooked_ayce_dlc_levels_result);
              this.completed_levels = JSON.parse(resp?.completed_levels);
            }
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    });
  }

  updateLists() {
    if (this.storageService.isLoggedIn()) {
      /* We have to stringify all first since firebase does not allow nested arrays */
      this.storageService.setDocumentByAddress(`overcooked-level-randomizer/users/${this.authService.getCurrentUser()?.uid}/lists`, {
        overcooked_levels_result: JSON.stringify(this.overcooked_levels_result),
        overcooked_dlc_levels_result: JSON.stringify(this.overcooked_dlc_levels_result),
        overcooked_2_levels_result: JSON.stringify(this.overcooked_2_levels_result),
        overcooked_2_dlc_levels_result: JSON.stringify(this.overcooked_2_dlc_levels_result),
        overcooked_ayce_dlc_levels_result: JSON.stringify(this.overcooked_ayce_dlc_levels_result),
        completed_levels: JSON.stringify(this.completed_levels)
      });
    }
  }
  
  /*=====  Final de Content generated  ======*/

  contentEmpty() {
    return !(this.overcooked_levels_result.length <= 0
    && this.overcooked_dlc_levels_result.length <= 0
    && this.overcooked_2_levels_result.length <= 0
    && this.overcooked_2_dlc_levels_result.length <= 0
    && this.overcooked_ayce_dlc_levels_result.length <= 0)
  }

  modifyAllDLCList(content:string) {
    let dlcsIn:string[] = [];

    switch(content) {
      case "overcooked_dlcs": {
        //If there are entries, we put them into an array so we can later remove/add
        for (let i = 0; i < this.overcooked_dlc_names.length; i++) {
          if (this.content_list.includes(this.overcooked_dlc_names[i])) {
            dlcsIn.push(this.overcooked_dlc_names[i]);
          }
        }

        if (dlcsIn.length == 0) {
          //If no entries found, we put all into the content
          for (let i = 0; i < this.overcooked_dlc_names.length; i++) {
            this.content_list.push(this.overcooked_dlc_names[i]);
            this.overcooked_dlc_content_list.push(this.overcooked_dlc_names[i]);
          }
          this.toggleSelectAll_overcooked_dlcs = "Remove all";
        } else {
          //If found, we remove all of this DLC content
          for (let i = 0; i < dlcsIn.length; i++) {
            this.content_list = this.content_list.filter(c => c != dlcsIn[i]);
            this.overcooked_dlc_content_list = this.overcooked_dlc_content_list.filter(c => c != dlcsIn[i]);
          }
          this.toggleSelectAll_overcooked_dlcs = "Select all";
        }
        break;
      }
      case "overcooked_2_dlcs": {
        for (let i = 0; i < this.overcooked_2_dlc_names.length; i++) {
          if (this.content_list.includes(this.overcooked_2_dlc_names[i])) {
            dlcsIn.push(this.overcooked_2_dlc_names[i]);
          }
        }

        if (dlcsIn.length == 0) {
          for (let i = 0; i < this.overcooked_2_dlc_names.length; i++) {
            this.content_list.push(this.overcooked_2_dlc_names[i]);
            this.overcooked_2_dlc_content_list.push(this.overcooked_2_dlc_names[i]);
          }
          this.toggleSelectAll_overcooked_2_dlcs = "Remove all";
        } else {
          for (let i = 0; i < dlcsIn.length; i++) {
            this.content_list = this.content_list.filter(c => c != dlcsIn[i]);
            this.overcooked_2_dlc_content_list = this.overcooked_2_dlc_content_list.filter(c => c != dlcsIn[i]);
          }
          this.toggleSelectAll_overcooked_2_dlcs = "Select all";
        }
        break;
      }
      case "overcooked_ayce_dlcs": {
        for (let i = 0; i < this.overcooked_ayce_dlc_names.length; i++) {
          if (this.content_list.includes(this.overcooked_ayce_dlc_names[i])) {
            dlcsIn.push(this.overcooked_ayce_dlc_names[i]);
          }
        }

        if (dlcsIn.length == 0) {
          for (let i = 0; i < this.overcooked_ayce_dlc_names.length; i++) {
            this.content_list.push(this.overcooked_ayce_dlc_names[i]);
            this.overcooked_ayce_dlc_content_list.push(this.overcooked_ayce_dlc_names[i]);
          }
          this.toggleSelectAll_overcooked_ayce_dlcs = "Remove all";
        } else {
          for (let i = 0; i < dlcsIn.length; i++) {
            this.content_list = this.content_list.filter(c => c != dlcsIn[i]);
            this.overcooked_ayce_dlc_content_list = this.overcooked_ayce_dlc_content_list.filter(c => c != dlcsIn[i]);
          }
          this.toggleSelectAll_overcooked_ayce_dlcs = "Select all";
        }
        break;
      }
    }
  }

  modifyContent(content: string) {
    if (this.content_list.includes(content)) {
      this.content_list = this.content_list.filter(c => c != content);
    } else {
      this.content_list.push(content);
    }
  }

  toggleCompleted(content: string) {
    if (this.completed_levels.includes(content)) {
      this.completed_levels = this.completed_levels.filter((c:string) => c != content);
    } else {
      this.completed_levels.push(content);
    }
    this.updateLists();
  }

  modifyContentDLC(content:string, item: string) {
    switch(content) {
      case "overcooked_dlcs": {
        if (this.content_list.includes(item)) {
          this.content_list = this.content_list.filter(c => c != item);
          this.overcooked_dlc_content_list = this.overcooked_dlc_content_list.filter(c => c != item);
        } else {
          this.content_list.push(item);
          this.overcooked_dlc_content_list.push(item);
        }
        break;
      }
      case "overcooked_2_dlcs": {
        if (this.content_list.includes(item)) {
          this.content_list = this.content_list.filter(c => c != item);
          this.overcooked_2_dlc_content_list = this.overcooked_2_dlc_content_list.filter(c => c != item);
        } else {
          this.content_list.push(item);
          this.overcooked_2_dlc_content_list.push(item);
        }
        break;
      }
      case "overcooked_ayce_dlcs": {
        if (this.content_list.includes(item)) {
          this.content_list = this.content_list.filter(c => c != item);
          this.overcooked_ayce_dlc_content_list = this.overcooked_ayce_dlc_content_list.filter(c => c != item);
        } else {
          this.content_list.push(item);
          this.overcooked_ayce_dlc_content_list.push(item);
        }
        break;
      }
    }
  }

  error_list:string[] = [];

  overcookedForm: FormGroup = this.fb.group({
    num_levels: [, [Validators.required, Validators.min(1), Validators.max(10000000000)]],
    normal_levels: [true],
    kevin_levels: [false],
    horde_levels: [false],
    final_boss_levels: [false],
  });

  setMaxNumLevels() {
    this.overcookedForm.controls['num_levels'].setValue(10000000000);
  }

  clearErrors() {
    this.error_list = [];
  }

  clear() {
    this.content_list = []
    this.overcooked_dlc_content_list = [];
    this.overcooked_2_dlc_content_list = [];
    this.overcooked_ayce_dlc_content_list = [];

    this.content_list = [];
    this.overcooked_dlc_content_list = [];
    this.overcooked_dlc_content_list_opened = false;
    this.overcooked_2_dlc_content_list = [];
    this.overcooked_2_dlc_content_list_opened = false;
    this.overcooked_ayce_dlc_content_list = [];
    this.overcooked_ayce_dlc_content_list_opened = false;
  
    this.toggleSelectAll_overcooked_dlcs = "Select all";
    this.toggleSelectAll_overcooked_2_dlcs = "Select all";
    this.toggleSelectAll_overcooked_ayce_dlcs = "Select all";

    this.overcookedForm.reset({
      'normal_levels': true,
    });

    this.clearErrors();
  }

  reset() {
    this.overcooked_levels_result = [];
    this.overcooked_dlc_levels_result = [];
    this.overcooked_2_levels_result = [];
    this.overcooked_2_dlc_levels_result = [];
    this.overcooked_ayce_dlc_levels_result = [];

    this.usedNames_overcooked_dlcs = [];
    this.usedNames_overcooked_2_dlcs = [];
    this.usedNames_overcooked_ayce_dlcs = [];

    this.completed_levels = [];
  }

  usedNames_overcooked_dlcs:any = [];
  usedNames_overcooked_2_dlcs:any = [];
  usedNames_overcooked_ayce_dlcs:any = [];

  verifyNamesOfDLCs(content:string) {
    //Just return an array with the used names
    switch(content) {
      case "overcooked_dlcs": {
        this.overcooked_dlc_levels_result.forEach((c:any) => {
          if(!this.usedNames_overcooked_dlcs.includes(c[0][2])) {
            this.usedNames_overcooked_dlcs.push(c[0][2]);
          }
        });
        break;
      }
      case "overcooked_2_dlcs": {
        this.overcooked_2_dlc_levels_result.forEach((c:any) => {
          if(!this.usedNames_overcooked_2_dlcs.includes(c[0][2])) {
            this.usedNames_overcooked_2_dlcs.push(c[0][2]);
            console.log(c[0][2]);
          }
        });
        break;
      }
      case "overcooked_ayce_dlcs": {
        this.overcooked_ayce_dlc_levels_result.forEach((c:any) => {
          if(!this.usedNames_overcooked_ayce_dlcs.includes(c[0][2])) {
            this.usedNames_overcooked_ayce_dlcs.push(c[0][2]);
          }
        });
        break;
      }
    }
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  finishLoop = false;

  submit() {
    let fail = false;

    if (this.content_list.length <= 0) {
      fail = true;

      if (!this.error_list.includes("Select at least 1 content.")) {
        this.error_list.push("Select at least 1 content.");
      }
    } else {
      if (this.error_list.includes("Select at least 1 content.")) {
        this.error_list = this.error_list.filter(c => c != "Select at least 1 content.");
      }
    }

    if (
      this.overcookedForm.controls['normal_levels'].value == false
    && this.overcookedForm.controls['kevin_levels'].value == false
    && this.overcookedForm.controls['horde_levels'].value == false
    && this.overcookedForm.controls['final_boss_levels'].value == false
    ) {
      fail = true;

      if (!this.error_list.includes("Select at least a level type (i.e. Normal levels).")) {
        this.error_list.push("Select at least a level type (i.e. Normal levels).");
      }
    } else {
      if (this.error_list.includes("Select at least a level type (i.e. Normal levels).")) {
        this.error_list = this.error_list.filter(c => c != "Select at least a level type (i.e. Normal levels).");
      }
    }

    if (this.overcookedForm.controls['num_levels'].invalid) {
      fail = true;

      if (!this.error_list.includes("Number of levels should be higher than 0.")) {
        this.error_list.push("Number of levels should be higher than 0.");
      }
    } else {
      if (this.error_list.includes("Number of levels should be higher than 0.")) {
        this.error_list = this.error_list.filter(c => c != "Number of levels should be higher than 0.");
      }
    }

    if (fail == true) {
      return;
    }

    //We randomize the levels here
    this.finishLoop = false; //When all levels are randomly displayed
    
    //If user didn't selected those types, we add to array to avoid them
    let skipLevelTypes:string[] = [];
    if (!this.overcookedForm.controls['normal_levels'].value) {
      skipLevelTypes.push("normal");
    }
    if (!this.overcookedForm.controls['kevin_levels'].value) {
      skipLevelTypes.push("kevin");
    }
    if (!this.overcookedForm.controls['horde_levels'].value) {
      skipLevelTypes.push("horde");
    }
    if (!this.overcookedForm.controls['final_boss_levels'].value) {
      skipLevelTypes.push("final boss");
    }

    for (let i = 0; i < this.overcookedForm.controls['num_levels'].value && this.finishLoop == false; i++) {
      let repeatLoop = false;
  
      do {
        let randomNumber = this.random(0, this.content_list.length - 1);
        let content = this.content_list[randomNumber];
  
        if (content == "Overcooked") {
          //We filter not to repeat and reduce our list to needed
          let tempList:any = this.overcooked_levels;
          //We have to compare for the same things with the result list, if not, it's useless
          let resultList:any = this.overcooked_levels_result;
          for (let i = 0; i < skipLevelTypes.length; i++) {
            tempList = tempList.filter((l:any) => l[2] != skipLevelTypes[i]);
            resultList = resultList.filter((l:any) => l[2] != skipLevelTypes[i]);
          }
          //If the array is full, we repeat the loop
          if (resultList.length < tempList.length) {
            //We filter not to repeat
            for (let i = 0; i < this.overcooked_levels_result.length; i++) {
              tempList = tempList.filter((l:any) => l != this.overcooked_levels_result[i]);
            }
            let randomTemp = this.random(0, tempList.length - 1);
            
            //We push the random result
            this.overcooked_levels_result.push(tempList[randomTemp]);
          } else {
            //If it has all the levels, we do not search here anymore until reset
            this.content_list = this.content_list.filter(c => c != content);
            repeatLoop = true;
          }
        }
        if (this.overcooked_dlc_names.includes(content)) {
          //We filter not to repeat and reduce our list to needed
          //To use just levels of this DLC in particular
          let tempList:any = this.overcooked_dlc_levels.filter((l:any) => l[0][2] == content);
          //We have to compare for the same things with the result list, if not, it's useless
          let resultList:any = this.overcooked_dlc_levels_result.filter((l:any) => l[0][2] == content);
          for (let i = 0; i < skipLevelTypes.length; i++) {
            tempList = tempList.filter((l:any) => l[2] != skipLevelTypes[i]);
            resultList = resultList.filter((l:any) => l[2] != skipLevelTypes[i]);
          }
          //If the array is full, we repeat the loop
          if (resultList.length < tempList.length) {
            //We filter not to repeat
            for (let i = 0; i < this.overcooked_dlc_levels_result.length; i++) {
              tempList = tempList.filter((l:any) => l != this.overcooked_dlc_levels_result[i]);
            }
            let randomTemp = this.random(0, tempList.length - 1);
            //We push the random result
            this.overcooked_dlc_levels_result.push(tempList[randomTemp]);
          } else {
            //If it has all the levels, we do not search here anymore until reset
            this.content_list = this.content_list.filter(c => c != content);
            repeatLoop = true;
          }
        }
        if (content == "Overcooked 2") {
          //We filter not to repeat and reduce our list to needed
          let tempList:any = this.overcooked_2_levels;
          //We have to compare for the same things with the result list, if not, it's useless
          let resultList:any = this.overcooked_2_levels_result;
          for (let i = 0; i < skipLevelTypes.length; i++) {
            tempList = tempList.filter((l:any) => l[2] != skipLevelTypes[i]);
            resultList = resultList.filter((l:any) => l[2] != skipLevelTypes[i]);
          }
          //If the array is full, we repeat the loop
          if (resultList.length < tempList.length) {
            //We filter not to repeat
            for (let i = 0; i < this.overcooked_2_levels_result.length; i++) {
              tempList = tempList.filter((l:any) => l != this.overcooked_2_levels_result[i]);
            }
            let randomTemp = this.random(0, tempList.length - 1);
            
            //We push the random result
            this.overcooked_2_levels_result.push(tempList[randomTemp]);
          } else {
            //If it has all the levels, we do not search here anymore until reset
            this.content_list = this.content_list.filter(c => c != content);
            repeatLoop = true;
          }
        }
        if (this.overcooked_2_dlc_names.includes(content)) {
          //We filter not to repeat and reduce our list to needed
          //To use just levels of this DLC in particular
          let tempList:any = this.overcooked_2_dlc_levels.filter((l:any) => l[0][2] == content);
          //We have to compare for the same things with the result list, if not, it's useless
          let resultList:any = this.overcooked_2_dlc_levels_result.filter((l:any) => l[0][2] == content);
          for (let i = 0; i < skipLevelTypes.length; i++) {
            tempList = tempList.filter((l:any) => l[2] != skipLevelTypes[i]);
            resultList = resultList.filter((l:any) => l[2] != skipLevelTypes[i]);
          }
          //If the array is full, we repeat the loop
          if (resultList.length < tempList.length) {
            //We filter not to repeat
            for (let i = 0; i < this.overcooked_2_dlc_levels_result.length; i++) {
              tempList = tempList.filter((l:any) => l != this.overcooked_2_dlc_levels_result[i]);
            }
            let randomTemp = this.random(0, tempList.length - 1);
            //We push the random result
            this.overcooked_2_dlc_levels_result.push(tempList[randomTemp]);
          } else {
            //If it has all the levels, we do not search here anymore until reset
            this.content_list = this.content_list.filter(c => c != content);
            repeatLoop = true;
          }
        }
        if (this.overcooked_ayce_dlc_names.includes(content)) {
          //We filter not to repeat and reduce our list to needed
          //To use just levels of this DLC in particular
          let tempList:any = this.overcooked_ayce_dlc_levels.filter((l:any) => l[0][2] == content);
          //We have to compare for the same things with the result list, if not, it's useless
          let resultList:any = this.overcooked_ayce_dlc_levels_result.filter((l:any) => l[0][2] == content);
          for (let i = 0; i < skipLevelTypes.length; i++) {
            tempList = tempList.filter((l:any) => l[2] != skipLevelTypes[i]);
            resultList = resultList.filter((l:any) => l[2] != skipLevelTypes[i]);
          }
          //If the array is full, we repeat the loop
          if (resultList.length < tempList.length) {
            //We filter not to repeat
            for (let i = 0; i < this.overcooked_ayce_dlc_levels_result.length; i++) {
              tempList = tempList.filter((l:any) => l != this.overcooked_ayce_dlc_levels_result[i]);
            }
            let randomTemp = this.random(0, tempList.length - 1);
            //We push the random result
            this.overcooked_ayce_dlc_levels_result.push(tempList[randomTemp]);
          } else {
            //If it has all the levels, we do not search here anymore until reset
            this.content_list = this.content_list.filter(c => c != content);
            repeatLoop = true;
          }
        }
  
        //To stop the while and the for loop when got all
        if(this.content_list.length <= 0) {
          this.finishLoop = true;
        }
      } while (repeatLoop == true && this.finishLoop == false);
    }

    this.verifyNamesOfDLCs('overcooked_dlcs');
    this.verifyNamesOfDLCs('overcooked_2_dlcs');
    this.verifyNamesOfDLCs('overcooked_ayce_dlcs');

    //Always this order not to delete things I don't want
    this.clear();

    this.updateLists();
  }
}
