import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth"


// const userList = [
//   {name: "hablu", password: "1234"},
//   {name: "dablu", password: "2537"},
//   {name: "bablu", password: "9420"}
// ]



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }