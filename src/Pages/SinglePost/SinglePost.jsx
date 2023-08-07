import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
    const {
        postCover,
        postTitle,
        postText,
        authorName,
        communityName
    } = useLoaderData();
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full p-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <img src={postCover} alt="" />
                    <div className="pt-4 flex flex-col">
                        <h6 className="font-semibold capitalize leading-none mb-1">{authorName}</h6>
                        <h6 className="flex items-center gap-2 font-semibold capitalize mb-2">{postTitle}<span className="text-xs">({communityName})</span></h6>
                        <p className="text-xs mb-2">{postText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;