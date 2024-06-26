import { authMiddleware } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs";

  

export default authMiddleware({
  publicRoutes: (req) => !req.url.includes("/dashboard"),
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};