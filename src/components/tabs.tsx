"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectTabs } from "@/config/projects";
import { LaptopIcon, Smartphone } from "lucide-react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(projectTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(projectTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...projectTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row flex-wrap gap-2 items-center justify-start [perspective:1000px] max-w-7xl w-full mx-auto",
          containerClassName
        )}
      >
        {projectTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full font-semibold",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full"
                )}
              />
            )}

            <span className="relative text-black dark:text-white inline-flex items-center gap-2">
              {tab.type === "web" ? <LaptopIcon className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-20", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative max-w-7xl mx-auto w-full h-full">
      {tabs.map((tab, idx) => {
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: isActive(tab) ? 1 : -1,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full absolute top-0 left-0", className)}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
