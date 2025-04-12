// src/Slice/hotelSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../Constant/Constant";

export const fetchListService = createAsyncThunk(
  "service/fetchListService",
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/service/get_list`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      // console.log(">>>> 35 service data:", data);
      return data.data;
    } catch (error) {
      console.log("error in fetchListService:", error);
      throw error;
    }
  }
);

const test = {
  AMENITY: [
    {
      description: null,
      id: 1,
      image: null,
      name: "Nhìn ra thành phố",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 2,
      image: null,
      name: "Phòng tắm riêng",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 4,
      image: null,
      name: "Đồ vệ sinh cá nhân miễn phí",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 5,
      image: null,
      name: "Két an toàn",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 6,
      image: null,
      name: "Nhà vệ sinh",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 7,
      image: null,
      name: "Lò sưởi",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 8,
      image: null,
      name: "Bồn tắm hoặc Vòi sen",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 9,
      image: null,
      name: "Khăn tắm",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 10,
      image: null,
      name: "Ra trải giường",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 11,
      image: null,
      name: "Ổ điện gần giường",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 12,
      image: null,
      name: "Sàn lát gạch/đá cẩm thạch",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 13,
      image: null,
      name: "Bàn làm việc",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 14,
      image: null,
      name: "Ghế cao dành cho trẻ em",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 15,
      image: null,
      name: "Khu vực tiếp khách",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 16,
      image: null,
      name: "TV",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 17,
      image: null,
      name: "Dép",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 18,
      image: null,
      name: "Tủ lạnh",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 19,
      image: null,
      name: "Máy pha trà/cà phê",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 20,
      image: null,
      name: "Máy sấy tóc",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 21,
      image: null,
      name: "Dịch vụ báo thức",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 22,
      image: null,
      name: "Ấm đun nước điện",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 23,
      image: null,
      name: "Truyền hình cáp",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 24,
      image: null,
      name: "Két an toàn cỡ laptop",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 25,
      image: null,
      name: "Tủ hoặc phòng để quần áo",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 26,
      image: null,
      name: "Các tầng trên chỉ lên được bằng cầu thang",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 27,
      image: null,
      name: "Giấy vệ sinh",
      price: null,
      serviceType: "AMENITY",
    },
    {
      description: null,
      id: 28,
      image: null,
      name: "Máy điều hòa độc lập cho từng phòng",
      price: null,
      serviceType: "AMENITY",
    },
  ],
  BREAKFAST: [
    {
      description: "Bánh mì giòn rụm kèm trứng ốp la và rau sống.",
      id: 29,
      image: "https://example.com/images/banh-mi-trung.jpg",
      name: "Bánh mì trứng",
      price: 20000,
      serviceType: "BREAKFAST",
    },
    {
      description: "Phở bò truyền thống với nước dùng đậm đà và thịt bò tái.",
      id: 30,
      image: "https://example.com/images/pho-bo.jpg",
      name: "Phở bò",
      price: 50000,
      serviceType: "BREAKFAST",
    },
    {
      description: "Bún riêu cua với nước lèo thơm ngon, ăn kèm rau sống.",
      id: 31,
      image: "https://example.com/images/bun-rieu.jpg",
      name: "Bún riêu",
      price: 45000,
      serviceType: "BREAKFAST",
    },
    {
      description: "Cháo gà nóng hổi, ăn kèm hành lá và tiêu.",
      id: 32,
      image: "https://example.com/images/chao-ga.jpg",
      name: "Cháo gà",
      price: 35000,
      serviceType: "BREAKFAST",
    },
    {
      description: "Bánh cuốn mềm mịn, nhân thịt và nấm mèo, chấm nước mắm.",
      id: 33,
      image: "https://example.com/images/banh-cuon.jpg",
      name: "Bánh cuốn",
      price: 60000,
      serviceType: "BREAKFAST",
    },
  ],
  BUFFET: [
    {
      description: "Salad cá ngừ tươi trộn với rau xanh và sốt đặc biệt.",
      id: 44,
      image: "https://example.com/images/salad-ca-ngu.jpg",
      name: "Salad cá ngừ",
      price: 150000,
      serviceType: "BUFFET",
    },
    {
      description: "Sushi cá hồi tươi ngon, ăn kèm wasabi và nước tương.",
      id: 45,
      image: "https://example.com/images/sushi-ca-hoi.jpg",
      name: "Sushi cá hồi",
      price: 50000,
      serviceType: "BUFFET",
    },
    {
      description: "Hàu sữa nướng phủ phô mai béo ngậy.",
      id: 46,
      image: "https://example.com/images/hau-nuong.jpg",
      name: "Hàu nướng phô mai",
      price: 50000,
      serviceType: "BUFFET",
    },
    {
      description: "Sườn heo nướng sốt BBQ đậm đà.",
      id: 47,
      image: "https://example.com/images/suon-bbq.jpg",
      name: "Sườn BBQ",
      price: 150000,
      serviceType: "BUFFET",
    },
    {
      description: "Gỏi cuốn tôm thịt, chấm kèm nước mắm chua ngọt.",
      id: 48,
      image: "https://example.com/images/goi-cuon.jpg",
      name: "Gỏi cuốn",
      price: 50000,
      serviceType: "BUFFET",
    },
  ],
  DINNER: [
    {
      description: "Lẩu hải sản với tôm, mực, ngao và rau tươi ngon.",
      id: 39,
      image: "https://example.com/images/lau-hai-san.jpg",
      name: "Lẩu hải sản",
      price: 80000,
      serviceType: "DINNER",
    },
    {
      description: "Tôm sú nướng muối ớt cay nồng, thơm lừng.",
      id: 40,
      image: "https://example.com/images/tom-nuong.jpg",
      name: "Tôm nướng muối ớt",
      price: 70000,
      serviceType: "DINNER",
    },
    {
      description: "Bò bít tết với khoai tây chiên và sốt tiêu đen.",
      id: 41,
      image: "https://example.com/images/bo-bit-tet.jpg",
      name: "Bò bít tết",
      price: 300000,
      serviceType: "DINNER",
    },
    {
      description: "Cua tươi rang sốt me chua ngọt hấp dẫn.",
      id: 42,
      image: "https://example.com/images/cua-rang-me.jpg",
      name: "Cua rang me",
      price: 90000,
      serviceType: "DINNER",
    },
    {
      description: "Mực tươi xào sa tế cay cay, thơm ngon.",
      id: 43,
      image: "https://example.com/images/muc-xao.jpg",
      name: "Mực xào sa tế",
      price: 80000,
      serviceType: "DINNER",
    },
  ],
  LUNCH: [
    {
      description: "Món cơm đặc sản miền Nam với sườn nướng, bì và chả trứng.",
      id: 34,
      image: "https://example.com/images/com-tam.jpg",
      name: "Cơm tấm sườn bì chả",
      price: 40000,
      serviceType: "LUNCH",
    },
    {
      description: "Canh chua cá lóc với me, dứa, và rau thơm.",
      id: 35,
      image: "https://example.com/images/canh-chua.jpg",
      name: "Canh chua cá lóc",
      price: 50000,
      serviceType: "LUNCH",
    },
    {
      description: "Thịt gà được kho với gừng tạo hương vị đậm đà.",
      id: 36,
      image: "https://example.com/images/ga-kho-gung.jpg",
      name: "Gà kho gừng",
      price: 40000,
      serviceType: "LUNCH",
    },
    {
      description: "Cá kho tộ với nước sốt kẹo lại, ăn kèm cơm nóng.",
      id: 37,
      image: "https://example.com/images/ca-kho-to.jpg",
      name: "Cá kho tộ",
      price: 55000,
      serviceType: "LUNCH",
    },
    {
      description: "Bò mềm xào với ớt chuông, hành tây, sốt đặc biệt.",
      id: 38,
      image: "https://example.com/images/bo-luc-lac.jpg",
      name: "Bò xào lúc lắc",
      price: 200000,
      serviceType: "LUNCH",
    },
  ],
  ROOM: [
    {
      description: null,
      id: 55,
      image: null,
      name: "Dọn phòng",
      price: 200000,
      serviceType: "ROOM",
    },
    {
      description: null,
      id: 56,
      image: null,
      name: "Giặt ủi",
      price: 500000,
      serviceType: "ROOM",
    },
    {
      description: null,
      id: 57,
      image: null,
      name: "Trang trí phòng đặc biệt",
      price: 500000,
      serviceType: "ROOM",
    },
  ],
  SPA: [
    {
      description: null,
      id: 49,
      image: null,
      name: "Massage",
      price: 300000,
      serviceType: "SPA",
    },
    {
      description: null,
      id: 50,
      image: null,
      name: "Xông hơi",
      price: 300000,
      serviceType: "SPA",
    },
    {
      description: null,
      id: 51,
      image: null,
      name: "Phòng gym",
      price: 200000,
      serviceType: "SPA",
    },
  ],
  TRANSPORT: [
    {
      description: null,
      id: 52,
      image: null,
      name: "Đưa đón sân bay",
      price: 200000,
      serviceType: "TRANSPORT",
    },
    {
      description: null,
      id: 53,
      image: null,
      name: "Thuê xe",
      price: 500000,
      serviceType: "TRANSPORT",
    },
    {
      description: null,
      id: 54,
      image: null,
      name: "Taxi",
      price: 1000000,
      serviceType: "TRANSPORT",
    },
  ],
};

const serviceSlice = createSlice({
  name: "hotel",
  initialState: {
    loadingService: false,
    error: null,
    serviceList: {},
  },
  reducers: {
    //     clearHotelDetail(state) {
    //       state.hotelDetail = null; // Xóa chi tiết khi cần
    //     },
  },
  extraReducers: (builder) => {
    builder
      // Xử lý fetchListService
      .addCase(fetchListService.pending, (state) => {
        state.loadingService = true;
        state.error = null;
      })
      .addCase(fetchListService.fulfilled, (state, action) => {
        state.loadingService = false;

        const groupedServices = action.payload.reduce((acc, service) => {
          const { serviceType } = service;
          // Nếu serviceType chưa tồn tại trong accumulator, tạo mảng mới
          if (!acc[serviceType]) {
            acc[serviceType] = [];
          }
          // Thêm service vào mảng tương ứng với serviceType
          acc[serviceType].push(service);
          return acc;
        }, {});
        state.serviceList = groupedServices;
      })
      .addCase(fetchListService.rejected, (state, action) => {
        state.loadingService = false;
        state.error = action.error.message;
      });
  },
});

export const {} = serviceSlice.actions;
export default serviceSlice.reducer;
