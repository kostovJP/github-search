import InfoContainer from "./info_container";
import Navbar from "./navbar";
import SearchForm from "./search-form";
import { useState, useEffect } from "react";

const base_url = "https://api.github.com/users";
const github_key = import.meta.env.VITE_GITHUB_KEY;

export default function ProfileViewPage(){
    const [username, setUsername] = useState({uname: "", isFetching: false});
    const [userData, setUserData] = useState({
        avatar:"",
        name:"",
        company:"",
        followers:"",
        following:"",
        github_page:"",
        github_repos:"",
    });

    const fetchUname = (newUname) => {
        setUsername((prev) => {
            return {...prev, uname: newUname, }
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${base_url}/${username.uname}`, {
                headers : {
                    Authorization: `token ${github_key}`,
                }
            })
            const udata = await data.json();
            console.log(udata);
            setUserData((prev) => {
                return {
                    ...prev, 
                    avatar:udata.avatar_url,
                    name:udata.name,
                    company:udata.company,
                    followers:udata.followers,
                    following:udata.following,
                    github_page:udata.url,
                    github_repos:udata.repos_url,
                }
            })
        }   
        if(!username.uname){ return }
        fetchData();
    }, [username]);

    return (
        <main>
            <Navbar/>
            <SearchForm updateData={fetchUname}/>
            {username.uname && <InfoContainer userData={userData}/>}
        </main>
    )
}