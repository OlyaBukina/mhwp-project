import { db } from "../lib/db";

async function main() {
  try {
    const exercises = require("../lib/exercises.json");

    await db.exercise.createMany({
      data: exercises,
    });

    console.log("Exercises successfully added to the database!");
  } catch (error) {
    console.error("Error adding exercises:", error);
  } finally {
    await db.$disconnect();
  }
}

main();
