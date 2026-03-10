"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface Notification {
  id: number;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  data: string | null;
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchNotifications();
    
    // Auto-refresh notifications every 30 seconds
    const interval = setInterval(() => {
      fetchNotifications(false);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const fetchNotifications = async (showLoading = true) => {
    if (showLoading) setLoading(true);
    try {
      // Fetch all recent notifications to show in dropdown
      const res = await fetch("/api/notifications");
      if (res.ok) {
        const data = await res.json();
        setNotifications(data.notifications || []);
        setUnreadCount(data.unreadCount || 0);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  const markAllAsRead = async () => {
    if (unreadCount === 0) return;
    
    try {
      const res = await fetch("/api/notifications", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ markAllRead: true }),
      });
      
      if (res.ok) {
        // Update local state immediately
        setUnreadCount(0);
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      }
    } catch (error) {
      console.error("Error marking all as read:", error);
    }
  };

  const markAsRead = async (id: number) => {
    const notif = notifications.find(n => n.id === id);
    if (!notif || notif.isRead) return;
    
    try {
      const res = await fetch("/api/notifications", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notificationId: id }),
      });
      
      if (res.ok) {
        setUnreadCount(prev => Math.max(0, prev - 1));
        setNotifications(prev => 
          prev.map(n => n.id === id ? { ...n, isRead: true } : n)
        );
      }
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen && unreadCount > 0) {
      // Refresh to ensure we have latest data when opening
      fetchNotifications(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button 
        onClick={toggleDropdown}
        className={`p-2 rounded-full transition-colors relative ${
          isOpen ? "bg-gray-100 text-pertamina-blue" : "text-gray-500 hover:bg-gray-100 hover:text-pertamina-blue"
        }`}
        aria-label="Notifications"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        
        {/* Unread Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center animate-pulse">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h3 className="font-semibold text-gray-900">Notifikasi</h3>
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-xs font-medium text-pertamina-blue hover:text-blue-800 transition-colors"
                title="Tandai semua dibaca"
              >
                Tandai semua dibaca
              </button>
            )}
          </div>
          
          <div className="max-h-[400px] overflow-y-auto no-scrollbar">
            {loading ? (
              <div className="flex justify-center p-8">
                <div className="w-6 h-6 border-2 border-pertamina-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Belum ada notifikasi</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notif) => {
                  let href = "#";
                  
                  // Extract URL from notification data if available
                  try {
                    const dataObj = notif.data ? JSON.parse(notif.data) : {};
                    if (dataObj.url) href = dataObj.url;
                    // For tugas notifications, we might route them based on user context
                    else if (dataObj.tugasId) {
                      // It will just be handled by clicking the notification container
                    }
                  } catch (e) {}

                  return (
                    <div 
                      key={notif.id} 
                      onClick={() => markAsRead(notif.id)}
                      className={`p-4 transition-colors hover:bg-gray-50 cursor-pointer ${
                        !notif.isRead ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <div className="flex gap-3">
                        {/* Icon based on type */}
                        <div className={`mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          !notif.isRead ? "bg-blue-100 text-pertamina-blue" : "bg-gray-100 text-gray-500"
                        }`}>
                          {notif.type.includes("tugas") ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm tracking-tight ${!notif.isRead ? "font-semibold text-gray-900" : "font-medium text-gray-700"}`}>
                            {notif.title}
                          </p>
                          <p className={`text-sm mt-0.5 leading-snug line-clamp-2 ${!notif.isRead ? "text-gray-700" : "text-gray-500"}`}>
                            {notif.message}
                          </p>
                          <p className="text-[11px] text-gray-400 mt-1.5 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatDistanceToNow(new Date(notif.createdAt), {
                              addSuffix: true,
                              locale: localeId,
                            })}
                          </p>
                        </div>
                        
                        {!notif.isRead && (
                          <div className="shrink-0 w-2 h-2 mt-2 bg-pertamina-blue rounded-full"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          <div className="p-3 border-t border-gray-100 bg-gray-50/50 text-center">
            {/* Could link to a full notifications page later if needed */}
            <span className="text-xs text-gray-400 font-medium">Batas 50 notifikasi terbaru</span>
          </div>
        </div>
      )}
    </div>
  );
}
