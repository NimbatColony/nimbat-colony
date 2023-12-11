import {
    Directive,
    EventEmitter,
    HostListener,
    OnInit,
    Output
  } from '@angular/core';
  import { Subject } from 'rxjs';
  import { debounceTime } from 'rxjs/operators';
  
  @Directive({
    selector: '[appDebounceMouse]'
  })
  export class DebounceMouseDirective implements OnInit {
    @Output() debounceMouseEnter = new EventEmitter();
    private mouseEvents = new Subject();
  
    constructor() {}
  
    ngOnInit() {
      this.mouseEvents
        .pipe(debounceTime(20))
        .subscribe(e => this.debounceMouseEnter.emit(e));
    }
  
    @HostListener('mouseenter', ['$event'])
    enterEvent(event: Event) {
      event.preventDefault();
      event.stopPropagation();
      this.mouseEvents.next(event);
    }
  }