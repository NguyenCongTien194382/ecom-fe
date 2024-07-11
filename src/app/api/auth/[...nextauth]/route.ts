import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from 'next-auth/providers/credentials';

const loginWithServer = async (user: any, payload: any) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/auth/signin`, {
            body: JSON.stringify(payload),
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
        const data = await res.json()
        if (data.data) {
            const accessToken: string | null = res.headers.get('authorization')
            user.accessToken = accessToken
            return true
        }
        return false
    } catch (error) {
        console.error("Xác thực tài khoản trên server thất bại: ", error);
        return false;
    }
}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = { email, password }
                return user
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET as string,
        }),
    ],

    session: {
        strategy: "jwt",
        maxAge: 8 * 60 * 60
    },

    callbacks: {
        async signIn({ user, account }: { user: any; account: any }) {
            const payload: any = {}
            if (account.provider === "google") {
                const { id, name, email, image } = user;
                payload['authType'] = 'google'
                payload['authGoogleID'] = id
                payload['userName'] = name
                payload['email'] = email
                payload['avatarUrl'] = image
            }
            if (account.provider === "facebook") {
                const { id, name, email, image } = user;
                payload['authType'] = 'google'
                payload['authFacebookID'] = id
                payload['userName'] = name
                payload['email'] = email
                payload['avatarUrl'] = image
            }
            if (account.provider === 'credentials') {
                const { email, password } = user;
                payload['email'] = email
                payload['password'] = password
            }
            const isSuccess = await loginWithServer(user, payload)
            return isSuccess;
        },
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.email = user.email;
                token.name = user.name;
                token.accessToken = user.accessToken
            }
            return token;
        },

        async session({ session, token }: { session: any; token: any }) {
            if (session.user) {
                session.user.email = token.email;
                session.user.name = token.name;
                session.user.accessToken = token.accessToken;
            }
            return session;
        },
    },

    pages: {
        signIn: '/login',
    }
})

export { handler as GET, handler as POST }