import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-input',
  templateUrl: './cta-input.component.html',
  styleUrls: ['./cta-input.component.scss']
})
export class CtaInputComponent implements OnInit {
  @Input() darkMode: boolean;
  @Input() lightMode: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
