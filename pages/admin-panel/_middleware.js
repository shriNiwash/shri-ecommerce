import { NextResponse ,NextRequest} from "next/server/";


export function middleware(NextRequest){
    const req = NextRequest.cookies['jwt'];
    const response = NextResponse.next();
    response.cookie("jwt-local",req,{ sameSite:"none" , secure:true });
    return response;
}