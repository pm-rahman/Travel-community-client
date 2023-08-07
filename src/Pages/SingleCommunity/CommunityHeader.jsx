import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import { Link } from "react-router-dom";

const CommunityHeader = ({ communityInfo,communityDeleteHandler }) => {
    const [isTramOpen, setIsTramOpen] = useState(false);
    const { user } = useAuth();
    const [isJoin, setIsJoin] = useState(false);
    const {
        _id,
        email,
        communityName,
        ProfilePhoto,
        coverPhoto,
        trams,
        member
    } = communityInfo;
    useEffect(() => {
        fetch(`${import.meta.env.VITE_api}/check-member/${_id}?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setIsTramOpen(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [_id, user])
    // join handler
    const joinButtonHandler = () => {
        console.log('click hoice');
        fetch(`${import.meta.env.VITE_api}/join-member/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setIsJoin(!isJoin);
    }
    // join withdrew handler
    const joinDeleteHandler = () => {
        console.log('click hoice');
        fetch(`${import.meta.env.VITE_api}/delete-member/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => console.log(data));
        setIsJoin(!isJoin);
    }

    return (
        <>
            <div className="banner relative z-0 overflow-hidden rounded-lg">
                <img className="absolute w-full top-0 -z-10" src={coverPhoto} alt="" />
                <div className="h-full w-full flex justify-center items-center" style={{ background: "rgba(69,69,69,.4)" }}></div>
            </div>
            <div className="flex gap-2 relative bottom-10 ml-8">
                <figure className="h-48 w-48 border-4 rounded-full overflow-hidden"><img className="h-full min-w-full" src={ProfilePhoto} alt="" /></figure>
                <div className="mt-12">
                    <div>
                        <h1 className="font-semibold text-4xl">{communityName}</h1>
                        <div className="flex gap-2 items-center">
                            <p>{member ? member : 0} Members</p>
                            <Icon onClick={() => setIsTramOpen(!isTramOpen)} className="text-xl" icon="fa-solid:exclamation-circle" />
                        </div>
                    </div>
                    {
                        !isTramOpen && <p>{trams}</p>
                    }
                    {!isJoin
                        ? <button onClick={() => joinButtonHandler()} className="border mt-2 bg-sky-600 px-6 py-2 rounded text-white">Join</button>
                        : <button onClick={() => joinDeleteHandler()} className="border mt-2 bg-sky-600 px-6 py-2 rounded text-white">Already Join</button>
                    }
                </div>
                <div className="flex ml-auto gap-2 items-center">
                    {user?.email === email
                        && <div className="flex gap-2 items-center">
                            <Link to={`/edit-community/${_id}`}><Icon className="text-xl" icon="fa-solid:edit" /></Link>
                            <button onClick={() =>communityDeleteHandler(_id)}><Icon className="text-xl" icon="fa-regular:trash-alt" /></button>
                        </div>
                    }
                </div>
            </div>
            <hr />
        </>
    );
};

export default CommunityHeader;