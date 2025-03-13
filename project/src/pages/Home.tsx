import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Trophy, BookOpen } from 'lucide-react';
import { LampContainer } from '../components/ui/lamp';

export function Home() {
  const userProfile = {
    name: "Alex Johnson",
    class: "Computer Science",
    batch: "2024",
    startYear: "2020",
    branch: "Software Engineering"
  };

  return (
    <div>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center space-y-4"
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Welcome to <br /> CampusConnect
          </h1>
          <div className="text-center text-slate-300 space-y-2">
            <p className="text-xl">{userProfile.name}</p>
            <p>{userProfile.class} • {userProfile.batch} Batch</p>
            <p>{userProfile.branch}</p>
            <p>Started {userProfile.startYear}</p>
          </div>
        </motion.div>
      </LampContainer>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={Users}
            title="Network Growth"
            value="500+"
            description="Active students and alumni"
          />
          <StatCard
            icon={Trophy}
            title="Achievements"
            value="200+"
            description="Projects and hackathon wins"
          />
          <StatCard
            icon={BookOpen}
            title="Interview Experiences"
            value="150+"
            description="Shared by seniors"
          />
          <StatCard
            icon={Rocket}
            title="Placement Rate"
            value="40%"
            description="Increase in engagement"
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  title,
  value,
  description,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}