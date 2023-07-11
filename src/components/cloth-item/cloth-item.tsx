import {JSX} from "react";
import {Link} from "react-router-dom";

type ClothItemProps = {
    id: number
    kind: string,
    src: string,
}
function ClothItem({id, kind, src}: ClothItemProps): JSX.Element{
    return (
        <Link className="item" to={`/details/${id}`}>
            <span>{kind}</span>
            <img src={src} alt="cloth"/>
        </Link>
    )
}
export default ClothItem
