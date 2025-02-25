import Couchdb, { RequestError } from "nano";

const nano = Couchdb("http://localhost:5984");
const posts = nano.db.use("test");

export async function GET(
    req: Request,
    { params }: { params: Promise<{ postId: string, attachmentId: string }>}
) {
    await nano.auth("website", "mypassword");
    try {
        const image = await posts.attachment.get((await params).postId, (await params).attachmentId);
        let res = new Response(image);
        res.headers.set("Content-Type", "image/png");
        return res;
    }
    catch (e) {
        return new Response(null, { status: (e as RequestError).statusCode });
    }
}