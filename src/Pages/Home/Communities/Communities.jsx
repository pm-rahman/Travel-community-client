import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { Icon } from "@iconify/react";

const Communities = () => {
    const { user } = useAuth();
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_api}/communities`)
            .then(res => res.json())
            .then(data => {
                setCommunities(data);
                setLoading(false);
            })
    }, [])
    return (
        <>
            {loading
                ? <p className="text-center">Loading...</p>
                : <div className="border rounded p-12">
                    <h4 className="text-center text-3xl mb-7 font-semibold">All Communities</h4>
                    <div className="flex justify-end">
                        <Link to="/create-community" className="border p-2 mb-5 rounded flex items-center gap-2">
                            <span>Create Community</span>
                            <Icon className="text-xl" icon="fa-solid:plus-circle" />
                        </Link>
                    </div>
                    {communities.length > 0
                        ? <div className="grid grid-cols-3 gap-5">
                            {communities.map(community => <Link
                                key={community._id}
                                to={`/community/${community?._id}`}
                                className="flex justify-between items-center border rounded font-semibold p-2 px-4 shadow hover:shadow-lg"
                            >{community?.communityName}<span className="border p-2 px-4 rounded">Join</span></Link>)}
                        </div>
                        : <div>
                            <h4 className="text-center text-2xl font-semibold">There is no community Available</h4>
                        </div>}
                </div>
            }
        </>
    );
};

export default Communities;