import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

const router = Router();

const sendCollection = (res: any, data: any[]) => {
  res.json(data);
};

router.get('/users', async (_req, res) => {
  const users = await User.find({});
  sendCollection(res, users);
});

router.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

router.get('/teams', async (_req, res) => {
  const teams = await Team.find({});
  sendCollection(res, teams);
});

router.post('/teams', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json(team);
});

router.get('/activities', async (_req, res) => {
  const activities = await Activity.find({}).sort({ date: -1 });
  sendCollection(res, activities);
});

router.post('/activities', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

router.get('/leaderboard', async (_req, res) => {
  const entries = await LeaderboardEntry.find({}).sort({ score: -1 });
  sendCollection(res, entries);
});

router.post('/leaderboard', async (req, res) => {
  const entry = await LeaderboardEntry.create(req.body);
  res.status(201).json(entry);
});

router.get('/workouts', async (_req, res) => {
  const workouts = await Workout.find({});
  sendCollection(res, workouts);
});

router.post('/workouts', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json(workout);
});

export default router;
