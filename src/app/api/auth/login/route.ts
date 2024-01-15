import cryptoJs from 'crypto-js';
import jwt from 'jsonwebtoken';
import { User } from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import connectDb from '@/utils/db/connect';


export async function POST(req: NextRequest, res: NextResponse) {

    connectDb()
    
    try {
        const { email, password } = await req.json()

        const user = await User.findOne({ email })
    
        if (!user) return new Response("Incorrect email or password!")
    
        const decryptedPass = cryptoJs.AES.decrypt(user.password, process.env.CRYPTO_SEC || '').toString(cryptoJs.enc.Utf8);
        
        
        if(decryptedPass === password) {
            
            const { firstName, lastName, email, address, role } = user;
            
            const accessToken = jwt.sign({firstName, lastName, email, address, role}, process.env.JWT_SEC || '');
            
            return Response.json({
                firstName, lastName, email, address, role, accessToken
            })
        } else {
            return new Response("Incorrect email or password!")
        }
    } catch (err) {
        console.log(err)
        return new Response("An error occured!")
    }

}