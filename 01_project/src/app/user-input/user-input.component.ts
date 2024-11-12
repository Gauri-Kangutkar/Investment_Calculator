import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment.input.module';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  entertedInitialInvestment ='0';
  entertedAnnualInvestment='0';
  enteredExpectedReturn ='5';
  enteredDuration='10';


  onSumit() {
    this.calculate.emit({
      initialInvestment: +this.entertedInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment :+this.entertedAnnualInvestment

    });
  }

}
