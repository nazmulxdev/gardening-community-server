import express from "express";
import cors from "cors";
import "dotenv/config";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@gardening-community-ser.kmaoglw.mongodb.net/?retryWrites=true&w=majority&appName=gardening-community-server`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // starting code from here
    // created event collection to show in the hero section
    const dataBase = client.db("gardeningCommunity");
    const eventCollection = dataBase.collection("eventCollection");

    // event data

    const eventSlides = [
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0Drx2am3Ad6PtI4VJ3pAchYWCxTMgrHZ95nmOyaL",
        title: "Spring Plant Swap",
        desc: "Bring your extra seedlings and swap with fellow gardeners.",
        date: "March 24, 2025",
        buttonLabel: "Join Event",
      },
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0Drxlh5qyq8DF3C1gWXrTZSM5tzRhONdfLiV4Qem",
        title: "Hydroponics Workshop",
        desc: "Learn how to build your own indoor hydroponic system.",
        date: "April 12, 2025",
        buttonLabel: "Register Now",
      },
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxQZhIcyKCNXUjIWnTyFovDxwaZQ1tGL4HdYcK",
        title: "Composting for Beginners",
        desc: "Discover how to turn kitchen waste into garden gold.",
        date: "May 3, 2025",
        buttonLabel: "Get Tickets",
      },
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxIDaqTj4W18vGROYsZESUXiraQbhBoVLtndM3",
        title: "Urban Balcony Gardening",
        desc: "Tips and tricks for growing plants in small urban spaces.",
        date: "May 20, 2025",
        buttonLabel: "Sign Up",
      },
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxZw0GEHSf0Drx3CjwpIS61dePsULXWmal92QB",
        title: "Tomato Growing Masterclass",
        desc: "Everything you need to know to grow juicy tomatoes.",
        date: "June 7, 2025",
        buttonLabel: "Register",
      },
      {
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxBxTTBzqgMBd9qw83hnNbU67QrFa4ozj12tXf",
        title: "Compost Bin Building",
        desc: "Build your own compost bin from recycled materials.",
        date: "June 15, 2025",
        buttonLabel: "Join Workshop",
      },
    ];

    const existingData = await eventCollection.estimatedDocumentCount();
    if (existingData === 0) {
      await eventCollection.insertMany(eventSlides);
      console.log("event data is added to the dataBase");
    } else {
      console.log("event data is already exist");
    }

    app.get("/eventCollection", async (req, res) => {
      const cursor = eventCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running on the Browser");
});

app.listen(port, () => {
  console.log("This server is running on port", port);
});
