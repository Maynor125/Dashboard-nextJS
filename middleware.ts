import  WithAuth  from 'next-auth/middleware';

export default WithAuth({
   pages:{
    signIn:"/auth/signin",
    signOut:"/auth/signout",
    error:"/auth/error",
    verifyRequest:"/auth/verifyrequest",
    newUser:"/auth/newuser",
   },
})