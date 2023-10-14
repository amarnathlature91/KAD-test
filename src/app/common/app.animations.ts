import { trigger, state, transition, animate, style } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    transition('void <=> *', animate(300)),
  ]);