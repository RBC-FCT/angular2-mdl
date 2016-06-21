import { Component, ViewEncapsulation } from '@angular/core';
import { MDL_DIRECTIVES } from '../../components';
import { PrismDirective } from './../prism/prism.component';

@Component({
  moduleId: module.id,
  selector: 'card-demo',
  templateUrl: 'card.component.html',
  styles:[
    `
    .demo-card-wide {
      width: 500px;
      margin-right:1rem;
      float:left;
    }
    .demo-card-wide > .mdl-card__title {
      color: #fff;
      height: 176px;
      background: url('assets/sund.jpg') center / cover;
    }
    .demo-card-wide > .mdl-card__menu {
      color: #fff;
    }
    
    .demo-card-square.mdl-card {
      width: 320px;
      height: 320px;
      margin-right:1rem;
      float:left;
    }
    .demo-card-square > .mdl-card__title {
      color: #fff;
      background:
        url('assets/wood.jpg') bottom right 15% no-repeat #46B6AC;
    }

    .demo-card-image.mdl-card {
      width: 256px;
      height: 256px;
      margin-right:1rem;
      float:left;
      background: url('assets/richter.jpg') center / cover;
    }
    .demo-card-image > .mdl-card__actions {
      height: 52px;
      padding: 16px;
      background: rgba(0, 0, 0, 0.2);
    }
    .demo-card-image__filename {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
    }
    
    .demo-card-event.mdl-card {
      width: 256px;
      height: 256px;
      margin-right:1rem;
      float:left;
      background: #3E4EB8;
    }
    .demo-card-event > .mdl-card__actions {
      border-color: rgba(255, 255, 255, 0.2);
    }
    .demo-card-event > .mdl-card__title {
      align-items: flex-start;
    }
    .demo-card-event > .mdl-card__title > h4 {
      margin-top: 0;
    }
    .demo-card-event > .mdl-card__actions {
      display: flex;
      box-sizing:border-box;
      align-items: center;
    }
    .demo-card-event > .mdl-card__actions > .material-icons {
      padding-right: 10px;
    }
    .demo-card-event > .mdl-card__title,
    .demo-card-event > .mdl-card__actions,
    .demo-card-event > .mdl-card__actions > .mdl-button {
      color: #fff;
    }
    
    .example-separator {
      clear: both;  
      margin-bottom: 1rem;
    }
    `
  ],
  directives: [
    MDL_DIRECTIVES,
    PrismDirective
  ],
  encapsulation: ViewEncapsulation.None
})
export class CardDemo {

}