import cryptoJs from 'crypto-js';
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/utils/db/connect";


export async function POST(request: NextRequest, response: NextResponse) {
    connectDb()

    let {firstName, lastName, email, password} = await request.json()
    try {
        const existingUser = await User.findOne({ email: email })
        if (existingUser) return new Response("Email already exist")
        const hashedPass = cryptoJs.AES.encrypt(password, process.env.CRYPTO_SEC || '').toString()
        let user = new User({
            firstName, lastName, email, password: hashedPass
        })
        await user.save()
        return new Response("User Saved", { status: 200})
    } catch (err) {
        console.log(err)
        return new Response("An error occured!", { status: 400 })
    }
}