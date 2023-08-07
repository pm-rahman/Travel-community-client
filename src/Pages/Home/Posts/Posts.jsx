import { useEffect } from "react";

import { useState } from "react";
import Post from "../../../Components/Post/Post";

const Posts = () => {
    const [loading, setLoading] = useState(false);
    const [firsCommunity, setFirsCommunity] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_api}/communities`)
            .then(res => res.json())
            .then(data => {
                setFirsCommunity(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_api}/posts/${firsCommunity[0]?._id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setPosts(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [firsCommunity]);

    return (
        <>
            {loading
                ? <p className="text-center">Loading...</p>
                : <>
                    <h4 className="text-center text-3xl font-semibold">{firsCommunity[0]?.communityName} Posts</h4>
                    {firsCommunity.length > 0
                        ? <div className="grid grid-cols-3 gap-3">
                            {posts.map(post => <Post
                                key={post._id}
                                post={post}
                            />)}
                        </div>
                        : <div>
                            <h4 className="text-center text-2xl font-semibold">There is no post Available</h4>
                        </div>}
                </>
            }
        </>
    );
};

export default Posts;