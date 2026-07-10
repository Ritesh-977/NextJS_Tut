type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type Album = {
    userId: number;
    id: number;
    title: string;
}

async function getUserPosts(userId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    return res.json();
}

async function getUserAlbums(userId: string) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    return res.json();
}

export default async function UserProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);

    const [posts, albums] = await Promise.all([postsData, albumsData]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-8 text-white-900">User {id} Profile</h1>

            {/* The grid creates a 2-column layout on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Column: Posts */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-blue-600 border-b pb-2">Posts</h2>
                    {posts.map((post: Post) => (
                        <div key={post.id} className="bg-white border rounded-lg p-5 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-800 capitalize mb-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {post.body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column: Albums */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-green-600 border-b pb-2">Albums</h2>
                    {albums.map((album: Album) => (
                        <div key={album.id} className="bg-gray-50 border rounded-lg p-5 shadow-sm">
                            <h3 className="text-md font-medium text-gray-800 capitalize">
                                📁 {album.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

}