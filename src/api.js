import { API_URL } from "./config";
import { API_VIDEO_URL } from "./config";
const getElementByType = async() =>{
    const response = await fetch(API_URL + '/type/')
    return await response.json()
}
const getElementByVideo = async() =>{
    const response = await fetch(API_VIDEO_URL + '/video/')
    return await response.json()
}
export {getElementByType}
export {getElementByVideo}