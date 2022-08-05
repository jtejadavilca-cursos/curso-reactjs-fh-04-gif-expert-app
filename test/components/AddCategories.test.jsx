import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategories } from "../../src/components/AddCategories";

describe('Pruebas en <AddCategories />', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategories fnAddCategory={()=>{}} /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value:'Saitama' } } );

        expect( input.value ).toBe('Saitama');

        // screen.debug();
    });

    test('Debe de llamar fnAddCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const fnAddCategory = jest.fn();
        fnAddCategory.mockReturnValueOnce(true);

        render( <AddCategories fnAddCategory={fnAddCategory} /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');

        expect( fnAddCategory ).toHaveBeenCalledTimes(1);
        expect( fnAddCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe llamar al fnAddCategory si el input está vacío', () => {
        const fnAddCategory = jest.fn();

        render( <AddCategories fnAddCategory={fnAddCategory} /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: '' } } );
        fireEvent.submit( form );
        // screen.debug();

        expect( input.value ).toBe('');

        expect( fnAddCategory ).toHaveBeenCalledTimes(0);
        expect( fnAddCategory ).not.toHaveBeenCalled();

    });
});