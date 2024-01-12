import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/models/User";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    let {firstName, lastName, email, password} = req.body
    try {

        console.log(req)
        let user = new User({
            firstName, lastName, email, password
        })

        await user.save()
        return new Response("User Saved", { status: 200})
    } catch (err) {
        console.log(err)
    }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        return new Response("Hi")
    } catch (err) {
        console.log(err)
    }
}