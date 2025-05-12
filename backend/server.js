const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require('path'); // <<<< YEH SAHI HAI

const enrollRoutes = require("./routes/enrollroutes");
const bookRoutes = require("./routes/booknowroutes");
const contactRoutes = require("./routes/contactRoutes");

const publicContentRoutes = require('./routes/publicContentRoutes');
const adminContentRoutes = require('./routes/adminContentRoutes');

const { adminRouter } = require("./routes/adminAuth");
const adminDataRoutes = require("./routes/adminData");

const app = express();
// app.use(cors());
app.use(cors({
  origin: 'https://dronum-git-main-sejal-6102s-projects.vercel.app',
    // origin: 'http://localhost:3000',   //  // <-- Frontend URL
  methods: ['GET', 'POST','PUT', 'DELETE','OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization', /* any other custom headers your frontend sends */], // Add others if needed: PUT, DELETE, etc.
  credentials: true // if using cookies or auth
}));
app.use(express.json());

app.use(express.json({ limit: '10mb' })); // For parsing application/json
app.use(express.urlencoded({ extended: true, limit: '10mb' }));



const IS_VERCEL_ENV_FOR_STATIC = !!process.env.VERCEL;

app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  let filePath;

  if (IS_VERCEL_ENV_FOR_STATIC) {
    filePath = path.join('/tmp', 'uploads', filename);
  } else {
    // Local development: assumes 'uploads' folder is in your 'backend' directory
    // where server.js is.
    filePath = path.join(__dirname, 'uploads', filename);
  }

  console.log(`[IMAGE_SERVING] Attempting to serve image: ${filename} from absolute path: ${filePath}`); // Log 1

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`[IMAGE_SERVING] File not found or not accessible: ${filePath}`, err.message); // Log 2
      return res.status(404).send('Image file not found.');
    }

    console.log(`[IMAGE_SERVING] File found: ${filePath}. Streaming it.`); // Log 3
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (streamErr) => {
        console.error(`[IMAGE_SERVING] Error streaming file ${filePath}:`, streamErr.message); // Log 4
        // Important: Avoid sending another response if headers already sent by pipe
        if (!res.headersSent) {
            res.status(500).send('Error serving file.');
        }
    });
    // Pipe the file stream to the response
    fileStream.pipe(res);
  });
});


// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// API Routes
app.use("/api/enroll", enrollRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/contact", contactRoutes);


app.use("/api/admin/auth", adminRouter);         // Login route
app.use("/api/dashboard", adminDataRoutes);


app.use('/api/public/content', publicContentRoutes); // For client-facing website
app.use('/admin/cms', adminContentRoutes);


const IS_VERCEL_ENV_FOR_STATIC = !!process.env.VERCEL;

app.get('/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  let filePath;

  if (IS_VERCEL_ENV_FOR_STATIC) {
    filePath = path.join('/tmp', 'uploads', filename);
  } else {
    // Local development: assumes 'uploads' folder is in your 'backend' directory
    // where server.js is.
    filePath = path.join(__dirname, 'uploads', filename);
  }

  console.log(`[IMAGE_SERVING] Attempting to serve image: ${filename} from absolute path: ${filePath}`); // Log 1

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`[IMAGE_SERVING] File not found or not accessible: ${filePath}`, err.message); // Log 2
      return res.status(404).send('Image file not found.');
    }

    console.log(`[IMAGE_SERVING] File found: ${filePath}. Streaming it.`); // Log 3
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (streamErr) => {
        console.error(`[IMAGE_SERVING] Error streaming file ${filePath}:`, streamErr.message); // Log 4
        // Important: Avoid sending another response if headers already sent by pipe
        if (!res.headersSent) {
            res.status(500).send('Error serving file.');
        }
    });
    // Pipe the file stream to the response
    fileStream.pipe(res);
  });
});


// For local testing only (skip this in Vercel)
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

app.get("/check", (req, res) => {
  res.json("hello world");
});


module.exports = app;