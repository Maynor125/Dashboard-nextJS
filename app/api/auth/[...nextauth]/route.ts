import NextAuth,{NextAuthOptions} from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export const authOption: NextAuthOptions={
  providers:[
      GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
      })
  ]
}
   
const handler = NextAuth(authOption)
export {handler as GET,handler as POST}