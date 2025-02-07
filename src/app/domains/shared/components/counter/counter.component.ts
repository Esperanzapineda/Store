import { state } from '@angular/animations';
import { Component, Input, signal, SimpleChange, SimpleChanges } from '@angular/core';
import internal from 'stream';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //No debe ser asincrono
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges){
    //se ejecutan antes y durante el render
    console.log('ngOnChange');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // despues de renderizar el componente, solo corre una vez perfecto para cosas asincronas
    //una vez,
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(()=> {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000 )
  }

  ngAfterViewIniti() {
    //despues del render, preguntar si los hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  ngOnDestroy(){
  //ver cuando el componente se destruye
  console.log('ngOnDestroy');
  console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duraion');
    //
  }

}
