import {JSX} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";

function Page404(): JSX.Element{
    return (<>
    Такой страницы не существует.
    <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
    </>)
}
export default Page404
