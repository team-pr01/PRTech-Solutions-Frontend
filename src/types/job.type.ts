/* eslint-disable @typescript-eslint/no-explicit-any */
export type TWorkMode = "On-site" | "Remote" | "Hybrid";
export type TEmploymentType = "Full-time" | "Part-time" | "Internship" | "Contract";
export type TJobStatus = "Active" | "Inactive" | "Closed" | "Draft";

export type TGrowthRoadmap = {
  timeframe: "FIRST 30 DAYS" | "FIRST 60 DAYS" | "FIRST 90 DAYS",
  title: string;
  description: string;
}
export type TJob = {
  _id: string;
  jobId: string;
  title: string;
  overview: string;
  department: string;
  openings: number;
  description: string;
  experienceRequired: string;
  skills: string[];
  location: string;
  workMode: TWorkMode;
  employmentType: TEmploymentType;
  team: string;
  reportTo: string;
  status: TJobStatus;
  keyRequirements: string[];
  responsibilities: string[];
  qualifications: string[];
  niceToHave: string[];
  perks: string[];
  growthRoadmap: TGrowthRoadmap;
  applications: any[];
  applicationDeadline: Date;
  salary: {
    min?: number;
    max?: number;
    currency: string;
  };
  addedBy: any;
  createdAt: string;
  updatedAt?: string;
};