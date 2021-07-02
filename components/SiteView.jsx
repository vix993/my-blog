import RenderSmoothImage from "render-smooth-image-react";

import "render-smooth-image-react/build/style.css";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";

export const SiteView = ({ currentSite }) => {
  return (
    <div
      onClick={() =>
        window.open(
          `${currentSite.url ? currentSite.url : currentSite.github}`,
          "mywindow"
        )
      }
      className="w-full lg:w-5/12 mx-auto rounded-2xl lg:mt-4 cursor-pointer hover:text-gray-700"
    >
      <div className="w-full rounded-2xl transform transition duration-200 hover:scale-105 hover:shadow-xl">
        {currentSite.img && (
          <div>
            <RenderSmoothImage
              imageProps={{ className: "rounded-t-lg h-full w-full" }}
              src={currentSite.img}
              alt={currentSite.name}
            />
          </div>
        )}

        <footer className="bg-yellow-100 rounded-b-lg flex gap-2 p-2 justify-center items-center">
          <a
            className="hover:text-yellow-500 flex items-center justify-center"
            href={currentSite.url}
            target="_blank"
          >
            <Icon component={OpenInNewIcon} />
          </a>
          <a
            className="hover:text-yellow-500 flex items-center justify-center"
            href={currentSite.github}
            target="_blank"
          >
            <Icon component={GitHubIcon} />
          </a>
          <span className="text-sm">{currentSite.description}</span>
        </footer>
      </div>
    </div>
  );
};
