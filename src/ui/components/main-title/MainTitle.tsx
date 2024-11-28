import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MainTitle = () => {
  const { t } = useTranslation();

  return (
    <div className="text-4xl font-black font-mono text-primary-color text-left">
      {t("homepage.hello-world")
        .split("")
        .map((el, i) => (
          <motion.span
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{
              duration: 0.005,
              delay: i / 400 + i / 10,
            }}
            key={i}
          >
            {el === " " ? "\xa0" : el}
          </motion.span>
        ))}
    </div>
  );
};

export default MainTitle;
