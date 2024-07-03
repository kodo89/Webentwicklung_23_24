import { NextResponse } from "next/server";
import { query } from "../db";

export async function GET(req, res) {
    try {
        const results = await query('SELECT * FROM userlist');
        return NextResponse.json(results, {status: 200});
    } catch (error) {
        return NextResponse.json({ message: "Some Error occurred"}, { status: 500 })
    }
}









