import { useEffect, useState } from "react";
import Community from "./Community";

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
        <h4 className="text-center text-3xl font-semibold">All Communities</h4>
            {communities.length>0
                ? <div className="grid grid-cols-3 gap-3">
                    {communities.map(community => <Community
                        key={community._id}
                        community={community}
                    />)}
                </div>
                : <div>
                    <h4 className="text-center text-2xl font-semibold">There is no community Available</h4>
                </div>}
        </>
    );
};

export default Communities;