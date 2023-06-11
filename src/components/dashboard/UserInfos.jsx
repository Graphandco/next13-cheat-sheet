import { signOut } from "next-auth/react";

const UserInfos = ({ user }) => {
    console.log(user);
    return (
        <div className="grid gap-2 border border-contrast10 py-5 px-8 rounded-lg self-baseline">
            <div className="text-contrast">Connecté sous {user.name}</div>
            <div className="text-primary">{user.email}</div>
            <div onClick={signOut} className="btn btn-primary btn-outline justify-self-start">
                Se déconnecter
            </div>
        </div>
    );
};

export default UserInfos;
