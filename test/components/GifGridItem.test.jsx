import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

const title = 'Saitama';
const url = 'http://localhost/q?Saitama';

describe('Pruebas de <GifGridItem />', () => {
    test('Debe hacer match con el snapshot', () => {

        const { container, getByText } = render(<GifGridItem title={title} url={url} />);

        expect( container ).toMatchSnapshot();

        expect( getByText(title) ).toBeTruthy();
    });


    test('Debe hacer match con el snapshot', () => {

        const { getByText, getByTestId } = render(<GifGridItem title={title} url={url} />);

        expect( getByText(title) ).toBeTruthy();

        // const { src, alt } = getByTestId('test-img');
        // expect( src ).toBe( url );
        // expect( alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    // test('Debe lanzar error al no mandar parámetros requeridos', () => {
    //     const { getByText, getByTestId } = render(<GifGridItem />);

    //     // expect( getByText(title) ).toBeTruthy();

    //     // expect( getByTestId('test-img').src ).toContain( url );
    // });
})