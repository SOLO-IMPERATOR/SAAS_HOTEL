import { type Guest } from "./guest"
import { type Employer } from "./employer"

export interface Room{
    id: number,
    name: string,
    floor: number,
    type: string,
    status: RoomStatus,
    rating: number,
    reviewsCount: number,
    inventory: InventoryItem[],
    dateRents: DateRent[],
    events: RoomEvent[],
    revenue: RevenueItem[],
    
}

type RoomStatus = "free" | "rent" | "fix";

type RoomEventType = "issue" | "service" | "cleaning";

type RoomEventStatus = "open" | "RESOLVED" ;
  
type RoomInventoryItemStatus = "OK" | "NO" | "BROKEN";


interface RevenueItem {
  month: string;
  amount: number;
}


interface InventoryItem{
    name: string,
    status: RoomInventoryItemStatus,
    icon: string
}

interface DateRent{
    id: number,
    guest: Guest,
    dateFrom: string,
    dateEnd: string,
    pricePerNight: number,
    source: string,
    paid: boolean
}

interface RoomEvent{
    id: number,
    type: RoomEventType,
    label: string,
    date: string,
    creator: Employer,
    fixe?: Employer
    status: RoomEventStatus,
    comments?: Record<string,string>[],
}
