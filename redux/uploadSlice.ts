import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UploadState {
    file: File | null;
    progress:number
    isUploading:boolean|null;
    isCompleteupload:boolean | null,
    uploadedUrl:string | null;
    tempVideoId:string | null
}
const initialState:UploadState = {
    file:null,
    progress:0,
    isUploading:false,
    isCompleteupload:false,
    uploadedUrl:null,
    tempVideoId:null
}
const uploadSlice = createSlice({
    name:'upload',
    initialState,
    reducers:{
        startUpload(state, action: PayloadAction<{ file: File; tempVideoId: string }>) {
      state.file = action.payload.file;
      state.tempVideoId = action.payload.tempVideoId;
      state.isUploading = true;
      state.progress = 0;
      state.uploadedUrl = null;
    },
    setProgress(state, action: PayloadAction<number>) {
      state.progress = action.payload;
    },
    finishUpload(state, action: PayloadAction<string>) {
      state.uploadedUrl = action.payload;
      state.isUploading = false;
      state.isCompleteupload = true
    },
    resetUpload(state) {
      Object.assign(state, initialState);
    },
    }
})
export const { startUpload, setProgress, finishUpload, resetUpload } = uploadSlice.actions;
export default uploadSlice.reducer;