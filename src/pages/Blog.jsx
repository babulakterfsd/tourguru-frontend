import React, { useEffect } from 'react';

function Blog() {
    useEffect(() => {
        document.title = 'Tourguru | Blog';
    });
    return (
        <div>
            <p>this is the blog page</p>
        </div>
    );
}

export default Blog;
