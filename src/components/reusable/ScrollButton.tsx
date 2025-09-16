import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const ScrollButton = ({ onClick, title }: { onClick?: () => void; title: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.0001 }}
      whileTap={{ scale: 0.95 }}
      className="group flex gap-4"
    >
      <button
        onClick={onClick}
        className="hover:bg-text-primary hover:border-text-primary flex w-full cursor-pointer items-center justify-between gap-4 rounded-full border border-[#7E7E7E] py-2 pr-4 pl-6 text-sm font-semibold text-[#7E7E7E] hover:text-white md:w-fit md:text-xl"
      >
        {title}
      </button>
      <motion.div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7E7E7E] group-hover:bg-white">
        <MoveUpRight
          className="group-hover:text-text-primary h-5 w-5 transition-all group-hover:rotate-45"
          aria-hidden="true"
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollButton;
