import { Link, Outlet } from "react-router-dom";

export default function Categories(){
    const categories = ["Technology", "Food", "Travel", "Fashion", "Sports"];

    return (
        <> 

            <Outlet />
        </>
    )
}