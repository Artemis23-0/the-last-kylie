import React from "react";
import GrassyBottom from "../../images/grassy-bottom.png";
import Logo from "../../images/logo.png";
import "./styles/navBar.css";
import AnimatedMenu from "../menu/AnimatedMenu";
import AnimatedMenuItemInfo from "../../items/components/menu/AnimatedMenuItemInfo";
import { routeUrls } from "../../config/routes/routeUrls";
import { useNavigate } from "react-router-dom";

//#region Navigation Constants
//#region History
const historyItemInfo: AnimatedMenuItemInfo[] = [
  new AnimatedMenuItemInfo("kylieHistory", routeUrls.history.kylieSpecies, "History Of Kylie"),
  new AnimatedMenuItemInfo("organizationHistory", routeUrls.history.theOrganization, "Organization History"),
];
//#endregion

//#region Discovering Nomad Kylie
const discoveringNomadKylieItemInfo: AnimatedMenuItemInfo[] = [
  new AnimatedMenuItemInfo("nomadLifeStyle", routeUrls.discoveringNomadKylie.nomadLifeStyle, "The Nomad Life"),
  new AnimatedMenuItemInfo("photoGallery", routeUrls.discoveringNomadKylie.photoGallery, "Photo Gallery"),
];
//#endregion

//#region Recent Sightings
const recentSightingsItemInfo: AnimatedMenuItemInfo[] = [
  new AnimatedMenuItemInfo("recentSightings", routeUrls.recentSightings.recentSightnings, "Kylie Sightings"),
];
//#endregion

//#region How You Can Help
const howYouCanHelpItemInfo: AnimatedMenuItemInfo[] = [
  new AnimatedMenuItemInfo("howYouCanHelp", routeUrls.howYouCanHelp.howYouCanHelp, "Ways to Help"),
  new AnimatedMenuItemInfo("donate", routeUrls.howYouCanHelp.donate, "Donations"),
  new AnimatedMenuItemInfo("contact", routeUrls.howYouCanHelp.contact, "Contact"),
];
//#endregion
//#endregion

function NavBar() {
  const navigate = useNavigate();

    return (
        <div className="Main-Nav-Bar">
          <img 
            src={Logo} alt="logo" 
            onClick={() => navigate(routeUrls.common.home)}
            style={{
              margin: "20px",
              display: "block",
              borderRadius: "50%",
              width: "5%",
              height: "auto",
            }}
          />,
          <div className="Menu-Buttons">
          <AnimatedMenu
            imageUrl={GrassyBottom}
            style={{
              width: "20%",
            }}
            text="History"
            >
              {historyItemInfo}
          </AnimatedMenu>
          <AnimatedMenu
            imageUrl={GrassyBottom}
            style={{
              width: "25%",
            }}
            text="Discovering Nomad Kylie"
            >
              {discoveringNomadKylieItemInfo}
          </AnimatedMenu>
          <AnimatedMenu
            imageUrl={GrassyBottom}
            style={{
              width: "20%",
            }}
            text="Recent Sightings"
            >
              {recentSightingsItemInfo}
          </AnimatedMenu>
          <AnimatedMenu
            imageUrl={GrassyBottom}
            style={{
              width: "20%",
            }}
            text="How You Can Help"
            >
              {howYouCanHelpItemInfo}
          </AnimatedMenu>
          </div>
        </div>
    );
}

export default NavBar;