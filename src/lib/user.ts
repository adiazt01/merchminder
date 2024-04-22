import { auth } from "@/utils/auth";

export async function getUserId() {
    try {
      const userId = await auth();

      console.log(`👤 Id del usuario: ${userId?.user.sub}`)
  
      if (!userId || !userId.user || !userId.user.sub) {
        throw new Error("User not found");
      }
  
      return userId.user.sub;
    } catch (error) {
      console.error("Error getting user ID:", error);
      throw error;
    }
  }