import { put, takeLatest } from 'redux-saga/effects';
import { setSelectedSize } from './action';
import  Cookies  from 'js-cookie';

function* saveSelectedSize(action) {
  try {
    
    const size  = action.payload;
    Cookies.set('selectedSize', size.toString(), { expires: 7 });
    yield Cookies.set('selectedSize', size.toString(), { expires: 7 });
  } catch (error) {
    console.error('Error saving selected size:', error);
  }
}

export default function* rootSaga() {
  console.log("size11");
  yield takeLatest('SET_SELECTED_SIZE', saveSelectedSize);
}

// export default function* rootSaga() {
//    console.log("size112");
//   yield [watchSizeSelection()];
// }
