import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CreatePost = () => {
    const {
        _id,
        name,
        email,
        phone,
        communityName
    } = useLoaderData();
    const [error, setError] = useState('');
    const naviGate = useNavigate();

    const postFormHandler = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const postTitle = form.postTitle.value;
        const from = form.from.value;
        const destination = form.destination.value;
        const postCover = form.postCover.value;
        const postText = form.postText.value;

        const post = {
            CommunityId: _id,
            authorName: name,
            email,
            phone,
            communityName,
            postTitle,
            from,
            destination,
            postCover,
            postText
        };
        // fetch api
        fetch(`${import.meta.env.VITE_api}/create-post`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(() => {
                form.reset();
                naviGate('/');
            })
            .catch((err) => {
                console.log(err);
                setError("Some thing was Wrong");
            })

    }
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full px-10 py-8 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={postFormHandler} className="flex flex-col gap-3">
                        <h4 className="mb-3 text-2xl">Create a Post</h4>
                        <input name="postTitle" type="text" placeholder="Post Title" required className="w-full border-b border-l p-2 mb-2" />
                        <div className="grid grid-cols-2 gap-3">
                            <input name="from" type="text" placeholder="From Where" required className="w-full border-b border-l p-2 mb-2" />
                            <input name="destination" type="text" placeholder="Destination" required className="w-full border-b border-l p-2 mb-2" />
                        </div>
                        <input name="postCover" type="url" placeholder="Post Cover Image" required className="w-full border-b border-l p-2 mb-2" />
                        <textarea name="postText" type="url" placeholder="Write Post Here" rows="4" required className="w-full border-b border-l p-2 mb-2"></textarea>
                        <p className="text-red-500 pl-2">{error ? error : ""}</p>
                        <button type="submit" className="btn btn-error w-full text-white">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;