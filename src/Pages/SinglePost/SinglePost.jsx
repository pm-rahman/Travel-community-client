import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
    const {
        _id,
        postCover,
        postTitle,
        postText,
        authorName,
        communityName
    } = useLoaderData();
    console.log(post);
    // const {
    //     _id,
    //     postCover,
    //     postTitle,
    //     postText,
    //     authorName,
    //     communityName
    // } = post;
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full px-10 py-8 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">


                </div>
            </div>
        </div>
    );
};

export default SinglePost;