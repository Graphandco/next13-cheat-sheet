import CodeContainer from "@/components/CodeContainer";

async function getData() {
    const res = await fetch("http://localhost:3000/api/tips", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const Home = async () => {
    const tips = await getData();

    return (
        <div className="flex flex-col gap-10 pt-20">
            {tips.map((tip) => (
                <CodeContainer key={tip.id} tip={tip} />
            ))}
        </div>
    );
};

export default Home;
