"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        type: "spring" as const,
        stiffness: 350,
        damping: 35,
        mass: 1
      }}
      layout
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const childrenArray = useMemo(
      () => React.Children.toArray(children) as React.ReactElement[],
      [children],
    );

    useEffect(() => {
      const timeout = setTimeout(() => {
        const nextItemIndex = items.length % childrenArray.length;
        const nextItem = childrenArray[nextItemIndex];
        
        // Clone the element with a unique key based on the current timestamp
        const newItem = React.cloneElement(nextItem, {
          key: `${nextItem.key}-${Date.now()}`,
        });
        
        setItems((prevItems) => [newItem, ...prevItems]);
      }, delay);

      return () => clearTimeout(timeout);
    }, [items, delay, childrenArray]);

    // Always show the fade-out mask for a smooth transition
    const containerStyle = {
      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
    };

    return (
      <div
        className={cn(`flex flex-col gap-3 overflow-hidden`, className)}
        style={containerStyle}
        {...props}
      >
        <AnimatePresence>
          {items.map((item) => (
            <AnimatedListItem key={item.key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList"; 