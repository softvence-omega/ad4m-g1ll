import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const HomeButton = ({ onClick, title }: { onClick?: () => void; title: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <button
        onClick={onClick}
        className="hover:bg-text-primary hover:border-text-primary group flex w-full cursor-pointer items-center justify-between gap-4 rounded-full border border-[#7E7E7E] py-2 pr-4 pl-6 text-sm font-semibold text-[#7E7E7E] hover:text-white md:w-fit md:text-xl"
      >
        {title}

        <motion.div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9D9D9] group-hover:bg-white">
          <MoveUpRight
            className="group-hover:text-text-primary h-5 w-5 transition-all group-hover:rotate-45"
            aria-hidden="true"
          />
        </motion.div>
      </button>
    </motion.div>
  );
};

export default HomeButton;
