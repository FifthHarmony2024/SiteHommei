import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor() { }

  ngOnInit(): void {
    const button = document.getElementById('button-s1');

    if (button) {
      button.addEventListener('click', () => {
        const infoSection = document.getElementById('info1');
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const button1 = document.getElementById('button-s2');

    if (button1) {
      button1.addEventListener('click', () => {
        const infoSection = document.getElementById('info2');
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const button2 = document.getElementById('button-s3');

    if (button2) {
      button2.addEventListener('click', () => {
        const infoSection = document.getElementById('info3');
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    
    const button3 = document.getElementById('button-s4');

    if (button3) {
      button3.addEventListener('click', () => {
        const infoSection = document.getElementById('info4');
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const button4 = document.getElementById('button-s5');

    if (button4) {
      button4.addEventListener('click', () => {
        const infoSection = document.getElementById('info5');
        if (infoSection) {
          infoSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }


  }


  

}





