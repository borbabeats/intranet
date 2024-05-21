import '../../src/app/styles/globals.scss'

const CardFlip = ({ image, legenda }) => {
    return (
        <div className="w-50 flip-card bg-teal-800">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        {image}
                    </div>
                    <div className="flip-card-back bg-teal-800">
                        {legenda}
                    </div>
                </div>
        </div>
    )
}

export default CardFlip