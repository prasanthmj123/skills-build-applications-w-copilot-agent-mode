import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

// Seed the octofit_db database with test data

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

const seed = async () => {
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    { name: 'Ava Chen', email: 'ava@example.com', goal: 'Run a half marathon' },
    { name: 'Marcus Lee', email: 'marcus@example.com', goal: 'Improve strength' },
    { name: 'Nia Patel', email: 'nia@example.com', goal: 'Stay consistent' },
  ]);

  const teams = await Team.insertMany([
    { name: 'River Runners', description: 'Weekend runners and trail explorers', members: [users[0]._id.toString(), users[2]._id.toString()] },
    { name: 'Power Squad', description: 'Strength and conditioning group', members: [users[1]._id.toString()] },
  ]);

  const activities = await Activity.insertMany([
    { userId: users[0]._id.toString(), type: 'Run', duration: 45, date: new Date('2026-06-20') },
    { userId: users[1]._id.toString(), type: 'Strength', duration: 60, date: new Date('2026-06-21') },
    { userId: users[2]._id.toString(), type: 'Yoga', duration: 30, date: new Date('2026-06-22') },
  ]);

  const leaderboard = await LeaderboardEntry.insertMany([
    { userId: users[0]._id.toString(), name: 'Ava Chen', score: 980 },
    { userId: users[1]._id.toString(), name: 'Marcus Lee', score: 915 },
    { userId: users[2]._id.toString(), name: 'Nia Patel', score: 870 },
  ]);

  const workouts = await Workout.insertMany([
    { name: 'Tempo Run', category: 'Cardio', duration: 35, difficulty: 'intermediate' },
    { name: 'Upper Body Strength', category: 'Strength', duration: 50, difficulty: 'intermediate' },
    { name: 'Mobility Flow', category: 'Recovery', duration: 20, difficulty: 'beginner' },
  ]);

  console.log('Seed complete', {
    users: users.length,
    teams: teams.length,
    activities: activities.length,
    leaderboard: leaderboard.length,
    workouts: workouts.length,
  });

  await mongoose.disconnect();
};

seed().catch((error) => {
  console.error('Seeding failed', error);
  process.exit(1);
});
