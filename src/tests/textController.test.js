const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const textRoutes = require("../routes/textRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use("/api/texts", textRoutes);

describe("Text API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  let textId;

  it("should create a new text", async () => {
    const res = await request(app)
      .post("/api/texts")
      .send({ content: "The quick brown fox jumps over the lazy dog." });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
    textId = res.body._id;
  });

  it("should get text statistics", async () => {
    const res = await request(app).get(`/api/texts/${textId}/stats`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.wordCount).toEqual(9); // 9 words
  });

  it("should get longest words in paragraphs", async () => {
    const res = await request(app).get(`/api/texts/${textId}/longest-words`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(["jumps"]); // 'jumps' is the longest word
  });

  it("should update the text", async () => {
    const res = await request(app)
      .put(`/api/texts/${textId}`)
      .send({ content: "The lazy dog slept in the sun." });
    expect(res.statusCode).toEqual(200);
    expect(res.body.content).toEqual("The lazy dog slept in the sun.");
  });

  it("should delete the text", async () => {
    const res = await request(app).delete(`/api/texts/${textId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.msg).toEqual("Text removed");
  });
});
