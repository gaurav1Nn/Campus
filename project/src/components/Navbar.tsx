import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, BookOpen, Award, MessageSquare, UserCircle, MessageCircle } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/network', icon: Users, label: 'Network' },
  { path: '/messages', icon: MessageCircle, label: 'Messages' },
  { path: '/events', icon: Calendar, label: 'Events' },
  { path: '/interviews', icon: BookOpen, label: 'Interviews' },
  { path: '/achievements', icon: Award, label: 'Achievements' },
  { path: '/discussions', icon: MessageSquare, label: 'Discussions' },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 md:top-0 md:bottom-auto md:border-t-0 md:border-b backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={clsx(
                  'flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out scale-hover',
                  location.pathname === path
                    ? 'text-cyan-400 bg-slate-800 bg-opacity-50'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800 hover:bg-opacity-30'
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs md:text-sm">{label}</span>
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
            >
              <UserCircle className="h-6 w-6" />
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}