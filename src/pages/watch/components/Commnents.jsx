import { useParams } from "react-router-dom";
import { useVideoComments } from "../../../hook/queries/get-video-data"

const Comment = () => {
    const params = useParams();
     const videoId = params.videoId;
    const comments = useVideoComments(videoId)
return(
<div>{
    comments.videoComments.data.items.map((commnets)=>{
const {authorDisplayName:name, textOriginal:comments, publishedAt:commentDate} = commnets.snippet.topLevelComment.snippet
return (
 <div className="w-full">
    <div className='mt-4 mb-4 w-full text-xs flex'>
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img src="/Assets/img/profile.jpg" alt="사용자"/>
        </div>
        <div className="w-full overflow-hidden text-ellipsis text-hi relative">
            <div className="text-sm font-bold">{name}</div>
            <div>{comments}</div>
            <div className="pt-1">{commentDate}</div>
        </div>
    </div>
</div> 
)
})
}
</div> 
)
}

export default Comment