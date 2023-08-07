import { Link } from "react-router-dom";

const Community = ({ community }) => {
    const {
        name,
        email,
        userPhoto,
        communityName,
        ProfilePhoto,
        coverPhoto,
    } = community;
    return (
        <div className="rounded overflow-hidden shadow-xl">
            <div className="h-56 relative overflow-hidden">
                <img src={coverPhoto} alt="Shoes" />
                <div className="h-full bg-[rgba(69,69,69,.4)] w-full absolute top-0 left-0"></div>
                <img className="absolute left-4 bottom-4 w-[40%] shadow rounded" src={ProfilePhoto} alt="" />
            </div>
            <div className="p-4 h-44">
                <div className="flex gap-4 items-center it mb-2">
                    <img className="h-10 w-10 rounded-full" src={userPhoto} alt="" />
                    <div>
                        <h6 className="font-semibold capitalize leading-none">{name}</h6>
                        <p className="text-xs">{email}</p>
                    </div>
                </div>
                <h2 className="text-xl font-semibold">{communityName}</h2>
                <Link to={`/category/${community?._id}`} className="btn btn-info w-full mt-2 text-white">Details</Link>
            </div>
        </div>
    );
};

export default Community;