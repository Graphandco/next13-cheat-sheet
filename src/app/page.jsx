import HomeTips from "@/components/homepage/HomeTips";

async function getData() {
    const res = await fetch("https://next13-cheat-sheet.vercel.app/api/tips", {
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
