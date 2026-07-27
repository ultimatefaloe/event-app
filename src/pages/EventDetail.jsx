import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Music,
  Ticket,
  Share2,
  Heart,
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertCircle,
  Briefcase,
  Gift,
  Laptop,
  Palette,
  HeartHandshake,
  Trophy,
  Leaf,
} from "lucide-react";

// Hardcoded event data (matching the provided model)
const eventData = {
  id: 2,
  name: "Summer Music Festival",
  description:
    "Outdoor music festival with 20+ bands across 3 stages, food trucks, and art installations in the city park.",
  date: "2026-07-04T12:00:00",
  status: "upcoming",
  location: "City Park, Downtown",
  category: "music",
  createdAt: "2026-02-14T09:00:00",
  updatedAt: "2026-07-01T16:45:00",
};

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Format time
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case "upcoming":
        return { icon: Clock, color: "text-blue-400", bg: "bg-blue-900/30" };
      case "ongoing":
        return { icon: CheckCircle, color: "text-green-400", bg: "bg-green-900/30" };
      case "completed":
        return { icon: XCircle, color: "text-gray-400", bg: "bg-gray-800/30" };
      case "cancelled":
        return { icon: AlertCircle, color: "text-red-400", bg: "bg-red-900/30" };
      default:
        return { icon: Clock, color: "text-gray-400", bg: "bg-gray-800/30" };
    }
  };

  const statusInfo = getStatusInfo(eventData.status);

  // Get category icon based on all available categories
  const getCategoryIcon = (category) => {
    switch (category) {
      case "music":
        return <Music className="w-5 h-5" />;
      case "conference":
        return <Briefcase className="w-5 h-5" />;
      case "networking":
        return <Users className="w-5 h-5" />;
      case "charity":
        return <Gift className="w-5 h-5" />;
      case "workshop":
        return <Laptop className="w-5 h-5" />;
      case "exhibition":
        return <Palette className="w-5 h-5" />;
      case "sports":
        return <Trophy className="w-5 h-5" />;
      case "community":
        return <Leaf className="w-5 h-5" />;
      default:
        return <Ticket className="w-5 h-5" />;
    }
  };

  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "music":
        return "bg-purple-900/30 text-purple-400";
      case "conference":
        return "bg-blue-900/30 text-blue-400";
      case "networking":
        return "bg-indigo-900/30 text-indigo-400";
      case "charity":
        return "bg-pink-900/30 text-pink-400";
      case "workshop":
        return "bg-yellow-900/30 text-yellow-400";
      case "exhibition":
        return "bg-orange-900/30 text-orange-400";
      case "sports":
        return "bg-green-900/30 text-green-400";
      case "community":
        return "bg-teal-900/30 text-teal-400";
      default:
        return "bg-gray-800/30 text-gray-400";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back button */}
      <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6" onClick={()=> navigate('/events')}>
        <ArrowLeft className="w-5 h-5" />
        Back to Events
      </button>

      {/* Event header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`}
            >
              <statusInfo.icon className="w-4 h-4" />
              {eventData.status.charAt(0).toUpperCase() + eventData.status.slice(1)}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                eventData.category
              )}`}
            >
              {getCategoryIcon(eventData.category)}
              {eventData.category.charAt(0).toUpperCase() + eventData.category.slice(1)}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white">{eventData.name}</h1>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-white">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Event details grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CalendarDays className="w-5 h-5 text-white/60 mt-0.5" />
            <div>
              <p className="text-sm text-white/60">Date</p>
              <p className="font-medium text-white">{formatDate(eventData.date)}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-white/60 mt-0.5" />
            <div>
              <p className="text-sm text-white/60">Time</p>
              <p className="font-medium text-white">{formatTime(eventData.date)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
            <div>
              <p className="text-sm text-white/60">Location</p>
              <p className="font-medium text-white">{eventData.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Ticket className="w-5 h-5 text-white/60 mt-0.5" />
            <div>
              <p className="text-sm text-white/60">Event ID</p>
              <p className="font-medium text-white">#{eventData.id}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">About This Event</h2>
        <p className="text-white/80 leading-relaxed">{eventData.description}</p>
      </div>

      {/* Metadata */}
      <div className="border-t border-white/10 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-white/60">Created:</span>
            <span className="ml-2 text-white/80">
              {new Date(eventData.createdAt).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-white/60">Last Updated:</span>
            <span className="ml-2 text-white/80">
              {new Date(eventData.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Current ID from URL */}
      <div className="mt-6 text-sm text-white/50 border-t border-white/10 pt-4">
        <span>Viewing event ID from URL: {id}</span>
      </div>
    </div>
  );
};

export default EventDetail;