import { takeEvery, put, call } from 'redux-saga/effects'
import { requestDog, requestDogSuccess, requestDogError } from '../action/action';

export function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

interface ResponseApi{
 message: string,
 status: string
}

  
function* fetchDogAsync() {
    try {
      yield put(requestDog());
      const data: ResponseApi = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      );
      yield put(requestDogSuccess(data));
    } catch (error) {
      yield put(requestDogError());
    }
}