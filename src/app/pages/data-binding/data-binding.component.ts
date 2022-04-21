import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Oliver tx';
  imageUrl = 'https://cdn.pixabay.com/photo/2014/10/22/17/22/car-498244_960_720.jpg';
  imageDesc = 'CarAntigo';
  buttonText = 'Clique aqui';
  textRed = true;
  bgColor = 'green';
  fontSize = '20px';
  widthImg = 600;
  texttInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou() {
    this.text = 'Pastor Alemao';
    console.log('clicou aqui');
  }

  clicou2(value: any) {
    this.textRed = true;
    console.log('clicou aqui', value);
  }

  incrementa() {
    this.number++;
  }

  destroiComponente() {
    this.destroy = true;
  }

}
