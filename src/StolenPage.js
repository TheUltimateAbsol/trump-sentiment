import './StolenPage.css'
import Percentage from './Percentage'

function StolenPage(
    {
        percent,
        commentStage,
        currentComment,
    }
) {
    return (<div className='container'>
        <Percentage value={percent}/>

        <div id='featured'>
            <div name='fade'>
                <div className='featured-wrap'>
                    <div className={commentStage}>
                        {`${(currentComment||{}).username}: ${(currentComment||{}).tweet}`}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default StolenPage