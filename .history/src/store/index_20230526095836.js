// store.js
import  {configureStore} from '@reduxjs/toolkit';
import authReducer from '~/reducer/AuthReducer/authReducer.js';
import friendReducer from '~/reducer/FriendReducer/friendReducer.js';

// Lưu trạng thái vào localStorage
const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('reduxStateUser', serializedState);
  } catch (error) {
    // Xử lý lỗi khi lưu trạng thái
  }
};

// Khôi phục trạng thái từ sessionStorage
const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('reduxStateUser');
    if (serializedState === null) {
      return undefined; // Trạng thái mặc định nếu không có dữ liệu trong localStorage
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined; // Trạng thái mặc định nếu xảy ra lỗi
  }
};

// Khởi tạo Redux store với trạng thái khôi phục từ sessionStorage
const persistedState = loadStateFromSessionStorage();
const store = configureStore({
  reducer: {
    user: authReducer,
    friend: friendReducer,
  },
  preloadedState: persistedState, // Sử dụng trạng thái khôi phục từ sessionStorage
});

// Lắng nghe sự thay đổi của Redux state và lưu vào sessionStorage
store.subscribe(() => {
  const state = store.getState();
  saveStateToSessionStorage(state);
});

export default store;

