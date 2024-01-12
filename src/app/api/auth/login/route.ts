import cryptoJs from 'crypto-js';
import jwt from 'jsonwebtoken';
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    
    const { email, password } = await req.json()

    const user = await User.findOne({ email })

    if (!user) return new Response("Incorrect email or password!")

    const decryptedPass = cryptoJs.AES.decrypt(user.password, process.env.CRYPTO_SEC || '').toString(cryptoJs.enc.Utf8);
    
    
    if(decryptedPass === password) {
        const accessToken = 'granted access';

        const { firstName, lastName, email, role } = user
        
        return Response.json({
            firstName, lastName, email, role, accessToken
        })
    } else {
        return new Response("Incorrect email or password!")
    }

}