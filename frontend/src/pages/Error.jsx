import { useRouteError } from "react-router-dom"

export default function Hello(){
    const error = useRouteError();
    console.log(error);
    return <h1>An Error Occured</h1>
}