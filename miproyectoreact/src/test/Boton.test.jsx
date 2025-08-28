import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Boton from '../components/Boton';

test('debe mostrar "haz clic" y luego "gracias"',()=>{
    render(<Boton/>)

    // Al inicio
  expect(screen.getByText('Haz clic')).toBeInTheDocument();

  // Simular clic
  fireEvent.click(screen.getByText('Haz clic'));

  // Después del clic
  expect(screen.getByText('Gracias')).toBeInTheDocument();
})