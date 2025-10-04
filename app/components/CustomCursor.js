'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  
  // Smooth spring animations for cursor position
  const cursorX = useSpring(0, { damping: 25, stiffness: 400, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 400, mass: 0.5 });
  
  // Smooth spring animations for follower (slower)
  const followerX = useSpring(0, { damping: 30, stiffness: 150, mass: 0.8 });
  const followerY = useSpring(0, { damping: 30, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      followerX.set(e.clientX);
      followerY.set(e.clientY);
      
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, followerX, followerY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHovering ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Follower Circle */}
      <motion.div
        className="custom-cursor-follower"
        style={{
          x: followerX,
          y: followerY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? '3px' : '2px',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="custom-cursor-glow"
        style={{
          x: followerX,
          y: followerY,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1.2,
          opacity: isHovering ? 0.4 : 0.2,
        }}
        transition={{ duration: 0.4 }}
      />
    </>
  );
}
