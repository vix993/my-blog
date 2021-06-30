import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";

export const SiteView = ({ currentSite }) => {
  return (
    <a
      className="w-full lg:w-5/12 mx-auto rounded-2xl lg:mt-4 cursor-pointer hover:text-gray-700"
      href={currentSite.url ? currentSite.url : currentSite.github}
      target="_blank"
    >
      <div className="w-full rounded-2xl transform transition duration-200 hover:scale-105 hover:shadow-xl">
        {currentSite.img && (
          <img
            className="rounded-t-lg"
            src={currentSite.img}
            alt={currentSite.name}
          />
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
    </a>
  );
};
