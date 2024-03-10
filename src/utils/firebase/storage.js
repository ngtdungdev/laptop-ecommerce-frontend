import {app} from "./firebase";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

const storage = getStorage(app);

export const uploadImage = async (file) => {
    let url = "";
    if (file) {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        url = await getDownloadURL(storageRef);
    }
    return url;
};

export const deleteImage = async (imageUrl) => {
    const imagePath = new URL(imageUrl).pathname;
    const fileRef = ref(storage, imagePath);
    await deleteObject(fileRef);
};