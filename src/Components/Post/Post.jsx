import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { Icon } from "@iconify/react";

const Post = ({ post, postDeleteHandler }) => {
    const { user } = useAuth();
    const {
        _id,
        postCover,
        email,
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
                <div className="flex justify-between">
                    <div>
                        <h6 className="font-semibold capitalize leading-none mb-1">{authorName}</h6>
                        <h6 className="flex items-center gap-2 font-semibold capitalize mb-2">{postTitle}<span className="text-xs">({communityName})</span></h6>
                    </div>
                    {user?.email === email
                        && <div className="flex gap-2 items-center">
                            <Link to={`/edit-post/${_id}`}><Icon className="text-xl" icon="fa-solid:edit" /></Link>
                            {postDeleteHandler && <button onClick={() => postDeleteHandler(_id)}><Icon className="text-xl" icon="fa-regular:trash-alt" /></button>}
                        </div>
                    }
                </div>
                <p className="text-xs max-h-32 overflow-y-hidden mb-2">{postText}</p>
                <Link to={`/post/${_id}`} className="btn mt-auto btn-error w-full text-white">Details</Link>
            </div>
        </div>
    );
};

export default Post;