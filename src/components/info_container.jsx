import Avatar from "@mui/material/Avatar";

// const [userData, setUserData] = useState({
//         avatar:"",
//         name:"",
//         company:"",
//         followers:"",
//         following:"",
//         github_page:"",
//         github_repos:"",
//     });

const spanCss = "border-b-2 border-gray-300 m-2"

export default function InfoContainer({ userData }) {
  return (
    <div
      className={`border-none w-75 md:w-120 justify-self-center m-3 
            bg-gray-200 rounded-lg grid grid-cols-1 shadow-md shadow-neutral-500`}
    >
      <section className="justify-items-center p-2 bg-blue-500 rounded-t-lg">
        <Avatar alt="Travis Howard" src={userData.avatar} 
            sx={{width: 100,
                height: 100,
                border: "2px solid black",
                boxShadow: "0 2px 10px darkblue"
            }}
        />
      </section>
      <section className="grid grid-cols-1 gap-2 p-2">
        <span className={spanCss}>Name: {userData.name}</span>
        <span className={spanCss}>Company: {userData.company ? userData.company : "not available"}</span>
        <span className={spanCss}>Followers: {userData.followers}</span>
        <span className={spanCss}>Following: {userData.following}</span>
      </section>
    </div>
  );
}
