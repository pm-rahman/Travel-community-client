import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditCommunity = () => {
    const [error,setError]=useState('');
    const {
        _id,
        phone,
        ProfilePhoto,
        coverPhoto,
        bio,
        trams
    } = useLoaderData();
    const naviGate = useNavigate();

    const UpdateCommunityFormHandler = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const phone = form.phone.value;
        const ProfilePhoto = form.ProfilePhoto.value;
        const coverPhoto = form.coverPhoto.value;
        const bio = form.bio.value;
        const trams = form.trams.value;

        const UpdateCommunity = {
            phone,
            ProfilePhoto,
            coverPhoto,
            bio,
            trams
        };

        // // fetch api
        fetch(`${import.meta.env.VITE_api}/edit-community/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdateCommunity)
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
        // console.log(community);
    }
    return (
        <div className="mx-12 border-t sm:mx-20 md:mx-32 py-12">
            <div className="flex flex-col items-center bg-slate-50 py-10 sm:justify-center">
                <div className="w-full px-10 py-8 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={UpdateCommunityFormHandler} className="flex flex-col gap-3">
                        <h4 className="mb-3 text-2xl">Update a Community</h4>
                        <input name="phone" type="number" defaultValue={phone} placeholder="Connect Number" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="ProfilePhoto" type="url" defaultValue={ProfilePhoto} placeholder="Community Profile Photo" required className="w-full border-b border-l p-2 mb-2" />
                        <input name="coverPhoto" type="url" defaultValue={coverPhoto} placeholder="Community Cover Photo" required className="w-full border-b border-l p-2 mb-2" />
                        <textarea name="bio" type="url" defaultValue={bio} placeholder="Community Bio" rows="4" required className="w-full border-b border-l p-2 mb-2"></textarea>
                        <textarea name="trams" type="url" defaultValue={trams} placeholder="Community Trams & Condition" rows="4" required className="w-full border-b border-l p-2 mb-2"></textarea>
                        <p className="text-red-500 pl-2">{error ? error : ""}</p>
                        <button type="submit" className="btn btn-error w-full text-white">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditCommunity;