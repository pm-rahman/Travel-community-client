import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const {
        _id,
        postCover,
        postTitle,
        postText,
        authorName,
        communityName
    } = post;
    return (
        <div className="rounded overflow-hidden shadow-xl">
            <div className="h-56 relative overflow-hidden">
                <img src={postCover} alt="Shoes" />
            </div>
            <div className="p-4 flex flex-col">
                <h6 className="font-semibold capitalize leading-none mb-1">{authorName}</h6>
                <h6 className="flex items-center gap-2 font-semibold capitalize mb-2">{postTitle}<span className="text-xs">({communityName})</span></h6>
                <p className="text-xs max-h-32 overflow-y-hidden mb-2">{postText}</p>
                <Link to={`/post/${_id}`} className="btn mt-auto btn-error w-full text-white">Details</Link>
            </div>
        </div>
    );
};

export default Post;