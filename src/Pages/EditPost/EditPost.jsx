import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditPost = () => {
    const [error,setError] = useState('');
    const {
        _id,
        postTitle,
        postCover,
        postText

    } = useLoaderData();

    const naviGate = useNavigate();
    const updatePostFormHandler = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const postTitle = form.postTitle.value;
        const postCover = form.postCover.value;
        const postText = form.postText.value;

        const updatePost = {
            postTitle,
            postCover,
            postText
        };
        // fetch api
        fetch(`${import.meta.env.VITE_api}/edit-post/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatePost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
                    <form onSubmit={updatePostFormHandler} className="flex flex-col gap-3">
                        <h4 className="mb-3 text-2xl">Create a Post</h4>
                        <input name="postTitle" type="text" defaultValue={postTitle} placeholder="Post Title" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="postCover" type="url" defaultValue={postCover} placeholder="Post Cover Image" required className="w-full border-b border-l p-2 mb-2" />
                        <textarea name="postText" type="url" defaultValue={postText} placeholder="Write Post Here" rows="4" required className="w-full border-b border-l p-2 mb-2"></textarea>
                        <p className="text-red-500 pl-2">{error ? error : ""}</p>
                        <button type="submit" className="btn btn-error w-full text-white">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPost;