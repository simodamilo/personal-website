import { skills } from "../../../utils/constants";
import MainTitle from "../../components/main-title/MainTitle";
import { useTranslation } from "react-i18next";

export default function Homepage() {
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col justify-center pl-6 lg:ml-20 pt-40 pb-40">
      <MainTitle />
      <h2 className="text-2xl text-secondary-color dark:text-dark-secondary-color text-left">
        {t("homepage.intro-copy")}
      </h2>
      <p className="text-lg text-primary-color text-left font-bold mt-4">
        {t("homepage.software-eng")}
      </p>
      <div className="text-left">
        {skills.map((skill) => (
          <div
            className="inline-block bg-primary-color text-slate-50 rounded-[21px] shadow-[0_15px_15px_rgba(0,0,0,0.36)] text-xs py-2.5 px-3.5 mr-1.5 mt-3 text-center"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
