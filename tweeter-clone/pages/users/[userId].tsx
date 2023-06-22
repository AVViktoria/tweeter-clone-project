
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

// hooks
import useUser from "@/hooks/useUser";

// components
import Header from "@/components/Header";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

const UserView = () => {
   const router = useRouter();
  const { userId } = router.query;

  // make fetch with hook
 const { data: fetchedUser, isLoading } = useUser(userId as string);

// doing a check isLoading and not fetching
   if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    )
  }
  
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string}/>
    </>
  )
}

export default UserView;