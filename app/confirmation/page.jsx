'use client'
import React, { useEffect } from 'react'
import Landing from '../../components/Landing';

export default function Confirmation() {
  useEffect(() => {
    window.open('lacartonomades://confirmation/')
  }, [])
  return (
    <Landing />
  );
}
