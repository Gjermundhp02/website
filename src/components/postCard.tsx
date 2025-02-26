import Couchdb, { MaybeDocument, DocumentResponseRow, DocumentResponseRowMeta } from "nano";
import Image from "next/image";
import { useEffect } from "react";

const nano = Couchdb("http://localhost:5984");
const test = nano.db.use("test");

type Post = DocumentResponseRow<{ // Use keepalive
    "title": string,
    "description_short": string,
    "text": string,
    "_attachments": {
        [key: string]: object
}}>["doc"]

export default async function PostCard({post}: {post: Post}) {
    console.log(post);
    console.log(Object.keys(post?._attachments??{})[0]);

    return (
        <div>
            <Image src={`/api/images/${post?._id}/${Object.keys(post?._attachments??{})[0]}`} alt={post?.title ?? ""} width={500} height={500} />
        </div>
    );
}