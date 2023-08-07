import { useEffect, useState } from "react";
import SingleCommunity from "./SingleCommunity";

const Communities = () => {
    const [communities, setCommunities] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_api}/communities`)
            .then(res => res.json())
            .then(data => {
                setCommunities(data);
            })
    }, [])
    return (
        <>
            {communities.length>0
                ? <div className="grid grid-cols-3 gap-3">
                    {communities.map(community => <SingleCommunity
                        key={community._id}
                        community={community}
                    />)}
                </div>
                : <div>
                    <h4 className="text-center text-3xl font-semibold">There is no community Available</h4>
                </div>}
        </>
    );
};

export default Communities;