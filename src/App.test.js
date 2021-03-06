import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
    render( < App / > );
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
    render( < App / > );

    // button enabled
    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    expect(colorButton).toBeEnabled();

    // checkbox unchecked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
});

test('checkbox controls button state', () => {
    render( < App / > );

    const colorButton = screen.getByRole('button', { name: 'Change to blue' });
    const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

    expect(colorButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
})