import ContributionsGroup from "./ContributionsGroup";

const Contributions = ({ tips }) => {
    let allUsers = tips?.map((item) => item.username);
    const users = [...new Set(allUsers)].sort();

    return (
        <div>
            <div className="title-xl mt-5 mb-8">Contributions</div>
            <div className="grid gap-2 border border-contrast10 py-5 px-8 rounded-lg">
                <div className="grid gap-5">
                    {users?.map((user, index) => (
                        <ContributionsGroup key={index} user={user} tips={tips} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contributions;
