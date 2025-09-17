"use client";
import { motion } from "framer-motion";
/* eslint-disable @typescript-eslint/no-explicit-any */

const BenefitCard = ({
  benefit,
  index,
}: {
  benefit: { title: string; description: string; icon: any };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      key={index}
      className="hover:bg-text-secondary flex w-full flex-col items-center gap-4 rounded-xl bg-white p-6 text-[#212B36] shadow-lg transition-all hover:text-white sm:w-72 lg:w-80"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
        {benefit.icon}
      </div>
      <h3 className="text-xl font-semibold">{benefit.title}</h3>
      <p className="">{benefit.description}</p>
    </motion.div>
  );
};

export default BenefitCard;
