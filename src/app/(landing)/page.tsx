import { LogoutButton } from "@/components/LogoutButton";
import { auth, signIn, signOut} from "@/utils/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <div>{session ? <>{JSON.stringify(session)}</> : "Not signed in"}</div>
      <LogoutButton />
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </>
  );
}
