import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardFrontComponent } from '../card-front/card-front.component';
import { CardBackComponent } from '../card-back/card-back.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardFrontComponent, CardBackComponent, CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  isFlipped = false;

  namePerson: string = '';
  coursePerson: string = '';
  birthdayPerson: Date | null = null;
  documentPerson: string = '';
  imgProfile: string = '../../../assets/imgs/profile.png';
  qrcodeProfile: string = '../../../assets/imgs/qrcode.png';
  useCode: string = 'XXXXXXXXX';
  year: string = '2024';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void { }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }

  onSubmit(form: any): void{
    if (form.valid) {
      this.router.navigate(['/success'], { queryParams: { name: this.namePerson, course: this.coursePerson } });
    } else {
      this.snackBar.open('Invalid form.', 'Close', {
        duration: 3000, 
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });
    }
  }
}
