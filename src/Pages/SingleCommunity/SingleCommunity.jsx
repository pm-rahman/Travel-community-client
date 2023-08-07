import { Link, useLoaderData } from "react-router-dom";
import CommunityHeader from "./CommunityHeader";
import { Icon } from "@iconify/react";
import useAuth from "../../Hook/useAuth";
import { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";

const SingleCommunity = () => {
    const communityInfo = useLoaderData();
    const { user } = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_api}/posts/${communityInfo._id}`)
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => {
                console.log(error);
            })
    }, [communityInfo]);

    return (
        <>
            <CommunityHeader communityInfo={communityInfo} />
            <div className="mt-3 grid md:grid-cols-3 gap-5">
                <div className="border p-8 rounded">
                    <h6 className="font-semibold inline text-lg mb-2 border-b">Creater: {communityInfo?.name}</h6>
                    <p className="flex gap-2 items-center"><Icon icon="fa-regular:envelope" /><span className="relative bottom-1">{communityInfo?.email}</span></p>
                    <p className="flex gap-2 items-center border-b"><Icon icon="fa-solid:phone-alt" /> {communityInfo?.phone}</p>
                    <p>{communityInfo?.bio}</p>
                </div>
                <div className="md:col-span-2 border p-8 rounded">
                    {communityInfo?.email === user?.email
                        && <div className="flex justify-end">
                            <Link to={`/createPost/${communityInfo._id}`} className="border p-2 rounded flex items-center gap-2">
                                <span>Create Post</span>
                                <Icon className="text-xl" icon="fa-solid:plus-circle" />
                            </Link>
                        </div>
                    }

                    {posts.length > 0
                        ? <div className="grid md:grid-cols-2 mt-4 gap-4">
                            {posts.map(post => <Post key={post._id} post={post} />)}
                        </div>
                        : <h4 className="text-3xl text-center mt-4 font-semibold">No Post Available</h4>
                    }
                </div>
            </div>
        </>
    );
};

export default SingleCommunity;