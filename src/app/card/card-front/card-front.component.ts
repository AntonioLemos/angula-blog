import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-front',
  standalone: true,
  imports: [],
  templateUrl: './card-front.component.html',
  styleUrl: './card-front.component.css',
  providers: [DatePipe]
})
export class CardFrontComponent {
  @Input() namePerson: string = '';
  @Input() coursePerson: string = '';
  @Input() birthdayPerson: Date | null = null;
  @Input() documentPerson: string = '';
  @Input() imgProfile: string = '';
  @Input() qrcodeProfile: string = '';
  @Input() useCode: string = '';
  @Input() year: string = '';

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void { }

  getFormattedBirthday(): string {
    return this.birthdayPerson ? this.datePipe.transform(this.birthdayPerson, 'dd/MM/yyyy') || '' : '';
  }
}
