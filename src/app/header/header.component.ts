import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }

  toSkills() {
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});
  }

  toMyWork() {
    document.getElementById("work")?.scrollIntoView({behavior:"smooth"});
  }

  toAbout() {
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
}
