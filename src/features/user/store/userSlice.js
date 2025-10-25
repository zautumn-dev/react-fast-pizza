import { getAddress } from '@/shared/service/apiGeocoding.js'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

const initialState = {
  fullName: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
}

const reducers = {
  updateUserInfo: (state, action) => {
    state.fullName = action.payload
  },
}

const fetchAddressThunk = createAsyncThunk('user/fetchAddress', async (_, thunkAPI) => {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition()
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  }

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position)
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`

  // 3) Then we return an object with the data that we are interested in
  return { position, address }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
  extraReducers: builder => {
    builder
      .addCase(fetchAddressThunk.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchAddressThunk.fulfilled, (state, action) => {
        state.position = action.payload.position
        state.address = action.payload.address
        state.status = 'idle'
      })
      .addCase(fetchAddressThunk.rejected, (state, action) => {
        state.error = action.error.message
        state.status = 'error'
      })
  },
})

export const { updateUserInfo } = userSlice.actions

export { fetchAddressThunk }

export default userSlice.reducer
