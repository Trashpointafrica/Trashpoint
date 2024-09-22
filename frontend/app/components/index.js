//Components for Landing Page
import Navbar from "./landingpage/navbar/page";
import Hero from "./landingpage/hero/page";
import Offer from "./landingpage/offer/page";
import Testimonials from "./landingpage/testimonials/page";
import OurServices from "./landingpage/ourservices/page";
import Recyclables from "./landingpage/recyclables/page";
import AppInfo from "./landingpage/appinfo/page";
import Footer from "./landingpage/footer/page";
import Trashpoint from "./landingpage/trashpoint/page";
export {
	Navbar,
	Hero,
	AppInfo,
	OurServices,
	Recyclables,
	Offer,
	Testimonials,
	Footer,
	Trashpoint,
};

//Components for Auth Pages

//Components for About Page
import Team from "./aboutpage/team/page";
import Values from "./aboutpage/values/page";
import About from "./aboutpage/about/page";
export { Team, Values, About };

//Components for Recycler
import RecyclerNavbar from "./recycler/recyclerNavbar";
export { RecyclerNavbar };

//Components for Aggregator
import AggregatorNavbar from "./aggregator/aggregatorNavbar";
export { AggregatorNavbar };

//Components for Admins
import AdminNavbar from "./admin/adminNavbar";
import GeneralOverview from "./admin/generalOverview";
import WasteOverview from "./admin/wasteOverview";
import RecentPickups from "./admin/recentPickups";
import RecentRecyclers from "./admin/recentRecyclers";
import UserListingTable from "./admin/userListingTable";
export {
	AdminNavbar,
	GeneralOverview,
	WasteOverview,
	RecentPickups,
	RecentRecyclers,
	UserListingTable,
};

//Components for Common Use
import MainSideBar from "./common/sidebar";
import SimpleAreaChart from "./common/simpleAreaChart";
import WhatsApp from "./common/whatsapp";
import SuccessModal from "./common/successModal";
import FailedModal from "./common/failedModal";
import SummaryModal from "./common/summaryModal";

export {
	MainSideBar,
	SimpleAreaChart,
	WhatsApp,
	SuccessModal,
	FailedModal,
	SummaryModal,
};
