import React from "react"
import { Link} from 'react-router-dom';

export default function (props) {
    //Data that we'll need:
    //   - background Image: thumb_image_url
    //   - log
    //   - description: description
    //  - Id: id  

    const { id, description, ththumb_image_url, logo} = props.item;
    return(
        <div>
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}