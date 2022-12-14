import ReactPlayer from 'react-player'
export default function TwoVideo(props){
    const {video} = props;
    return(
        
        <div>
            <ReactPlayer 
                url={video}
                playing={true}
                controls={false}
            />
        </div>
    )
}