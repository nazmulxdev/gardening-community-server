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

    const gardenersData = dataBase.collection("gardenersData");

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

    // gardeners data

    const gardeners = [
      {
        name: "Aarav Mehta",
        age: 34,
        gender: "Male",
        status: "active",
        expertise: "Balcony Gardening",
        experience: "5 years",
        totalTipsShared: 42,
        location: "Mumbai, India",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        bio: "Specializes in growing herbs and vegetables in small spaces.",
      },
      {
        name: "Lily Thompson",
        age: 29,
        gender: "Female",
        status: "active",
        expertise: "Organic Vegetables",
        experience: "6 years",
        totalTipsShared: 67,
        location: "Portland, USA",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxbFzbHdMC6ch3WNJPkXU9etVrgH4dFzYl7wny",
        bio: "Advocate for sustainable gardening and soil health.",
      },
      {
        name: "Carlos Rivera",
        age: 41,
        gender: "Male",
        status: "active",
        expertise: "Medicinal Plants",
        experience: "8 years",
        totalTipsShared: 39,
        location: "Barcelona, Spain",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Loves growing healing herbs and teaching others about their use.",
      },
      {
        name: "Fatima Noor",
        age: 36,
        gender: "Female",
        status: "active",
        expertise: "Composting",
        experience: "7 years",
        totalTipsShared: 58,
        location: "Lahore, Pakistan",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0Drxktq6JA2WKua25GowIrVAOesNhM0D67Qfl31Z",
        bio: "Teaches local communities how to compost efficiently.",
      },
      {
        name: "Tobias Weber",
        age: 45,
        gender: "Male",
        status: "active",
        expertise: "Greenhouse Gardening",
        experience: "10 years",
        totalTipsShared: 75,
        location: "Berlin, Germany",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
        bio: "Operates a rooftop greenhouse growing tomatoes and peppers.",
      },
      {
        name: "Emiko Tanaka",
        age: 31,
        gender: "Female",
        status: "active",
        expertise: "Indoor Plants",
        experience: "4 years",
        totalTipsShared: 33,
        location: "Osaka, Japan",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxCcRzX1jZmxHDOW3zwUyFdNo18pr6hTcqVtfB",
        bio: "Helps urban dwellers keep their houseplants thriving.",
      },
      {
        name: "John Harris",
        age: 52,
        gender: "Male",
        status: "inactive",
        expertise: "Lawn Care",
        experience: "12 years",
        totalTipsShared: 21,
        location: "Dublin, Ireland",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        bio: "Retired landscape specialist.",
      },
      {
        name: "Priya Desai",
        age: 28,
        gender: "Female",
        status: "inactive",
        expertise: "Succulents",
        experience: "3 years",
        totalTipsShared: 15,
        location: "Pune, India",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxnfKOvXhusJiRcOzYpj39kyoF0UbqLX1VZht7",
        bio: "Creates succulent arrangements and miniature gardens.",
      },
      {
        name: "Ahmed Youssef",
        age: 38,
        gender: "Male",
        status: "inactive",
        expertise: "Vertical Gardening",
        experience: "5 years",
        totalTipsShared: 24,
        location: "Cairo, Egypt",
        image: "https://randomuser.me/api/portraits/men/40.jpg",
        bio: "Designs wall gardens for city homes and cafes.",
      },
      {
        name: "Sofia Rossi",
        age: 33,
        gender: "Female",
        status: "inactive",
        expertise: "Flower Gardening",
        experience: "6 years",
        totalTipsShared: 19,
        location: "Rome, Italy",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxwbiXWfHDglsF6d2NnPqU4L8xftY3cAOT07bW",
        bio: "Loves growing roses and teaching floral design.",
      },
      {
        name: "Noah Smith",
        age: 30,
        gender: "Male",
        status: "inactive",
        expertise: "Hydroponics",
        experience: "4 years",
        totalTipsShared: 29,
        location: "Sydney, Australia",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        bio: "Hydroponic enthusiast growing greens in his garage.",
      },
      {
        name: "Amira Khadija",
        age: 40,
        gender: "Female",
        status: "inactive",
        expertise: "Permaculture",
        experience: "9 years",
        totalTipsShared: 47,
        location: "Casablanca, Morocco",
        image:
          "https://sx408ml3a4.ufs.sh/f/Z8kXrxSf0DrxVHqJ2YXDOPHKFGsuQhoNTRAWq9B5iwUlyd48",
        bio: "Runs permaculture workshops and community gardens.",
      },
    ];

    const existingData = await eventCollection.estimatedDocumentCount();
    if (existingData === 0) {
      await eventCollection.insertMany(eventSlides);
      console.log("event data is added to the dataBase");
    } else {
      console.log("event data is already exist");
    }

    const existingFarmer = await gardenersData.estimatedDocumentCount();
    if (existingFarmer === 0) {
      await gardenersData.insertMany(gardeners);
      console.log("all gardeners data is added");
    } else {
      console.log("gardeners data already exist in the data base");
    }

    // all events
    app.get("/eventCollection", async (req, res) => {
      const cursor = eventCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // all farmers data

    app.get("/gardenersData", async (req, res) => {
      const cursor = gardenersData.find();
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
