import { Component } from '@angular/core';
import { TreeNode } from 'sysdesign2023';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nodes: TreeNode[] = [
    {
      label: 'Components',
      icon : "folder",
      expanded : true,
      children: [
        { label: 'Buttons'},
        { label: 'Child 2' , icon: "folder"},
        { label: 'Child 3' , icon: "folder"}
      ],
    },

  ];

  sun: boolean  = true
  moon: boolean = false
  onSubmit() {
   let body = document.querySelector('body');
   let sun = document.getElementById('sun');
   let moon = document.getElementById('moon');
   body?.classList.toggle('darkTheme');

   if(this.sun == true){
    this.sun = false
    this.moon = true
   }
   else{
    this.sun = true
    this.moon = false
  }

  }
}
