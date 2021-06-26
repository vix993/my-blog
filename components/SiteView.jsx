import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "@material-ui/core/Icon";

export const SiteView = ({ currentSite }) => {
  return (
    <main className="w-3/12 h-60 mx-auto rounded-2xl">
      <div className="w-full h-full rounded-2xl">
        {currentSite.img && <img className="rounded-t-lg" src={currentSite.img} alt={currentSite.name} />}

        {/* <iframe src={currentSite.url} frameBorder="0" width="100%" height="auto"></iframe> */}
        <footer className="bg-yellow-100 rounded-b-lg flex gap-2 h-10">
          <a className="h-full pointer" href={currentSite.url} target="_blank">
            <Icon className="hover:bg-yellow-500 rounded-lg"  component={OpenInNewIcon}/>
          </a>
          <a href={currentSite.github} target="_blank">
            <Icon className="hover:bg-yellow-500 rounded-lg"  component={GitHubIcon}/>
          </a>
          <span className="text-sm">{currentSite.description}</span>
        </footer>
      </div>
    </main>
  );
};
