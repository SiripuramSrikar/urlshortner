
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("SimpleLinks");
    const collection = db.collection("url");

    // Validate request data
    if (!body.url || !body.shorturl) {
        return Response.json({ success: false, error: true, message: 'URL and short URL are required!' });
    }

    // Check if the short URL already exists
    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success: false, error: true, message: 'Short URL already exists!' });
    }

    // Insert into database
    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    });

    console.log("Inserted:", result, "Short URL:", body.shorturl);

    return Response.json({
        success: true,
        error: false,
        message: 'URL Generated Successfully',
        shorturl: body.shorturl
    });
}
