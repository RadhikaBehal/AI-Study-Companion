import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {

  try {

    const { text } = req.body;

    const fakeSummary = `
• Key concepts identified
• Important revision topics extracted
• Study material organized successfully
• Notes processed with AI workflow
`;

    res.json({
      summary: fakeSummary,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});