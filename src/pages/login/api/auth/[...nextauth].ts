import NextAuth, { AuthOptions } from "next-auth";
import ldap from "ldapjs";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
 
  providers: [
    CredentialsProvider({
      name: "LDAP",
      credentials: {
        username: { label: "DN", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials.username || !credentials.password) {
          throw new Error("Credenciales no válidas");
        }
        const client = ldap.createClient({
          url: process.env.LDAP_URI as string,
        });

        await new Promise((resolve, reject) => {
          client.bind(credentials.username, credentials.password, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(null);
            }
          });
        });
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
