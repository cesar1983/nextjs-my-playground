import { useRouter } from "next/router";
import Link from "next/link";

const Users = () => {
  const router = useRouter();
  const userId = router.query.userId;

  return (
    <>
      <div>{`User Id : ${userId}`}</div>
      {userId !== "99" && (
        <Link href="/users/[userId]" as="/users/99">
          <a>See the user 99 </a>
        </Link>
      )}
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Users;
