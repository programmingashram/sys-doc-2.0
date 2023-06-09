import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from 'sysdesign2023';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sys-2.0';
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
  formGroup!: FormGroup;
  theme!: FormControl;
  ngOnInit(){
    this.formGroup = new FormGroup({
      // theme : new FormControl({}),
    });
  }

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
