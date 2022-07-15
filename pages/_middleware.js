import { NextResponse ,NextRequest} from "next/server/";

export const getServerSideProps=async(context)=>{
    const token = context.req.cookies.jwt;
    console.log(context);
    return{
        props:{
            token,
        }

    }
}
export function middleware(NextRequest){
    const req = NextRequest.cookies['jwt'];
    const response = NextResponse.next();
    response.cookie("jwt-local",req,{ sameSite:"none" , secure:true  });
    return response;
}