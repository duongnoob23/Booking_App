const test = {
  images: [
    "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729242714/Room/luanwjwaiavziqz94mqu.jpg",
    "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729241122/Room/nipyn0qgyoyhtgkadlyi.jpg",
  ],
  nearBy: {
    activityList: [[Object], [Object], [Object], [Object], [Object]],
    descriptionLocation: "Đà Nẵng rất đẹp",
    ratingLocation: "4.5",
  },
  priceMin: 800000,
  review: {
    amenities: [[Object], [Object]],
    description:
      "Tọa lạc trong khu vườn được chăm chút kỹ lưỡng với tầm nhìn ra đầm phá Ébrié, khách sạn cao cấp này mang phong cách nghệ thuật địa phương đương đại và các nét chấm phá kiến trúc tinh tế. Nơi đây cách Nhà thờ Hồi giáo Riviéra 3 km và Công viên Quốc gia Banco 17 km.",
    feedback: {
      comments: [Array],
      fiveStar: 25,
      fourStar: 50,
      oneStar: 0,
      ratingHotel: 5,
      ratingLocation: 3,
      ratingRoom: 4,
      ratingService: 4,
      threeStar: 25,
      twoStar: 0,
    },
    location: "Đà Nẵng",
    phoneNumber: "123456789",
    rating: 3.9,
    sumReview: 85,
  },
};

const test1 = [
  {
    comment: "rất tốt",
    rating: 5,
    urlAvatar:
      "https://res.cloudinary.com/dt7eo0hbq/image/upload/v1729235498/Room/samsipzu3uyuhyr7vdbl.jpg",
    username: "admin@gmail.com",
  },
  {
    id: "1",
    name: "Duy",
    time: "20 mins ago",
    content: "Khách sạn đẹp, đồ ăn tuyệt vời",
    score: 4.5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&h=40&q=80",
  },
];

const ratingPercentages = [
  {
    star: 5,
    percentage: hotelDetail?.review?.feedback?.fiveStar || 0,
    color: "#007AFF",
  }, // Xanh dương
  {
    star: 4,
    percentage: hotelDetail?.review?.feedback?.fourStar || 0,
    color: "#00C853",
  }, // Xanh lá
  {
    star: 3,
    percentage: hotelDetail?.review?.feedback?.threeStar || 0,
    color: "#FFD700",
  }, // Vàng
  {
    star: 2,
    percentage: hotelDetail?.review?.feedback?.twoStar || 0,
    color: "#FF8C00",
  }, // Cam
  {
    star: 1,
    percentage: hotelDetail?.review?.feedback?.oneStar || 0,
    color: "#FF0000",
  }, // Đỏ
];

const test3 = {
  checkIn: "16-04-2025 14:20:00",
  checkOut: "17-04-2025 12:20:00",
  couponCode: "SUMMER25",
  finalPrice: "1788750.0",
  hotelAddress: "Đà Nẵng",
  hotelId: 2,
  hotelName: "Onomo",
  priceCoupon: "596250.0",
  roomBookedList: [
    {
      adults: 1,
      policyBooked: [Array],
      priceRoom: 1080000,
      priceService: 340000,
      roomId: 2,
      roomName: "Phòng Deluxe Gia đình VIP",
      serviceSelect: [Array],
      uniqueId: "room2_1",
    },
    {
      adults: 1,
      policyBooked: [Array],
      priceRoom: 855000,
      priceService: 110000,
      roomId: 4,
      roomName: "Phòng tiêu chuẩn",
      serviceSelect: [Array],
      uniqueId: "room4_1",
    },
  ],
  totalAdults: 2,
  totalPriceRoom: "1935000.0",
  totalPriceService: "450000.0",
};
