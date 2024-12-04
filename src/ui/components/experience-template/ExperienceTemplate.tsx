import { Tooltip } from "antd";
import {
  Experience,
  ExperienceTemplateProps,
} from "../../../models/experience.model";

export const ExperienceTemplate = ({
  title,
  experiences,
  size,
}: ExperienceTemplateProps) => {
  const getGridSize = () => {
    switch (size) {
      case "sm":
        return "grid-cols-3";
      case "md":
        return "grid-cols-6";
      case "lg":
        return "grid-cols-9";
      default:
        return "grid-cols-6";
    }
  };

  const getDescription = (exp: Experience) => {
    return size === "lg" ? exp.completeDescription : exp.briefDescription;
  };

  const getTitle = (exp: Experience) => {
    return size !== "sm" ? exp.completeTitle : exp.briefTitle;
  };

  return (
    <div className="p-4 lg:p-6 text-secondary-color dark:text-dark-secondary-color">
      {size !== "sm" && (
        <h1 className="text-4xl font-bold capitalize text-primary-color">
          {title}
        </h1>
      )}
      <div>
        {experiences?.map((exp) => {
          return (
            <div key={exp.key} className="mt-4">
              {/* Title */}
              <h2 className={`text-2xl font-bold`}>{getTitle(exp)}</h2>

              {/* Description */}
              {size !== "sm" && (
                <p className={`text-base mt-1 hidden font-mono lg:block`}>
                  {getDescription(exp)}
                </p>
              )}
              <p className="text-base mt-1 lg:hidden">{exp.briefDescription}</p>

              {/* Icons */}
              <div className={`grid max-w-sm mt-2 gap-3 ${getGridSize()}`}>
                {exp.icons?.map((icon) => {
                  return (
                    <Tooltip key={icon.key} title={icon.title}>
                      {icon.icon}
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
