
const SingleBlog = ({params, se}) => {
    const [year , id] = params.segments;

    return (
        <div>
            Single Blogs {year} for {id}
        </div>
    );
};

export default SingleBlog;