import React from 'react';
import { Search, Send, Phone, Video, MoreVertical } from 'lucide-react';

const CONTACTS = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Hey, would you like to join our study group?',
    time: '2m ago',
    unread: 2,
  },
  {
    id: 2,
    name: 'Mike Ross',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastMessage: 'Thanks for sharing the resources!',
    time: '1h ago',
    unread: 0,
  },
];

export function Messages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-12 h-[calc(100vh-12rem)]">
          {/* Contacts Sidebar */}
          <div className="col-span-4 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-5rem)]">
              {CONTACTS.map((contact) => (
                <div
                  key={contact.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {contact.name}
                        </h3>
                        <p className="text-xs text-gray-500">{contact.time}</p>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                    {contact.unread > 0 && (
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-cyan-500 rounded-full">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={CONTACTS[0].avatar}
                  alt={CONTACTS[0].name}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    {CONTACTS[0].name}
                  </h2>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-cyan-500 transition-colors duration-200">
                  <Phone className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-cyan-500 transition-colors duration-200">
                  <Video className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-cyan-500 transition-colors duration-200">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Sample messages */}
              <div className="flex justify-end">
                <div className="bg-cyan-500 text-white rounded-lg px-4 py-2 max-w-xs">
                  <p>Hey! How's your preparation going?</p>
                  <p className="text-xs text-cyan-100 text-right mt-1">12:30 PM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                  <p>Going great! Just finished the DSA practice problems.</p>
                  <p className="text-xs text-gray-500 mt-1">12:32 PM</p>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="p-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-200">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}