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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, originY: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: "spring" as const, stiffness: 350, damping: 40 }}
      layout 
      className="mx-auto w-full"
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