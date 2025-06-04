import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.replace('/admin');
    }
  }, [token, router]);

  if (!token) return null; // ou un loader
  return children;
}