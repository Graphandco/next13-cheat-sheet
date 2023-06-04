import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Tip from "@/models/Tip";

export const GET = async (request) => {
    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
        await connect();

        const tips = await Tip.find(username && { username });

        return new NextResponse(JSON.stringify(tips), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();

    const newTip = new Tip(body);

    try {
        await connect();

        await newTip.save();

        return new NextResponse("Tip has been created", { status: 201 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
