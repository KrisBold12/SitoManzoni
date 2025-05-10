import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  toastMessage: string | null = null;
  toastType: 'success' | 'error' | null = null;
  messageSent = false;
  messageout = "";
  success = "Your message has been sent successfully. We will contact you as soon as possible.";
  failure = "There was a problem with your message, please try again."
  messageType: 'success' | 'error' | null = null;


  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

onSubmit() {
  if (this.contactForm.valid) {
    this.emailService.sendEmail(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.message
    ).then(response => {
      //throw new Error('Errore simulato'); //debug error
      this.messageout = this.success;
      this.messageType = 'success';
      this.messageSent = true;
      this.resetMessageAfterDelay();
    }).catch(error => {
      this.messageout = this.failure;
      this.messageType = 'error';
      this.messageSent = true;
      this.resetMessageAfterDelay();
    });
  }
}


  onBlur(controlName: string) {
    this.contactForm.get(controlName)?.markAsTouched();
  }

  private resetMessageAfterDelay() {
  setTimeout(() => {
    this.messageSent = false;
    this.messageout = "";
    this.messageType = null;
  }, 5000);
}
}
