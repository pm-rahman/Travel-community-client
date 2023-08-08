import { Icon } from "@iconify/react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CommunityDashboard = () => {
    const joinedMember = useLoaderData();
    const [joinedEmail, setJoinedEmail] = useState(joinedMember?.joinedEmail)
    const deleteMemberHandler = (email) => {
        fetch(`${import.meta.env.VITE_api}/delete-member/${joinedMember?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(() => {
                fetch(`${import.meta.env.VITE_api}/community/${joinedMember?._id}`)
                    .then(res => res.json())
                    .then(data => {
                        setJoinedEmail(data?.joinedEmail);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="font-semibold mb-2 text-3xl">Joined User</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {joinedEmail.length > 0
                            ? joinedEmail.map((email, index) => <tr
                                key={index}
                            >
                                <th>{index + 1}</th>
                                <td>{email}</td>
                                <td><Icon onClick={() => deleteMemberHandler(email)} className="text-xl cursor-pointer" icon="fa-regular:trash-alt" /></td>
                            </tr>)
                            : <tr>
                                <th>{1}</th>
                                <td>No One Here</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CommunityDashboard;