import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import {
  academicExperiences,
  personalExperiences,
  workExperiences,
} from "../../../utils/constants";
import { ExperienceTemplate } from "../../components/experience-template/ExperienceTemplate";

export default function Experience() {
  const { t } = useTranslation();
  const [focusElement, setFocusElement] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);
  const workingDiv = useRef<any>(null);
  const personalDiv = useRef<any>(null);
  const accademicDiv = useRef<any>(null);

  const focusElementStateRef = useRef(0);
  focusElementStateRef.current = focusElement;
  const widthStateRef = useRef(0);
  widthStateRef.current = width;

  /* Get the window width */
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Get the focused element */
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (workingDiv.current?.contains(event.target)) {
        setContentVisibility(1);
      } else if (personalDiv.current?.contains(event.target)) {
        setContentVisibility(2);
      } else if (accademicDiv.current?.contains(event.target)) {
        setContentVisibility(3);
      } else {
        setContentVisibility(0);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => window.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  const setContentVisibility = (nextFocusElement: number) => {
    if (
      focusElementStateRef.current !== nextFocusElement &&
      widthStateRef.current > 1024
    ) {
      setIsContentVisible(false);
      setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
      setFocusElement(nextFocusElement);
    }
  };

  /* Handle div width */
  const handleWidth = (divNo: number) => {
    return focusElement === 0
      ? "lg:w-[32%]"
      : focusElement === divNo
      ? "lg:w-[64%]"
      : "lg:w-[16%]";
  };

  /* Handle div size (sm, md, lg) */
  const handleSize = (divNo: number) => {
    if (width > 1024)
      return focusElement === 0 ? "md" : focusElement === divNo ? "lg" : "sm";
  };

  /* Get card style */
  const getCardStyle = (cardNo: number) => {
    return `text-left border-solid border-2 dark:border-[#521987] border-[#C495F0] lg:max-h-screen lg:overflow-y-auto rounded lg:cursor-pointer shadow-[0px_5px_5px_rgba(128,43,226,0.50)] dark:shadow-[0px_5px_5px_rgba(128,43,226,0.50)] mb-4 lg:mb-0 duration-500 w-full ${handleWidth(
      cardNo
    )}`;
  };

  return (
    <div className="flex flex-col justify-between ml-6 mr-6 lg:h-full lg:flex-row lg:ml-20 lg:mr-20 lg:pt-36 lg:pb-36 lg:max-w-[1280px]">
      <div ref={workingDiv} className={getCardStyle(1)}>
        <ExperienceTemplate
          title={t("experience.work-title")}
          experiences={isContentVisible ? workExperiences : []}
          size={handleSize(1)}
        />
      </div>
      <div ref={personalDiv} className={getCardStyle(2)}>
        <ExperienceTemplate
          title={t("experience.personal-title")}
          experiences={isContentVisible ? personalExperiences : []}
          size={handleSize(2)}
        />
      </div>
      <div ref={accademicDiv} className={getCardStyle(3)}>
        <ExperienceTemplate
          title={t("experience.academic-title")}
          experiences={isContentVisible ? academicExperiences : []}
          size={handleSize(3)}
        />
      </div>
    </div>
  );
}
