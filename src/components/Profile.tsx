import CommonLayout from "../CommonLayout"
import { usePosts } from "../hooks/usePosts";
import HorizontalDivider from "./common/HorizontalDivider";

const Profile = () => {
  const { user } = usePosts();
  return (
    <CommonLayout>
      {
        user &&
        <div className="bg-white rounded-md p-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <HorizontalDivider className="py-1 mt-0" />
          <div className="flex gap-2">
            <p className="font-bold">Full Name: </p>
            <p>{user.fullName}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">User Name: </p>
            <p>{user.userName}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Password: </p>
            <p>{user.password}</p>
          </div>
        </div>
      }
         {
          !user && <div>You are not logged in</div>
        }
    </CommonLayout>
  )
}

export default Profile