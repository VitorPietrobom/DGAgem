import { PhotoUrls } from "../../apis/unsplash/types";
import { TripCardProps } from "../trip-card/types";


export interface ExpandedTripCardProps {
    isOpened: boolean;
    onCLose: () => void;
    photoUrlsObject: PhotoUrls;
    tripCardInfo: TripCardProps;
}