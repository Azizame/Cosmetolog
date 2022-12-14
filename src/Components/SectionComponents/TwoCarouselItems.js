export default function TwoCarouselItems(props) {
    const { title, body, images, } = props
    return(
        <div className="two_header">
        <div className="header_img">
             <img src={images} alt=''/>
        </div>
        <div className="header_content">
            <h4>{title} </h4>
            <p>{body}</p>
            <div className="two_button">
                <button>Разбнаривоть</button>
                <div className='more'>УЗНАТЬ БОЛЬШЕ</div>
            </div>
            <div className="two_count">
                <div className='prev'></div>
                <div className='h1'>01</div>
                <div className='h7'>/ 07</div>
                <div className='left'></div>
            </div>
        </div>
        </div>
    )
  }