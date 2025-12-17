export const rooms = [
{
  id: 1,
  name: "001",
  floor: 2,
  type: "Дом",
  status: "free",
  rating: 4,
  reviewsCount: 32,

  // Инвентарь комнаты
  inventory: [
    { name: "Кондиционер", status: "OK", icon: 'icon-air-vent'},
    { name: "Холодильник", status: "OK", icon: 'icon-refrigerator' },
    { name: "Сейф", status: "OK" , icon: 'icon-vault'},
    { name: "Телевизор", status: "BROKEN", icon: 'icon-tv' },
    { name: "Постельное бельё", status: "NO", icon: 'icon-bed-double'}
  ],

  // История бронирований
  dateRents: [
    {
      id: 101,
      guest: { id: 955, name: "Иванов Иван", phone: "+79995553322" },
      dateFrom: "2025-01-01",
      dateEnd: "2025-01-05",
      pricePerNight: 2700,
      source: "Booking.com",
      paid: true
    },
    {
      id: 102,
      guest: { name: "Мария Петрова", phone: "+79162342155" },
      dateFrom: "2025-01-07",
      dateEnd: "2025-01-08",
      pricePerNight: 3000,
      totalPrice: 3000,
      source: "Сайт",
      paid: true
    }
  ],

  // Инциденты и события
  events: [
    {
        id: 1,
        type: "issue", 
        label: "Сломалась лампочка",
        date: "2025-01-03",
        status: "RESOLVED", 
        comments: [
            {
                text:"Горничная заменила",
                dateTime: "2025.01.03 12:25"
            }
        ],
      creator: {id: 1, name: "Людмила", phone: "99-55-55", post: "Горничная"}
    },
    {
        id: 2,
        type: "issue",
        label: "Тараканы замечены",
        date: "2025-01-10",
        status: "open",
        comments: [
                {
                    text:"Горничная заметила",
                    dateTime: "2025.01.03 12:25"
                },
                {
                    text:"Дезинсектор исправил",
                    dateTime: "2025.01.03 14:25"
                }
            ],
        creator: {id: 1, name: "Людмила", phone: "99-55-55", post: "Горничная"}
    }
  ],

  revenue: [
    {month:"2025-01", amount:13800},
    {month:"2025-02", amount:8200},
    {month:"2025-03", amount:0}
  ],
},

];
