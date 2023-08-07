import { Icon } from "@iconify/react";
import { useState } from "react";

const CommunityHeader = ({communityInfo}) => {
    const [isTramOpen, setIsTramOpen] = useState(false);
    const {
        communityName,
        ProfilePhoto,
        coverPhoto,
        trams,
        member
    } = communityInfo;
    return (
        <>
            <div className="banner relative z-0 overflow-hidden rounded-lg">
                <img className="absolute w-full top-0 -z-10" src={coverPhoto} alt="" />
                <div className="h-full w-full flex justify-center items-center" style={{ background: "rgba(69,69,69,.4)" }}></div>
            </div>
            <div className="flex gap-2 relative bottom-10 left-8">
                <figure className="h-48 w-48 border-4 rounded-full overflow-hidden"><img className="h-full min-w-full" src={ProfilePhoto} alt="" /></figure>
                <div className="mt-14">
                    <h1 className="font-semibold text-4xl">{communityName}</h1>
                    <div className="flex gap-2 items-center">
                        <p>{member?member:0} Members</p>
                        <Icon onClick={() => setIsTramOpen(!isTramOpen)} className="text-xl" icon="fa-solid:exclamation-circle" />
                    </div>
                    {
                        isTramOpen && <p>{trams}</p>
                    }
                </div>
            </div>
            <hr />
        </>
    );
};

export default CommunityHeader;