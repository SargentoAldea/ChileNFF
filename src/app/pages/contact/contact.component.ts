import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(8)]],
      numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ciudad: ['', Validators.required],
      fono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]]
    });
  }

  get f() {
    return this.formulario.controls;
  }

 
  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    console.log('Datos enviados:', this.formulario.value);

    alert('Formulario enviado correctamente');

    this.formulario.reset();

  }

}
