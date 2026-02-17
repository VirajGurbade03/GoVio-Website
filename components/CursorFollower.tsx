'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const CursorFollower = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the follower
    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [mouseX, mouseY, isVisible]);

    const handleMouseDown = useCallback(() => setIsClicked(true), []);
    const handleMouseUp = useCallback(() => setIsClicked(false), []);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isClickable =
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') ||
            target.closest('button') ||
            target.getAttribute('role') === 'button';

        setIsHovered(!!isClickable);
    }, []);

    const handleMouseLeave = useCallback(() => setIsVisible(false), []);
    const handleMouseEnter = useCallback(() => setIsVisible(true), []);

    useEffect(() => {
        // Detect if it's a mobile/touch-only device
        const isTouchOnly = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchOnly) return;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Hide default cursor
        document.body.style.cursor = 'none';
        const style = document.createElement('style');
        style.id = 'cursor-hide-style';
        style.innerHTML = `
            * {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.body.style.cursor = 'auto';
            const existingStyle = document.getElementById('cursor-hide-style');
            if (existingStyle) {
                document.head.removeChild(existingStyle);
            }
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseOver, handleMouseLeave, handleMouseEnter]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden whitespace-nowrap">
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(0,102,255,0.8)]"
                animate={{
                    scale: isClicked ? 0.8 : (isHovered ? 1.5 : 1),
                }}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Blurred Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 border-2 border-primary-400/30 rounded-full backdrop-blur-[1px]"
                animate={{
                    width: isHovered ? 80 : 40,
                    height: isHovered ? 80 : 40,
                    scale: isClicked ? 1.2 : 1,
                }}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    mass: 0.5
                }}
            />

            {/* Glowing Aura when hovering */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="fixed top-0 left-0 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"
                        style={{
                            x: cursorX,
                            y: cursorY,
                            translateX: '-50%',
                            translateY: '-50%',
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default CursorFollower;

