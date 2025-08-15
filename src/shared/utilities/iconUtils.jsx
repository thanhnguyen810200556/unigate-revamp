import {
  faFileSignature,
  faBookOpenReader,
  faChartBar,
  faRobot,
  faSquareCheck,
  faClock,
  faTrophy,
  faUniversity,
  faMapMarkerAlt,
  faFile,
  faCalendarCheck,
  faSchoolFlag,
  faAlignLeft,
  faGraduationCap,
  faHouse,
  faFilePen,
  faBook,
  faMessage,
  faPencil,
  faGlobe,
  faArrowLeft,
  faBell,
  faCircleCheck,
  faBookOpen,
  faLightbulb,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faUser,
  faEnvelope,
  faComment,
  faPaperPlane,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";

import { BiLoaderAlt } from "react-icons/bi";

import { Bot, Loader, User } from "lucide-react";

export function SpinnerMini() {
  return <BiLoaderAlt className="h-6 w-6 animate-spin text-gray-600" />;
}

// eslint-disable-next-line react-refresh/only-export-components
export const iconMap = {
  user: faUser,
  envelope: faEnvelope,
  comment: faComment,
  fileSignature: faFileSignature,
  bookOpenReader: faBookOpenReader,
  chartBar: faChartBar,
  robot: faRobot,
  squareCheck: faSquareCheck,
  clock: faClock,
  trophy: faTrophy,
  university: faUniversity,
  mapMarkerAlt: faMapMarkerAlt,
  file: faFile,
  calendarCheck: faCalendarCheck,
  schoolFlag: faSchoolFlag,
  alignLeft: faAlignLeft,
  graduationCap: faGraduationCap,
  house: faHouse,
  filePen: faFilePen,
  book: faBook,
  message: faMessage,
  pencil: faPencil,
  globe: faGlobe,
  arrowLeft: faArrowLeft,
  bell: faBell,
  circleCheck: faCircleCheck,
  paperPlane: faPaperPlane,
  bookOpen: faBookOpen,
  lightbulb: faLightbulb,
  bot: Bot,
  loader: Loader,
  userLucide: User,
  eye: faEye,
  eyeSlash: faEyeSlash,
  arrowRight: faArrowRight,
};
