// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck, Heading, Slide } from 'spectacle';

import PuzzleSlide from './puzzle_slide';
import puzzles from './puzzles';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#165B33', // Green
        tertiary: '#F8B229', // Yellow
        quaternary: '#BB2528', // Red
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

function getColorScheme() {
    const schemes = [
        {
            bgColor: 'primary',
            textColor: 'quaternary',
        },
        {
            bgColor: 'secondary',
            textColor: 'tertiary',
        },
        {
            bgColor: 'tertiary',
            textColor: 'secondary',
        },
        {
            bgColor: 'quaternary',
            textColor: 'primary',
        },
    ];
    return schemes[Math.floor(Math.random() * schemes.length)];
}

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom']} transitionDuration={500} theme={theme}>
                <Slide bgColor="secondary">
                    <Heading margin="0 0 4rem 0">🎄 🤔 ❓</Heading>
                    <Heading size="6" textColor="primary" caps>
                        Xmas Emoji Quiz
                    </Heading>
                </Slide>
                {puzzles.map(([question, answer]) => {
                    return (
                        <PuzzleSlide
                            key={question}
                            question={question}
                            answer={answer}
                            scheme={getColorScheme()}
                        />
                    );
                })}
            </Deck>
        );
    }
}
