import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-mode',
  templateUrl: './home-mode.component.html',
  styleUrl: './home-mode.component.scss'
})
export class HomeModeComponent implements OnInit{
  
  ngOnInit(): void {
    document.body.setAttribute("class","main-menu-background");
  }

}
