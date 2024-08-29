"use client"
import { useEffect } from 'react';
import Landing from '../components/Landing';
import { redirectToApp } from '../components/utils';

export default function Home() {
    useEffect(() => {
      redirectToApp()
  }, []);
  
  return (
    <Landing />
  );
}
