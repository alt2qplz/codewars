/**
 * Написать программу, которая считает число корабликов на поле "морского боя".
 * Поле -- квадрат произвольного размера. Корабли -- ряд произвольного размера.
 * Корабли могут размещаться как горизонтально, так и вертикально.
 * При размещении, считается что корабли не касаются друг друга и не пересекаются.
 */
import { describe, it } from 'mocha';
import { expect } from 'chai';


function countShips(field) {
    let ships = 0;

    const fieldSide = Math.sqrt(field.length)

    const skipFields = new Set();

    for (let i = 0; i < field.length; i++) {
        if (field[i]) { // have *
            if (!skipFields.has(i)) {
                ships++
            }

            const currSkipFields = [];

            if ( (i+1) % fieldSide === 1) {
                currSkipFields.push(
                    i - fieldSide,
                    i - fieldSide + 1,
                    i + 1,
                    i + fieldSide,
                    i + fieldSide + 1
                )
            } else if ((i+1) % fieldSide === 0) {
                currSkipFields.push(
                    i - fieldSide - 1,
                    i - fieldSide,
                    i - 1,
                    i + fieldSide - 1,
                    i + fieldSide
                )
            } else {
                currSkipFields.push(
                    i - fieldSide - 1,
                    i - fieldSide,
                    i - fieldSide + 1,
                    i - 1,
                    i + 1,
                    i + fieldSide - 1,
                    i + fieldSide,
                    i + fieldSide + 1
                )
            }

            currSkipFields.forEach(sf => skipFields.add(sf))
        }
    }

    return ships;
}

describe('tests', () => {
    it('3 ships v1', () => {
        // 0, 1, 0, 1,
        // 0, 0, 0, 1,
        // 0, 0, 0, 0,
        // 1, 1, 1, 0,

        const field = [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];
        expect(countShips(field)).to.deep.equal(3);
    });

    it('3 ships v2', () => {
        // 0, 0, 0, 1,
        // 1, 0, 0, 1,
        // 0, 0, 0, 0,
        // 1, 1, 1, 0,

        const field = [0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0];
        expect(countShips(field)).to.deep.equal(3);
    });

    it('4 ships', () => {
        // 1, 0, 0, 1,
        // 0, 0, 0, 1,
        // 1, 0, 0, 0,
        // 0, 0, 1, 1,

        const field = [1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1];
        expect(countShips(field)).to.deep.equal(4);
    });

    it('5x5, 5 ships', () => {
        // 1, 0, 0, 1, 0,
        // 0, 0, 0, 1, 0,
        // 1, 0, 0, 0, 0,
        // 0, 0, 1, 1, 0,
        // 1, 0, 0, 0, 0,

        const field = [
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            0,
            1,
            0,
            0,
            0,
            0
        ];

        expect(countShips(field)).to.deep.equal(5);
    });
});
