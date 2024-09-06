import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-back',
  standalone: true,
  imports: [],
  templateUrl: './card-back.component.html',
  styleUrl: './card-back.component.css',
  providers: [DatePipe]
})
export class CardBackComponent {
  @Input() qrcodeProfile!: string;
  @Input() coursePerson!: string;
  @Input() birthdayPerson: Date | null = null;
  @Input() useCode!: string;
  @Input() year!: string;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void { }

  getFormattedBirthday(): string {
    return this.birthdayPerson ? this.datePipe.transform(this.birthdayPerson, 'dd/MM/yyyy') || '' : '';
  }
}
