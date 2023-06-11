import CodeContainer from "@/components/CodeContainer";
import HomeTips from "@/components/homepage/HomeTips";

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

    return <HomeTips tips={tips} />;
};

export default Home;
