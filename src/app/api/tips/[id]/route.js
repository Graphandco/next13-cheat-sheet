import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Tip from "@/models/Tip";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        const tip = await Tip.findById(id);

        return new NextResponse(JSON.stringify(tip), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        await connect();

        await Tip.findByIdAndDelete(id);

        return new NextResponse("Tip has been deleted", { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};
