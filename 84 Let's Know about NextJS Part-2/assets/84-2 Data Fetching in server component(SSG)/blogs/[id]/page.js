"use client"

import { useParams, useSearchParams } from "next/navigation";

const SingleBlog = ({params}) => {
    // const [year , id] = params.segments;
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();
    // console.log(params2.segments.split('/'), searchParams2.get("title"));

    return (
        <div>
            SingleBlog {params.id}
        </div>
    );
};

export default SingleBlog;