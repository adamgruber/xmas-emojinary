import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';

const PuzzleSlide = ({ question, answer, scheme, ...rest }) => {
    const { bgColor, textColor } = scheme;
    return (
        <Slide transition={['fade']} bgColor={bgColor} {...rest}>
            <Heading margin="0 0 4rem 0">{question}</Heading>
            <Appear>
                <Heading size={6} textColor={textColor} caps>
                    {answer}
                </Heading>
            </Appear>
        </Slide>
    );
};

export default PuzzleSlide;
