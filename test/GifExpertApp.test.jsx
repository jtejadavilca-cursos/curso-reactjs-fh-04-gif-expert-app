import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    test('primera prueba...', async () => {
        // const { result } = renderHook( () => useState([]));
        // const [categories, setCategories] = result.current;

        const inputValue = 'Saitama';

        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        await waitFor(
            () => expect( screen.getByLabelText('card-grid').innerHTML.length ).toBeGreaterThan(0)
        );

        expect( screen.getAllByRole('img').length ).toBeGreaterThan(0);
    });
});