import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";

export const SiteView = ({ currentSite }) => {
  return (
    <a
      className="w-full lg:w-3/12 h-80 mx-auto rounded-2xl lg:mt-4 cursor-pointer transition hover:opacity-80 hover:brightness-70 duration-150 hover:text-gray-700"
      href={currentSite.url ? currentSite.url : currentSite.githuðb}
    >
      <div className="w-full h-full rounded-2xl">
        {currentSite.img && (
          <img
            className="rounded-t-lg"
            src={currentSite.img}
            alt={currentSite.name}
          />
        )}

        {/* <iframe src={currentSite.url} frameBorder="0" width="100%" height="auto"></iframe> */}
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
