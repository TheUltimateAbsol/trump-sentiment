import { useEffect, useState } from 'react';
import SimplexNoise from 'simplex-noise';
import bar from './images/bar.png'

function Percentage(
    { value }
) {
    const [simplex, setSimplex] = useState(new SimplexNoise())
    const [curSeconds, setCurSeconds] = useState(0)

    useEffect(() => {
        const loop2 = setTimeout(() => {
            setCurSeconds(getCurrentSeconds());
        }, Math.random() * 700)
        return () => clearTimeout(loop2);
    })

    return (
        <div className='question-wrap'>
            <div class="question">Do you <span>believe</span> in Donald Trump?</div>

            <div className='bar-wrap'>
                <div style={{ width: `${value + simplex.noise2D(curSeconds, 0) * .3}%` }}></div>
            </div>
            <img src={bar} />
            <div className='percent'><span>{(value + simplex.noise2D(curSeconds, 0) * .3).toFixed(1)}</span>%</div>
        </div>
    )

    function getCurrentSeconds() {
        const date = new Date();
        const seconds = date.getMilliseconds() / 100;
        return seconds;
    }
}

export default Percentage