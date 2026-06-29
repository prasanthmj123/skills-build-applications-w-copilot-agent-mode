import mongoose, { Schema, model, type Document } from 'mongoose';

interface UserDoc extends Document {
  name: string;
  email: string;
  goal: string;
}

interface TeamDoc extends Document {
  name: string;
  description: string;
  members: string[];
}

interface ActivityDoc extends Document {
  userId: string;
  type: string;
  duration: number;
  date: Date;
}

interface LeaderboardDoc extends Document {
  userId: string;
  name: string;
  score: number;
}

interface WorkoutDoc extends Document {
  name: string;
  category: string;
  duration: number;
  difficulty: string;
}

const userSchema = new Schema<UserDoc>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  goal: { type: String, default: 'Stay active' },
}, { timestamps: true });

const teamSchema = new Schema<TeamDoc>({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  members: { type: [String], default: [] },
}, { timestamps: true });

const activitySchema = new Schema<ActivityDoc>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

const leaderboardSchema = new Schema<LeaderboardDoc>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  score: { type: Number, default: 0 },
}, { timestamps: true });

const workoutSchema = new Schema<WorkoutDoc>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  duration: { type: Number, required: true },
  difficulty: { type: String, default: 'beginner' },
}, { timestamps: true });

export const User = mongoose.models.User || model<UserDoc>('User', userSchema);
export const Team = mongoose.models.Team || model<TeamDoc>('Team', teamSchema);
export const Activity = mongoose.models.Activity || model<ActivityDoc>('Activity', activitySchema);
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || model<LeaderboardDoc>('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.models.Workout || model<WorkoutDoc>('Workout', workoutSchema);
